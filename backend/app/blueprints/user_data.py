from flask import Blueprint, jsonify, request
from bson import ObjectId
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models.user_data import UserData

user_data = Blueprint("user_data", __name__)

@user_data.route("", methods=["GET", "POST"])
@jwt_required()
def user_data_index():
    identity = get_jwt_identity()

    if request.method == "GET":
        user_data_doc = UserData.objects(user=ObjectId(identity["id"])).first()
        return jsonify(user_data_doc)
    else:
        data = request.json
        UserData.objects(user=ObjectId(identity["id"])).update_one(
            firstname=data["firstname"],
            lastname=data["lastname"],
            age=data["age"],
            income=data["income"],
            family_members_count=data["family_members_count"],
            country=data["country"],
            expense=data["expense"]
        )
        return jsonify({
            "success": True
        })