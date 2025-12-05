from database import Base

# Import all models here so Alembic can detect them
from .contact_form import ContactForm

__all__ = ["Base", "ContactForm"]

