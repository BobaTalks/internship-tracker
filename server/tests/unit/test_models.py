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
