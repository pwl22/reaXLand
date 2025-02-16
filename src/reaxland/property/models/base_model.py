from abc import ABC, abstractmethod

# if TYPE_CHECKING:
#     from reaxland.property.base import PropertyFeatures

type ExtractedFeatures = dict[str, int]


class BaseModel(ABC):
    @abstractmethod
    def features_adapter(
        self,
        features: "reaxland.property.base.PropertyFeatures",  # type: ignore[name-defined]
    ) -> ExtractedFeatures:
        pass

    @abstractmethod
    def predict_price(
        self,
        features: "reaxland.property.base.PropertyFeatures",  # type: ignore[name-defined]
        year: int,
    ) -> float:
        pass
