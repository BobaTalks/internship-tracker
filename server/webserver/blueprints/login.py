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

load_dotenv()

login = Blueprint("login", __name__, url_prefix="/login")


@login.route("", methods=["POST"])
def token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username).one_or_none()
    if not user or not user.check_password(password):
        return jsonify({"Wrong username or password"}), 401

    additional_claims = {"aud": "some_audience", "foo": "bar"}
    access_token = create_access_token(
        identity=user, additional_claims=additional_claims
    )
    return jsonify(access_token=access_token)


@login.route("/who_am_i", methods=["GET"])
@jwt_required()
def return_user():
    return jsonify(
        id=current_user.id,
        full_name=current_user.full_name,
        username=current_user.username,
    )


@login.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    return jsonify(foo="bar")


@login.route("/without_cookies", methods=["POST"])
def login_without_cookies():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username).one_or_none()
    if not user or not user.check_password(password):
        return jsonify({"Wrong username or password"}), 401

    additional_claims = {"aud": "some_audience", "foo": "bar"}
    access_token = create_access_token(
        identity=user, additional_claims=additional_claims
    )
    return jsonify(access_token=access_token)


@login.route("/with_cookies", methods=["POST"])
def login_with_cookies():
    response = jsonify({"msg": "login successful"})
    access_token = create_access_token(identity="example_user")
    set_access_cookies(response, access_token)
    return response


@login.route("/logout_without_cookies", methods=["GET", "POST"])
@jwt_required()
def logout_without_cookies():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


@login.route("/google-button", methods=["GET"])
def index():
    # sample view for showing the Google Sign In Button
    if request.method == "GET":
        return """
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <div id="g_id_onload"
        data-client_id="GOOGLE_CLIENT_ID"
        data-context="signup"
        data-ux_mode="popup"
        data-login_uri="http://localhost:5000/login/google-auth"
        data-nonce=""
        data-auto_prompt="false">
    </div>

    <div class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left">
    </div>"""


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

            # Or, if multiple clients access the backend server:
            # idinfo = id_token.verify_oauth2_token(token, requests.Request())
            # if idinfo['aud'] not in [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]:
            #     raise ValueError('Could not verify audience.')

            # If auth request is from a G Suite domain:
            # if idinfo['hd'] != GSUITE_DOMAIN_NAME:
            #     raise ValueError('Wrong hosted domain.')

            # ID token is valid. Get the user's Google Account ID and Name from the decoded token.
            userid = idinfo["sub"]
            client_name = idinfo["name"]
        except ValueError:
            # Invalid token
            pass
        return f"<h1>Hello {client_name}</h1>"
