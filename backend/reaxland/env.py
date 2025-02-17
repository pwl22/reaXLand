from collections.abc import Callable
from copy import copy
from functools import cache
from typing import Any

import gymnasium.spaces as spaces
import numpy as np
import numpy.typing as npt
from pettingzoo import ParallelEnv

from reaxland.property.base import create_properties

REWARD_HYPERPARAMS = {
    "liquidity_reward": 0.0001,
    "sale_profit": 0.5,
    "buy_penalty": 0.01,
    # TODO: Define holding cost func in Property class
    # In which case, maybe move hyperparams to config.py to avoid cyclic imports
    "holding_cost": 0.002,
}

# 0 -> Do nothing
# 1 -> Buy property 0, 2 -> Sell property 0
# 3 -> Buy property 1, 4 -> Sell property 1
ACTION_MAPPING: dict[str, Callable[[int], int]] = {
    "hold": lambda _: 0,
    "buy": lambda i: 1 + i * 2,
    "sell": lambda i: 2 + i * 2,
}

type Info = dict[str, Any]
type Observation = dict[str, Any]


class ReaXLand(ParallelEnv[str, Any, np.int64]):
    """PettingZoo ParallelEnv for a real estate market simulation."""

    metadata = {
        "name": "reaXLand",
    }

    def __init__(self) -> None:
        """Initializes the ReaXLand environment."""
        self.possible_agents = ["investor_agent"]

        self.timestep = 0
        self.number_properties = 1
        self.properties = create_properties(
            num_properties=self.number_properties, start_year=self.timestep
        )

    def reset(
        self, seed: int | None = None, options: dict[str, int] | None = None
    ) -> tuple[Observation, Info]:
        """Resets the environment to its initial state."""
        self.agents = copy(self.possible_agents)
        np.random.seed(seed)

        self.timestep = 0
        for prop in self.properties:
            prop.reset(self.timestep, seed)

        self.cash_balance: dict[str, float] = {
            agent: 100_000.0 for agent in self.agents
        }

        observations = self._get_obs()
        infos = self._get_info()
        return observations, infos

    def step(
        self, actions: dict[str, np.int64]
    ) -> tuple[
        Observation, dict[str, float | int], dict[str, bool], dict[str, bool], Info
    ]:
        investor_agent_action = actions["investor_agent"]
        rewards: dict[str, float] = {a: 0.0 for a in self.agents}

        self.timestep += 1

        for i, prop in enumerate(self.properties):
            if prop.owner is not None:
                rewards[prop.owner] -= (
                    prop.last_selling_price() * REWARD_HYPERPARAMS["holding_cost"]
                )

            if investor_agent_action == ACTION_MAPPING["buy"](i):
                buying_price = prop.last_selling_price()
                prop.buy("investor_agent")
                self.cash_balance["investor_agent"] -= buying_price
                rewards["investor_agent"] -= (
                    buying_price * REWARD_HYPERPARAMS["buy_penalty"]
                )
            elif investor_agent_action == ACTION_MAPPING["sell"](i):
                profit = prop.sell()
                self.cash_balance["investor_agent"] += prop.last_selling_price()
                rewards["investor_agent"] += profit * REWARD_HYPERPARAMS["sale_profit"]

            prop.step(self.timestep)

        for agent in self.agents:
            rewards[agent] += (
                self.cash_balance[agent] * REWARD_HYPERPARAMS["liquidity_reward"]
            )

        terminations = {agent: False for agent in self.agents}
        truncations = {agent: False for agent in self.agents}

        observations = self._get_obs()
        infos = self._get_info()

        if self.timestep > 100:
            terminations = {agent: True for agent in self.agents}
            rewards = {agent: 0 for agent in self.agents}
            self.agents = []

        return observations, rewards, terminations, truncations, infos

    def render(self) -> None:
        """Displays the current state of the real estate market and agent status."""

        print(f"\n===== Time Step {self.timestep} =====")

        # Display agent financials
        for agent in self.agents:
            print(f"Agent: {agent} | Cash Balance: ${self.cash_balance[agent]:,.2f}")

        print("\n----- Properties Market -----")

        for i, prop in enumerate(self.properties):
            owner_display = (
                "Unowned" if prop.owner is None else f"Owned by {prop.owner}"
            )
            print(
                f"Property {i}: {owner_display} | Price: ${prop.last_selling_price():,.2f}"
            )

        print("\n==========================\n")

    def _get_info(self) -> Info:
        """Returns information about the environment state."""
        return {agent: {} for agent in self.agents}

    def _get_obs(self) -> Observation:
        """Returns observations for each agent."""
        return {
            agent: {
                "cash_balance": self.cash_balance[agent],
                "properties": {
                    f"property_{i}": {
                        "owner": self._get_owner_index(self.properties[i].owner),
                        "sale_price": self.properties[i].last_selling_price(),
                    }
                    for i in range(self.number_properties)
                },
                "action_mask": self._action_mask(agent),
            }
            for agent in self.agents
        }

    def _get_owner_index(self, owner: str | None) -> int:
        """Returns the index of the owner in the list of possible agents."""
        if owner is None:
            return 0  # TODO: Find more appropriate value

        # TODO: Consider using a dictionary for faster lookup when more agents
        return self.agents.index(owner) + 1

    def _action_mask(self, agent: str) -> npt.NDArray[np.float64]:
        """Returns a mask for valid actions to prevent invalid choices."""

        mask = np.zeros(self.action_space(agent).n, dtype=np.float64)

        mask[0] = 1  # Can always do nothing

        for i, prop in enumerate(self.properties):
            if prop.owner == agent:
                # Can sell property
                mask[2 + i * 2] = 1
            elif (
                prop.owner is None
                and self.cash_balance[agent] >= prop.last_selling_price()
            ):
                # Can buy property
                mask[1 + i * 2] = 1

        return mask

    @cache
    def action_space(self, agent: str) -> spaces.Discrete:
        """Returns the action space for the given agent."""
        # 2 actions per property, and can do nothing (+1)
        # 0 -> Do nothing
        # 1 -> Buy property 0, 2 -> Sell property 0
        # 3 -> Buy property 1, 4 -> Sell property 1
        return spaces.Discrete(1 + self.number_properties * 2)

    @cache
    def observation_space(self, agent: str) -> spaces.Dict:
        """Returns the observation space for the given agent."""
        return spaces.Dict(
            {
                "cash_balance": spaces.Box(
                    low=0, high=np.inf, shape=(1,), dtype=np.float32
                ),
                "properties": spaces.Tuple(
                    [
                        spaces.Dict(
                            {
                                "owner": spaces.Discrete(
                                    len(self.possible_agents) + 1
                                ),  # Either owned by agent or unowned
                                "sale_price": spaces.Box(
                                    low=0, high=np.inf, shape=(1,), dtype=np.float32
                                ),
                            }
                        )
                        for _ in range(self.number_properties)
                    ]
                ),
            }
        )
