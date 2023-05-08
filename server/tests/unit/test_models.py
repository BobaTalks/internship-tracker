def test_new_user(new_user):
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check the id and username are defined correctly
    """
    assert new_user.id == 1
    assert new_user.email == "test@email.com"
    assert new_user.name == "testUser123"
    assert new_user.hash == "dang0lb1g$tr1ng-"
    assert new_user.authentication_method == "Traditional"


def test_new_location(new_location):
    """
    GIVEN a Location model
    WHEN a new Location is created
    THEN check the city, state, and country are defined correctly
    """
    assert new_location.city == "Mountain View"
    assert new_location.state == "California"
    assert new_location.country == "United States"


def test_new_job(new_job):
    """
    GIVEN a Job model
    WHEN a new Job is created
    THEN check the title, url, and location id are defined correctly
    """
    assert new_job.title == "Software Engineer"
    assert new_job.url == "https://www.google.com/careers/12345678"
    assert new_job.location == 1
