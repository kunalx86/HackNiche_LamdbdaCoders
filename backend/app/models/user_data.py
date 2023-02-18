from app import db

class UserData(db.Document):
    user = db.ObjectIdField(db_field="user", required=True)
    firstname = db.StringField()
    lastname = db.StringField()
    age = db.IntField()
    income = db.StringField()
    family_members_count = db.IntField()
    country = db.StringField()
    expense = db.StringField()
    meta = {
        "indexes": [
            {
                "fields": ["user"],
                "unique": True
            }
        ]
    }