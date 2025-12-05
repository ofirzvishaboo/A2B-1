from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional


class Settings(BaseSettings):
    # Database settings
    DATABASE_URL: str = "postgresql+asyncpg://user:password@localhost:5432/dbname"

    # FastAPI settings
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Backend API"

    # Security
    ADMIN_API_KEY: Optional[str] = None

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
        extra="ignore"
    )


settings = Settings()
