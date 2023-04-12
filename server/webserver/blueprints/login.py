from flask import current_app, Blueprint, request
from google.oauth2 import id_token
from google.auth.transport import requests
import os
from dotenv import load_dotenv

load_dotenv()

login = Blueprint("login", __name__, url_prefix="/login")


@login.route("/", methods=["GET"])
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
