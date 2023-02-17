from app import db

class User(db.Document):
    email = db.StringField(required=True)
    password = db.StringField(required=True)
    meta = {
        "indexes": [
            {
                "fields": ["email"],
                "unique": True
            }
        ]
    }
