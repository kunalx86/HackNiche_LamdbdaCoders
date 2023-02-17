from flask import Flask, jsonify
from flask_mongoengine import MongoEngine
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from flask_bcrypt import Bcrypt

from app.config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = MongoEngine(app)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)


from app.blueprints.auth import auth
app.register_blueprint(auth, url_prefix="/auth")

@app.route("/me")
@jwt_required()
def protected():
    identity = get_jwt_identity()
    return jsonify(identity=identity)