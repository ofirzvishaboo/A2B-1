from sqlalchemy import Column, String, DateTime, Text
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import UUID
from database import Base
from uuid import uuid4


class ContactForm(Base):
    __tablename__ = "contact_form"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    company = Column(String(255), nullable=True)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_onupdate=func.now())

