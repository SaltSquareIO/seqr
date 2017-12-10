#!/usr/bin/env bash

set -x

env

echo SHELL: $SHELL
echo PYTHONPATH: $PYTHONPATH

# init gcloud
gcloud config set project $GCLOUD_PROJECT
gcloud config set compute/zone $GCLOUD_ZONE


# launch webpack ui dev server in background
#cd /seqr/ui
#npm run start &

# launch django dev server in background
cd /seqr

pip install --upgrade -r requirements.txt  # double-check that requirements are up-to-date
python -u manage.py makemigrations
python -u manage.py migrate
python -u manage.py check
python -u manage.py collectstatic --no-input

# launch django dev server in background
cd /seqr_settings
gunicorn -w 4 -c gunicorn_config.py wsgi:application |& tee /var/log/gunicorn.log &

#python manage.py runserver 0.0.0.0:8000 &

# allow pg_dump and other postgres command-line tools to run without having to enter a password
echo "*:*:*:*:$POSTGRES_PASSWORD" > ~/.pgpass
chmod 600 ~/.pgpass


# sleep to keep image running even if gunicorn is killed / restarted
sleep 1000000000000
