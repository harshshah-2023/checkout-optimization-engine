import dotenv from "dotenv";
dotenv.config();

import http from "http";
import app from "./app.js";

const PORT = process.env.PORT || 4000;

/**
 * Create HTTP Server
 */
const server = http.createServer(app);

/**
 * Start Server
 */
server.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
});

/**
 * Graceful Shutdown
 */
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down server...");
  server.close(() => {
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down server...");
  server.close(() => {
    process.exit(0);
  });
});
