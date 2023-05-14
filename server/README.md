# Internship Tracker Server (Backend)

This project utilizes [Flask](https://flask.palletsprojects.com/en/2.2.x/) 

## :orange_book: Pre-requisites

Follow the steps 1-5 [here](https://phoenixnap.com/kb/how-to-install-python-3-windows) to install Python3.

## :zap: Quick Start

Create and activate the virtual environment

```shell
cd server
python3 -m venv venv
source venv/bin/activate
```

Install Python packages using [pip](https://pypi.org/project/pip/)

```shell
pip install -r requirements.txt
```

Add the line below to the .flaskenv file if you would like to enable [DEBUG mode](https://flask.palletsprojects.com/en/2.2.x/quickstart/#:~:text=Debug%20Mode,error%20occurs%20during%20a%20request.)

```shell
FLASK_DEBUG=1
```
In your .env file add. Note: If you don't have Postgres installed locally, see [Working With Docker](#Working-With-Docker).
```shell
# dialect and driver are postgresql and psycopg2 respectively
POSTGRES_URI=dialect+driver://username:password@host:port/database

# add this environment variable when running tests
TEST_URI=dialect+driver://username:password@host:port/database
```

Run the server!

```shell
flask --app webserver run
```

<hr>

## Working With Docker

First make sure you have [Docker](https://docs.docker.com/engine/install/) installed.

### Database Only:

If you are working on the webserver locally and only need spin up a database you can run:
```shell
docker run --name "The name for the container" \
-e POSTGRES_USER="a username for the database" \
-e POSTGRES_PASSWORD="some password" \
-e POSTGRES_DB="some database name" \
-p 5432:5432 \
-d postgres
```
then use all of the above to create your POSTGRES_URI environment variable.

### Webserver
If you want to run the webserver with Docker or are working on the client side and need to test interactions with the web server you will need to set up a few environment variables to get things running. 

In your .env file make sure you have:
```shell
POSTGRES_PASSWORD=somepassword #change this
POSTGRES_DB=someDBname #change this
POSTGRES_USER=someuser #change this
POSTGRES_URI=postgresql+psycopg2://POSTGRES_USER:POSTGRES_PASSWORD@db:PORT/POSTGRES_DB #change this with the appropriate values
```
After your environment variables are set, from the root directory run
```shell
docker compose up
```
<hr>

## :open_file_folder: Installing New Packages

```shell
pip freeze > requirements.txt
```

After installing new packages, run the command above to update requirements.txt

_note: Make sure you are in the virtual environment_

## :handshake: Contributing

Here from the :bubble_tea: [BobaTalks discord](https://discord.gg/bobatalks)? Find issues labeled for you [here](https://github.com/BobaTalks/internship-tracker/issues)
