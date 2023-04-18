from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
from webserver.models import User
from webserver.queries import create_user
from utils.hashing import create_hash

signup = Blueprint("signup", __name__, url_prefix="/signup")


@signup.route("", methods=["POST"])
def create_account():
    email = request.json.get("email", None)
    name = request.json.get("name", None)
    password = request.json.get("password", None)

    # check if user already exists in database
    user = User.query.filter_by(email=email).one_or_none()
    if user:
        return jsonify({"Error": "Email already in use"}), 400

    hash = create_hash(password)
    create_user(email=email, name=name, hash=hash, authentication_method="Traditional")
    return jsonify({"Success": "Account Created"}), 201
