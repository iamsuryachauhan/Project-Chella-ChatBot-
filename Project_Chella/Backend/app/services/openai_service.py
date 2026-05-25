# from openai import OpenAI

# from app.config import (
#     OPENAI_API_KEY
# )

# client = OpenAI(
#     api_key=OPENAI_API_KEY
# )


# def get_ai_response(
#     user_message: str
# ):
#     response = (
#         client.chat.completions.create(
#             model="gpt-4.1-mini",
#             messages=[
#                 {
#                     "role": "system",
#                     "content":
#                     """
#                     You are Chella,
#                     a helpful AI assistant.
#                     Keep responses clear,
#                     smart and concise.
#                     """
#                 },
#                 {
#                     "role": "user",
#                     "content":
#                     user_message
#                 }
#             ]
#         )
#     )

#     return (
#         response
#         .choices[0]
#         .message
#         .content
#     )



from google import genai

from app.config import (
    GEMINI_API_KEY
)

client = genai.Client(
    api_key=GEMINI_API_KEY
)


def get_ai_response(
    user_message: str
):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"""
        You are Chella,
        a helpful AI assistant.

        User Message:
        {user_message}
        """
    )

    return response.text