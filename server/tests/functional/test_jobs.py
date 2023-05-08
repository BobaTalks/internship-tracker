def test_create_job(post_job):
    """
    GIVEN a Flask app
    WHEN a POST request is made to '/jobs'
    THEN create the job in the database
    """
    response = post_job
    assert response.status_code == 201


def test_get_job(client, post_job):
    """
    GIVEN a Flask app
    WHEN a GET request is made to '/jobs/:id'
    WHERE :id is a placeholder for a job's unique id
    THEN return the corresponding job object
    AND return a status code of 200
    """
    post_job
    response = client.get("/jobs/1")
    assert response.status_code == 200


def test_delete_job(client, post_job):
    """
    GIVEN a Flask app
    WHEN a DELETE request is made to '/jobs/:id'
    WHERE :id is a placeholder for a job's unique id
    THEN remove the job from the database
    AND return a status code of 200
    """
    post_job
    response = client.delete("/jobs/1")
    assert response.status_code == 200
