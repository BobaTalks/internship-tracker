from webserver import create_app
from webserver.extensions import db
from webserver.models import Location, Job, User
import pytest


@pytest.fixture()
def app():
    # configure application for testing
    app = create_app(test_config={"TESTING": True})

    with app.app_context():
        db.create_all()

    yield app

    # teardown after testing
    with app.app_context():
        db.drop_all()


# create a flask test client
@pytest.fixture()
def client(app):
    return app.test_client()


@pytest.fixture()
def new_user():
    user = User(
        id=1,
        email="test@email.com",
        name="testUser123",
        hash="dang0lb1g$tr1ng-",
        authentication_method="Traditional",
    )
    return user


@pytest.fixture()
def new_location():
    location = Location(
        id=1, city="Mountain View", state="California", country="United States"
    )
    return location


@pytest.fixture()
def new_job():
    job = Job(
        title="Software Engineer",
        url="https://www.google.com/careers/12345678",
        location=1,
    )
    return job


@pytest.fixture()
def post_job(client):
    response = client.post(
        "/jobs",
        json={
            "title": "Software Engineer",
            "url": "https://www.google.com/careers/12345678",
            "location": {
                "city": "Mountain View",
                "state": "California",
                "country": "United States",
            },
        },
    )
    return response
