from flask import Flask
from scraper import get_internships

app = Flask(__name__)

if __name__ == "__main__":
    app.run()
