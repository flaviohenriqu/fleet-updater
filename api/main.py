import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from vehicle_app.v1.views import vehicle_router


def create_application():
    """Create FastAPI application and configure it."""

    # Initialize Fast API
    app = FastAPI(
        title="Fleet Status Updater API",
        description="API for updating and retrieving vehicle statuses in a fleet management system.",
        version="1.0.0",
        openapi_version="3.0.2",
    )

    # Include the routers from each app
    app.include_router(vehicle_router, prefix="/api")

    # Enable CORS for frontend
    origins = ["*"]
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return app


app = create_application()

if __name__ == "__main__":
    # If this file is run directly, start the server for development
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
