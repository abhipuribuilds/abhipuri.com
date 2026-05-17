# Docker Usage

This project installs dependencies inside Docker and uses live bind mounts for local development.

## Development

```bash
docker compose build
docker compose up
```

Open:

```text
http://localhost:5173
```

After that normal workflow is:

```text
Edit code locally in VS Code
Browser auto refreshes through Vite HMR
Test locally
git add .
git commit
git push
```

You do not need to rebuild the image after every React/CSS change. Rebuild only when the Dockerfile,
base image, or container setup changes. If `package.json` changes, restart `docker compose up`; the
container command runs `npm install` inside the container volume before starting Vite.

## Production Image

```bash
docker build --target production -t abhipuri-portfolio:prod .
docker run --rm -p 8080:80 abhipuri-portfolio:prod
```

Open:

```text
http://localhost:8080
```

Development uses a Node/Vite server with bind mounts and hot reload. Production builds static files
with Vite and serves them from nginx.
