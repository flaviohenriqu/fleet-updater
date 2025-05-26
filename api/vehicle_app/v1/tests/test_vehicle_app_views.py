"""Tests for the vehicle application views in FastAPI."""

from fastapi.testclient import TestClient

from vehicle_app.v1.schemas import vehicles, VehicleStatus
from main import app

client = TestClient(app)


def test_get_vehicles():
    """Test retrieving all vehicles."""
    response = client.get("/api/v1/vehicles")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert all("id" in v and "name" in v and "status" in v for v in data)


def test_put_vehicle_status_success():
    """Test updating the status of a vehicle successfully."""
    vehicle_id = vehicles[0].id
    new_status = VehicleStatus.IN_MAINTENANCE.value

    response = client.put(f"/api/v1/vehicles/{vehicle_id}/status", json={"status": new_status})
    assert response.status_code == 200
    data = response.json()
    assert data["id"] == vehicle_id
    assert data["status"] == new_status


def test_put_vehicle_status_not_found():
    """Test updating the status of a vehicle that does not exist."""
    response = client.put("/api/v1/vehicles/999/status", json={"status": "Available"})
    assert response.status_code == 404
    assert response.json() == {"detail": "Vehicle not found"}


def test_put_vehicle_status_invalid_enum():
    """Test updating the status of a vehicle with an invalid enum value."""
    vehicle_id = vehicles[0].id
    response = client.put(f"/api/v1/vehicles/{vehicle_id}/status", json={"status": "Broken"})
    assert response.status_code == 422  # Unprocessable Entity (invalid enum)
