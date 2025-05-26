"""Vehicle API Views"""

from fastapi import APIRouter, HTTPException
from .schemas import Vehicle, StatusUpdateRequest
from .schemas import vehicles  # Assuming vehicles is imported from schemas


vehicle_router = APIRouter(prefix="/v1", tags=["Vehicles V1"])


@vehicle_router.get("/vehicles", response_model=list[Vehicle])
def get_vehicles():
    """
    Return all vehicles with their status.
    """
    return vehicles


@vehicle_router.put("/vehicles/{vehicle_id}/status", response_model=Vehicle)
def update_vehicle_status(vehicle_id: int, req: StatusUpdateRequest):
    """
    Update the status of a specific vehicle by ID.
    """
    for vehicle in vehicles:
        if vehicle.id == vehicle_id:
            vehicle.status = req.status
            return vehicle
    raise HTTPException(status_code=404, detail="Vehicle not found")
