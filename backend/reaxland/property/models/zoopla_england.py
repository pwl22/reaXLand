from dataclasses import asdict

import numpy as np

from reaxland.property.models.base_model import BaseModel, ExtractedFeatures

# TODO: Cycle import
# if TYPE_CHECKING:
#     from reaxland.property.base import PropertyFeatures


class Model(BaseModel):
    def features_adapter(
        self,
        features: "reaxland.property.base.PropertyFeatures",  # type: ignore[name-defined]
    ) -> ExtractedFeatures:
        return asdict(features)

    def predict_price(
        self,
        features: "reaxland.property.base.PropertyFeatures",  # type: ignore[name-defined]
        year: int,
        rng: np.random.Generator,
    ) -> float:
        # TODO: Consider not having to extract features in each model instance
        # i.e. do it somehow in base class
        extracted_features = self.features_adapter(features)
        return rng.uniform(100_000, 1_000_000)
