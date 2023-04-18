from utils.hashing import create_hash, verify_hash


def test_password_hash():
    """
    GIVEN a password of type string
    WHEN the password is submitted, create a hash
    THEN verify the hash is true for the given password
    """
    password = "test"
    hash = create_hash(password)
    assert verify_hash(hash, password) == True
