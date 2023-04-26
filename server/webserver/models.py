from .extensions import db, jwt
from utils.hashing import verify_hash


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False, unique=True)
    hash = db.Column(db.String)
    authentication_method = db.Column(db.String, nullable=False)

    def check_password(self, hash, password):
        return verify_hash(hash, password)


# callback functions
@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()
