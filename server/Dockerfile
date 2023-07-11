#syntax=docker/dockerfile:1

FROM python:3.11-bullseye

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["flask", "--app", "webserver", "run", "-h", "0.0.0.0"]