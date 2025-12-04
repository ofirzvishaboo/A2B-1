from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    # Database settings
    DATABASE_URL: str = "postgresql+asyncpg://user:password@localhost:5432/dbname"

    # FastAPI settings
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Backend API"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()

