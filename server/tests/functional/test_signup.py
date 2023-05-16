# def test_traditional_signup(client):
#     """
#     GIVEN a Flask app
#     WHEN a user signs up
#     AND a POST request is made to '/signup`
#     THEN create the user in the database
#     """
#     response = client.post(
#         "/signup",
#         json={"email": "test@email.com", "username": "testUser", "password": "test"},
#     )
#     assert response.status_code == 201
