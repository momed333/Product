const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello from DanaIX</title>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center;
             font-family: system-ui, sans-serif; background: #13254e; color: #fff; }
      main { text-align: center; padding: 24px; }
      h1 { font-size: 2.5rem; margin: 0 0 12px; }
      p { opacity: 0.8; margin: 4px 0; }
      code { background: rgba(255, 255, 255, 0.12); padding: 2px 8px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <main>
      <h1>Hello from DanaIX PaaS</h1>
      <p>Deployed straight from GitHub.</p>
      <p>Host <code>${os.hostname()}</code> &middot; Node <code>${process.version}</code></p>
    </main>
  </body>
</html>`);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${PORT}`);
});
