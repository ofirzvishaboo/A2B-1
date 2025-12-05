from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from database import engine, Base
from routers.contact import router as contact_router
import uvicorn

# Create FastAPI app
app = FastAPI(
    title=settings.PROJECT_NAME,
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure appropriately for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    # Create database tables
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


@app.on_event("shutdown")
async def shutdown_event():
    await engine.dispose()


@app.get("/")
async def root():
    return {"message": "Hello from FastAPI backend!"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


app.include_router(contact_router) # /api/contact


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
