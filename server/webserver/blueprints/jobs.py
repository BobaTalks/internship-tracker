from flask import Blueprint, request, jsonify
from webserver.queries import create_job, get_job, delete_job, get_jobs

jobs = Blueprint("jobs", __name__, url_prefix="/jobs")


@jobs.route("", methods=["GET", "POST"])
def handle_jobs():
    if request.method == "GET":
        title = request.args.get("title", default=None)
        location = request.args.get("location", default=None)
        params = {"title": title, "location": location}
        return jsonify(get_jobs(params)), 200
    if request.method == "POST":
        title = request.json.get("title", None)
        url = request.json.get("url", None)
        location = request.json.get("location", None)
        create_job(
            title=title,
            url=url,
            city=location["city"],
            state=location["state"],
            country=location["country"],
        )
        return jsonify({"Success": "Job Created"}), 201


@jobs.route("/<int:id>", methods=["GET", "DELETE"])
def handle_job(id):
    if request.method == "GET":
        job = get_job(id)
        return jsonify(job), 200
    if request.method == "DELETE":
        delete_job
        return jsonify({"Success": "Job Deleted"}), 200
