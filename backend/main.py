from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from sqlalchemy.orm import Session
import crud
import models
import schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # フロントエンドのURL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "hiro"}


@app.get("/blogs/", response_model=List[schemas.Blog])
def read_blogs(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    blogs = crud.get_blogs(db, skip=skip, limit=limit)
    return blogs
