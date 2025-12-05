from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from models.contact_form import ContactForm
from schemas.contact import ContactFormCreate, ContactFormResponse

router = APIRouter(prefix="/api/contact", tags=["Contact"])


@router.post("/", response_model=ContactFormResponse)
async def create_contact_form(
    contact_data: ContactFormCreate,
    db: AsyncSession = Depends(get_db)
):
    """Create a new contact form submission"""
    try:
        contact = ContactForm(
            name=contact_data.name,
            email=contact_data.email,
            company=contact_data.company,
            message=contact_data.message,
        )
        db.add(contact)
        await db.commit()
        await db.refresh(contact)
        return contact
    except Exception as exc:  # pragma: no cover - error handling path
        await db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Error creating contact form: {exc}",
        ) from exc


@router.get("/", response_model=list[ContactFormResponse])
async def get_contact_forms(
    db: AsyncSession = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
):
    """Get all contact form submissions"""
    result = await db.execute(select(ContactForm).offset(skip).limit(limit))
    return result.scalars().all()
