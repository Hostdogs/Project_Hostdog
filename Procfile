release: python HostDog/backend/manage.py migrate
web: gunicorn backend.wsgi --log-file -
python HostDog/backend/manage.py collectstatic --noinput