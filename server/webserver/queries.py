from webserver.extensions import db
from webserver.models import User, Job, Location
from utils.jobjects import create_jobect


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


def get_jobs(params):
    if not params["title"] and not params["location"]:
        jobject_arr = []
        query_results = db.session.execute(
            db.select(Job, Location).join(Location, Job.location == Location.id)
        )
        for result in query_results:
            result_obj = create_jobect(result)
            jobject_arr.append(result_obj)
        return jobject_arr
    if not params["title"] and params["location"]: 
        jobject_arr = []
        query_results = db.session.execute(
            db.select(Job, Location)
            .join(Location, Job.location == Location.id)
            .where(
                    (Location.city.icontains(params["location"])) |
                    (Location.state.icontains(params["location"])) |
                    (Location.country.icontains(params["location"]))
            )
        )
        for result in query_results:
            result_obj = create_jobect(result)
            jobject_arr.append(result_obj)
        return jobject_arr
    if not params["location"] and params["title"]: 
        jobject_arr = []
        query_results = db.session.execute(
            db.select(Job, Location)
            .join(Location, Job.location == Location.id)
            .where(
                (Job.title.icontains(params["title"])) 
            )
        )
        for result in query_results:
            result_obj = create_jobect(result)
            jobject_arr.append(result_obj)
        return jobject_arr
    else:
        jobject_arr = []
        query_results = db.session.execute(
            db.select(Job, Location)
            .join(Location, Job.location == Location.id)
            .where(
                    (Job.title.icontains(params["title"])) 
            )
            .where(
                    (Location.city.icontains(params["location"])) |
                    (Location.state.icontains(params["location"])) |
                    (Location.country.icontains(params["location"]))
            )
        )
        for result in query_results:
            result_obj = create_jobect(result)
            jobject_arr.append(result_obj)
        return jobject_arr
    


def get_job(id):
    query_result = (
        db.session.execute(
            db.select(Job, Location)
            .where(Job.id == id)
            .join(Location, Job.location == Location.id)
        )
        .first()
        ._asdict()
    )
    jobject = create_jobect(query_result)
    return jobject


def delete_job(id):
    db.session.execute(db.delete(Job).where(Job.id == id))
    return
