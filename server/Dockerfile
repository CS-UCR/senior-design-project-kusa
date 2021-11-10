FROM python:latest
ENV PYTHONUNBUFFERED=1
WORKDIR /server

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . ./
EXPOSE 8000