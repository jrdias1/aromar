import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Security Headers - Helmet
  // We disable CSP here because we implement it via meta tag in index.html for better CSR support
  app.use(helmet({
    contentSecurityPolicy: false,
  }));

  // Gzip compression for better performance
  app.use(compression());

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath, {
    maxAge: '1y',
    etag: true
  }));

  // Basic health check API for monitoring
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      version: "1.0.0-levelup"
    });
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Oficina Aromar Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
