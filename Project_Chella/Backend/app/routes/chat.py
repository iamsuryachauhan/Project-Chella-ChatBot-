from fastapi import APIRouter

from app.models.schemas import (
    ChatRequest,
    ChatResponse
)

from app.services.openai_service import (
    get_ai_response
)

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.post(
    "/",
    response_model=ChatResponse
)
def chat(
    request: ChatRequest
):
    ai_response = (
        get_ai_response(
            request.message
        )
    )

    return {
        "response":
        ai_response
    }