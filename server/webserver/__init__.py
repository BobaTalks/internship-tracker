from flask import Flask
from flask_cors import CORS
import os
import time
from dotenv import load_dotenv

load_dotenv()


def create_app(test_config=None):
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:3000"])

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
    from .blueprints.jobs import jobs

    app.register_blueprint(login)
    app.register_blueprint(signup)
    app.register_blueprint(jobs)

    with app.app_context():
        # check if database is ready to connect
        while 1:
            try:
                db.session.execute(db.text("SELECT 1"))
            except db.exc.OperationalError:
                time.sleep(1)
            else:
                break

        db.create_all()

        with open("./webserver/mock_schema.sql") as file:
            query = db.text(file.read())
            db.session.execute(query)
            db.session.commit()
            file.close()

    return app
