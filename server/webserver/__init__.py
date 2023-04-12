from flask import Flask


def create_app(test_config=None):
    app = Flask(__name__)

    from .blueprints.login import login

    app.register_blueprint(login)

    @app.route("/")
    def homepage():
        return """
                <h1>This is the Homepage</h1>
                <button><a href="/login">Login Here</a></button>
               """

    return app
