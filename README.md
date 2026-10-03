# danaix-hello

A minimal Node.js (Express) web app for deploying on DanaIX PaaS from GitHub.

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Endpoints

- `/` – hello page
- `/health` – JSON health check

## Deploying

The app is auto-detected as Node.js from `package.json`:

- Build: `npm install`
- Start: `npm start`
- Port: read from the `PORT` environment variable (defaults to 3000)
