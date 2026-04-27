# Running the project in development

```bash
cp .env.example .env
docker compose -f docker-compose.dev.yml up --build
```

## Containers & endpoints

| Container     | Exposed URL / endpoint                 |
| ------------- | -------------------------------------- |
| `nginx`       | http://localhost (port 80)             |
| `frontend`    | http://localhost/ (via nginx)          |
| `backend`     | http://localhost/api/v1/ (via nginx)   |
| `backend`     | http://localhost/metrics (via nginx)   |
| `timescaledb` | localhost:5432 (internal, not exposed) |
| `prometheus`  | http://localhost:9090                  |
| `grafana`     | http://localhost:3000 (admin / admin)  |

## Prometheus scrape targets

Configured in `prometheus.yml`:

| Job        | Target              | Path       |
| ---------- | ------------------- | ---------- |
| prometheus | prometheus:9090     | /metrics   |
| django     | backend:8000        | /metrics   |

## Grafana

- Default credentials: `admin` / `admin`
