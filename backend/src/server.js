import dotenv from "dotenv";
dotenv.config();

import http from "http";
import app from "./app.js";
import { initPaymentStatusWebSocket } from "./websocket/paymentStatus.ws.js";

const PORT = process.env.PORT || 4000;

/**
 * Create HTTP Server
 */
const server = http.createServer(app);

/**
 * Initialize WebSocket Server
 */
const ws = initPaymentStatusWebSocket(server);
global.paymentWS = ws;

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
