from flask import Flask, jsonify
from flask_mongoengine import MongoEngine
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from flask_bcrypt import Bcrypt

from app.config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = MongoEngine(app)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
CORS(app, origins="*", supports_credentials=False)


from app.blueprints.auth import auth
app.register_blueprint(auth, url_prefix="/auth")

from app.blueprints.user_data import user_data
app.register_blueprint(user_data, url_prefix="/user_data")

from app.blueprints.bank_statement import bank_statement
app.register_blueprint(bank_statement, url_prefix="/bank_statement")

@app.route("/me")
@jwt_required()
def protected():
    identity = get_jwt_identity()
    return jsonify(identity=identity)