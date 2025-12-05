from pydantic import BaseModel, EmailStr
from datetime import datetime
from uuid import UUID


class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    company: str | None = None
    message: str

    class Config:
        from_attributes = True


class ContactFormResponse(BaseModel):
    id: UUID
    name: str
    email: str
    company: str | None
    message: str
    created_at: datetime

    class Config:
        from_attributes = True

