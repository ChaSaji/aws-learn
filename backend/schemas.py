from pydantic import BaseModel
from uuid import UUID
from datetime import datetime


class Blog(BaseModel):
    id: UUID
    user_sub: UUID
    title: str
    content: str
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
