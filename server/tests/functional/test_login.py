# def test_login(client):
#     """
#     GIVEN a Flask app
#     WHEN a user logs in
#     AND a POST request is made to '/login'
#     THEN verify the user
#     AND return a JWT on successful verification
#     """

#     # create a
#     create_user_response = client.post(
#         "/signup",
#         json={"email": "test@email.com", "username": "testUser", "password": "test"},
#     )
#     assert create_user_response.status_code == 201
#     login_user_response = client.post(
#         "/login", json={"username": "testUser", "password": "test"}
#     )
#     assert login_user_response.status_code == 200
#     assert login_user_response.json["access_token"]
