from flask import Flask
import os
from dotenv import load_dotenv

load_dotenv()


def create_app(test_config=None):
    app = Flask(__name__)

    if test_config:
        # configure test database to keep testing data separate
        app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["TEST_URI"]
        app.config["JWT_SECRET_KEY"] = "super_secret_key"
    else:
        app.config["JWT_SECRET_KEY"] = os.urandom(24)
        app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["POSTGRES_URI"]
        app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
        app.config["JWT_COOKIE_SECURE"] = True

    from .extensions import jwt, db

    jwt.init_app(app)
    db.init_app(app)

    from .blueprints.login import login
    from .blueprints.signup import signup

    app.register_blueprint(login)
    app.register_blueprint(signup)

    with app.app_context():
        db.create_all()

    return app
