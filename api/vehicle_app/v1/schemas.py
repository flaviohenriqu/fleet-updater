"""Vehicle management schemas for the API."""

from enum import Enum

from pydantic import BaseModel


class VehicleStatus(str, Enum):
    """Enumeration for vehicle status."""

    AVAILABLE = "Available"
    IN_MAINTENANCE = "In Maintenance"
    OUT_OF_SERVICE = "Out of Service"


class Vehicle(BaseModel):
    """Model representing a vehicle."""

    id: int
    name: str
    status: VehicleStatus


class StatusUpdateRequest(BaseModel):
    """Request model for updating vehicle status."""

    status: VehicleStatus


# In-memory data store
vehicles: list[Vehicle] = [
    Vehicle(id=1, name="Truck A", status=VehicleStatus.AVAILABLE),
    Vehicle(id=2, name="Van B", status=VehicleStatus.IN_MAINTENANCE),
    Vehicle(id=3, name="Car C", status=VehicleStatus.OUT_OF_SERVICE),
]
