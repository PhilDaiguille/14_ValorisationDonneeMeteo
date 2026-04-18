FROM dhi.io/python:3.12-debian12-dev AS builder

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    UV_NO_DEV=1

COPY --from=ghcr.io/astral-sh/uv:0.10.0 /uv /uvx /bin/

COPY . .
RUN uv sync --locked

RUN uv run python manage.py collectstatic --noinput

RUN chmod +x entrypoint.sh

FROM dhi.io/python:3.12-debian12

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PATH="/app/.venv/bin:$PATH"

COPY --from=builder --chown=nonroot:nonroot /app /app
COPY --from=builder /bin/sh /bin/sh

ENTRYPOINT ["/app/entrypoint.sh"]
EXPOSE 8000
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
