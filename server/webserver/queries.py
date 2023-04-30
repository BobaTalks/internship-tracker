from webserver.extensions import db
from webserver.models import User


def create_user(email, name, hash, authentication_method):
    user = User(
        email=email, name=name, hash=hash, authentication_method=authentication_method
    )
    db.session.add(user)
    db.session.commit()
    return


def get_user(name):
    user = db.session.execute(db.select(User).where(name=name))
    return user
