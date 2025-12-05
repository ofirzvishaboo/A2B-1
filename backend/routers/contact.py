from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import APIKeyHeader
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from config import settings
from models.contact_form import ContactForm
from schemas.contact import ContactFormCreate, ContactFormResponse

router = APIRouter(prefix="/api/contact", tags=["Contact"])

api_key_header = APIKeyHeader(name="X-API-Key", auto_error=False)


async def require_admin_api_key(api_key: str = Depends(api_key_header)):
    if not settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=500,
            detail="Server misconfigured (missing ADMIN_API_KEY)",
        )
    if api_key != settings.ADMIN_API_KEY:
        raise HTTPException(status_code=401, detail="Invalid or missing API key")

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
        # add email notification
        # await send_email_notification(contact)
        return contact
    except Exception as exc:  # pragma: no cover - error handling path
        await db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Error creating contact form: {exc}",
        ) from exc


@router.get("/", response_model=list[ContactFormResponse], dependencies=[Depends(require_admin_api_key)])
async def get_contact_forms(
    db: AsyncSession = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
):
    """Get all contact form submissions"""
    result = await db.execute(select(ContactForm).offset(skip).limit(limit))
    return result.scalars().all()


@router.delete("/{contact_id}", dependencies=[Depends(require_admin_api_key)])
async def delete_contact_form(
    contact_id: UUID,
    db: AsyncSession = Depends(get_db),
):
    """Delete a contact form submission"""
    contact = await db.get(ContactForm, contact_id)
    if not contact:
        raise HTTPException(status_code=404, detail="Contact form not found")
    await db.delete(contact)
    await db.commit()
    return {"message": "Contact form deleted successfully"}