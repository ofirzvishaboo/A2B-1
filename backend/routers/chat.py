from fastapi import APIRouter, HTTPException
from openai import AsyncOpenAI
from config import settings
from schemas.chat import ChatRequest, ChatResponse

router = APIRouter(prefix="/api/chat", tags=["Chat"])

# Initialize OpenAI client
client = None
if settings.OPENAI_API_KEY:
    client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)

SYSTEM_PROMPT = """
You are a helpful, professional AI assistant for "A2B Services".
A2B Services provides AI solutions for small businesses, including:
- WhatsApp AI Chatbots
- Inventory Management Systems
- Smart Automation
- Analytics Dashboards

Your goal is to answer visitor questions about these services, explain how they help small businesses, and encourage them to use the "Get Started" or "Contact" forms.
Be concise, friendly, and business-oriented.
"""

@router.post("/", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not client:
        raise HTTPException(status_code=503, detail="Chat service unavailable (API Key missing)")

    try:
        response = await client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": request.message}
            ],
            max_tokens=150,
            temperature=0.7
        )
        return ChatResponse(response=response.choices[0].message.content)
    except Exception as e:
        print(f"OpenAI Error: {e}")
        raise HTTPException(status_code=500, detail="Error generating response")

