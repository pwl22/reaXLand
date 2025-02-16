"""Tests for ReaXLand environment."""

import numpy as np
import pytest
from pettingzoo.test import parallel_api_test

from reaxland.env import ReaXLand


def test_pettingzoo_api() -> None:
    """Test ReaXLand environment with PettingZoo parallel API.

    See: https://pettingzoo.farama.org/content/environment_tests/
    """
    env = ReaXLand()
    parallel_api_test(env, num_cycles=1_000_000)


def test_buy_action() -> None:
    """Buy action should reduce cash balance of investor agent."""
    env = ReaXLand()
    env.reset(seed=42)

    assert env.cash_balance["investor_agent"] == 100_000.0
    env.step({"investor_agent": np.int64(1)})
    assert env.cash_balance["investor_agent"] < 100_000.0


def test_sell_action() -> None:
    """Sell action should increase cash balance of investor agent."""
    env = ReaXLand()
    env.reset(seed=42)

    env.step({"investor_agent": np.int64(1)})
    assert env.cash_balance["investor_agent"] < 100_000.0
    env.step({"investor_agent": np.int64(2)})
    assert env.cash_balance["investor_agent"] >= 100_000.0


def test_render(capfd: pytest.CaptureFixture[str]) -> None:
    """Render should print out the state of the environment."""
    env = ReaXLand()
    env.reset(seed=42)
    env.render()
    out, _ = capfd.readouterr()
    # TODO: Improve by passing in amount of money and checking output
    assert "investor_agent" in out
