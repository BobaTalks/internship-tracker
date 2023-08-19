from .extensions import db, jwt
from utils.hashing import verify_hash
from datetime import datetime


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False, unique=True)
    hash = db.Column(db.String)
    authentication_method = db.Column(db.String, nullable=False)

    def check_password(self, hash, password):
        return verify_hash(hash, password)


class Job(db.Model):
    __tablename__ = "jobs"
    __table_args__ = (db.UniqueConstraint("title", "location"),)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    url = db.Column(db.String, nullable=False)
    location = db.Column(db.ForeignKey("locations.id"), nullable=False)
    status = db.Column(db.String, nullable=False)
    createdAt = db.Column(datetime, default=datetime.utcnow, nullable=False)


class Location(db.Model):
    __tablename__ = "locations"
    __table_args__ = (db.UniqueConstraint("city", "state", "country"),)

    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)


# callback functions
@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()
