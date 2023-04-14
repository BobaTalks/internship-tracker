from flask import Flask
import os


def create_app(test_config=None):
    app = Flask(__name__)
    app.config["JWT_SECRET_KEY"] = os.urandom(24)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite://"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_COOKIE_SECURE"] = True

    from .extensions import jwt, db

    jwt.init_app(app)
    db.init_app(app)

    from .blueprints.login import login

    app.register_blueprint(login)

    # @app.route("/")
    # def homepage():
    #     return """
    #             <h1>This is the Homepage</h1>
    #             <button><a href="/login">Login Here</a></button>
    #            """
    with app.app_context():
        from .models import User

        db.create_all()
        db.session.add(User(full_name="Bruce Wayne", username="batman"))
        db.session.add(User(full_name="Ann Takamaki", username="panther"))
        db.session.add(User(full_name="Jester Lavore", username="little_sapphire"))
        db.session.commit()

    return app
