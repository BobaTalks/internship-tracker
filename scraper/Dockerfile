#syntax=docker/dockerfile:1

FROM python:3.11-alpine

RUN apk add firefox

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "-u", "google.py"]