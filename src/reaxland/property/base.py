"""Base class for property simulation."""

import random
from dataclasses import dataclass

import numpy as np

from reaxland.property.models import zoopla_england
from reaxland.property.models.base_model import BaseModel


@dataclass
class PropertyFeatures:
    """Features of a property for price prediction."""

    bedrooms: int
    bathrooms: int


@dataclass
class BoughtDetails:
    """Details of a property bought by an agent."""

    bought_price: float
    owner: str


class Property:
    def __init__(
        self,
        property_id: int,
        features: PropertyFeatures,
        start_year: int,
        price_model: BaseModel,
    ) -> None:
        """Initializes a property with features and price model."""
        self._property_id = property_id
        self._features = features
        self._bought_details: BoughtDetails | None = None
        self._year = start_year
        self._price_model = price_model

        # Internal selling price of house
        # Not visible to agent unless in selling state
        self._price = self._price_model.predict_price(self._features, self._year)

    def predict_price(self, year: int) -> None:
        """Calls price model, but makes adjustments based on simulated environment"""
        self._price *= np.random.uniform(0.98, 1.02)

    def last_selling_price(self) -> float:
        """Returns the last/current selling price of the property.

        Agent observations are then public information (i.e. not predicted price)
        """
        return (
            self._bought_details.bought_price if self._bought_details else self._price
        )

    @property
    def owner(self) -> str | None:
        """Returns the owner of the property."""
        return self._bought_details.owner if self._bought_details else None

    def buy(self, agent: str) -> None:
        """Marks property as sold."""
        self._bought_details = BoughtDetails(bought_price=self._price, owner=agent)

    def sell(self) -> float:
        """Marks property as sold, returns profit."""
        if not self._bought_details:
            raise ValueError("Property must be bought before selling.")
        profit = self._price - self._bought_details.bought_price
        self._bought_details = None
        return profit

    def reset(self, year: int) -> None:
        """Resets property state for new episodes."""
        self.predict_price(year)
        self._year = year
        self._bought_details = None

    def step(self, year: int) -> None:
        """Simulates a time step."""
        self.predict_price(year)
        self._year = year


def create_properties(num_properties: int, start_year: int) -> list[Property]:
    # TODO: How to generate the features to be more representative of the model?
    # Maybe move some parts into model itself?
    return [
        Property(
            property_id=i,
            features=PropertyFeatures(
                bedrooms=random.randint(1, 5), bathrooms=random.randint(1, 3)
            ),
            start_year=start_year,
            price_model=random.choice([zoopla_england]).Model(),
        )
        for i in range(num_properties)
    ]
