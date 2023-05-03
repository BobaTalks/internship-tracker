from webserver.extensions import db
from webserver.models import User, Job, Location


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


def create_job(title, url, city, state, country):
    get_location = (
        db.session.execute(
            db.select(Location.id).filter_by(city=city, state=state, country=country)
        )
    ).scalar()
    # if the location does not exist in database
    if not get_location:
        location = Location(city=city, state=state, country=country)
        db.session.add(location)
        db.session.commit()
        get_location = db.session.execute(
            db.select(Location.id).filter_by(city=city, state=state, country=country)
        ).scalar()

    job = Job(title=title, url=url, location=get_location)
    db.session.add(job)
    db.session.commit()


def get_job(id):
    jobject = {}
    query_result = (
        db.session.execute(
            db.select(Job, Location)
            .where(id == id)
            .join(Location, Job.location == Location.id)
        )
        .first()
        ._asdict()
    )
    jobject["id"] = query_result["Job"].id
    jobject["title"] = query_result["Job"].title
    jobject["url"] = query_result["Job"].url
    jobject["location"] = {
        "city": query_result["Location"].city,
        "state": query_result["Location"].state,
        "country": query_result["Location"].country,
    }
    return jobject

def delete_job(id):
    db.session.execute(db.delete(Job).where(Job.id == id))
    return