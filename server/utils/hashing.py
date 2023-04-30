from argon2 import PasswordHasher

ph = PasswordHasher()


def create_hash(password):
    return ph.hash(password)


def verify_hash(hash_string, password):
    return ph.verify(hash_string, password)
