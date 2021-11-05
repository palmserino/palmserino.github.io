FROM python:3.9.5

ENV PYTHONUNBUFFERED 1

WORKDIR /app

# because Docker detects changes in files before using a cached version, it's MUCH MORE 
# efficient to copy the requirements.txt first, do the pip install, THEN add everything else! 
COPY ./requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

COPY . /app
