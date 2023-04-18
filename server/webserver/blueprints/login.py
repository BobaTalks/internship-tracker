from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    create_access_token,
    get_jwt_identity,
    get_jwt,
    jwt_required,
    current_user,
    set_access_cookies,
    unset_jwt_cookies,
)
from google.oauth2 import id_token
from google.auth.transport import requests
import os
from dotenv import load_dotenv
from webserver.models import User
from argon2.exceptions import VerifyMismatchError

load_dotenv()

login = Blueprint("login", __name__, url_prefix="/login")


@login.route("", methods=["POST"])
def token():
    name = request.json.get("name", None)
    password = request.json.get("password", None)

    try:
        user = User.query.filter_by(name=name).one_or_none()
        user.check_password(user.hash, password)
        if not user:
            return jsonify({"Error": "Wrong username or password"}), 401
    except VerifyMismatchError:
        return jsonify({"Error": "Wrong username or password"}), 401

    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token)


# TODO: configure handling user login when authenticating with google
@login.route("/google-auth", methods=["POST"])
def google_login():
    if request.method == "POST":
        # when the user logins in, the token will be the value to a key "credential"
        token = request.form["credential"]
        try:
            # Specify the CLIENT_ID of the app that accesses the backend:
            idinfo = id_token.verify_oauth2_token(
                token, requests.Request(), os.environ["GOOGLE_CLIENT_ID"]
            )

            userid = idinfo["sub"]
            client_name = idinfo["name"]

            # TODO:
            # Add code to check if user is in the database. If not, create a User Account
        except ValueError:
            # Invalid token
            pass
        return
