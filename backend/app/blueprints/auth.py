from flask import Blueprint, request, jsonify
from app import bcrypt, db
from flask_jwt_extended import create_access_token
from app.models.user import User

auth = Blueprint("auth", __name__)

@auth.route("/register", methods=["POST"])
def register_user():
    data = request.json
    print(f"Register controller, {data}")
    pw_hash = bcrypt.generate_password_hash(data["password"], 10)
    print(f"{pw_hash}")
    user = User(email=data["email"], password=pw_hash).save()
    access_token = create_access_token(identity={
        "id": str(user.pk),
        "email": data["email"]
    })
    print(f"Access Token {access_token}")
    return jsonify(access_token=access_token)

@auth.route("/login", methods=["POST"])
def login_user():
    data = request.json
    print(f"Login controller, {data}")
    user = User.objects(email=data["email"]).first()
    print(f"User: {user.email}")
    if not user or not bcrypt.check_password_hash(user.password, data["password"]):
        return jsonify({
            "error": "Either email or password is wrong"
        })
    access_token = create_access_token(identity={
        "id": str(user.pk),
        "email": data["email"]
    })
    print(f"Access Token {access_token}")
    return jsonify(access_token=access_token)
