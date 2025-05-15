from sqlalchemy.orm import Session
import models


def get_blog(db: Session, blog_id: str):
    return db.query(models.Blog).filter(models.Blog.id == blog_id).first()


def get_blogs(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Blog).offset(skip).limit(limit).all()
