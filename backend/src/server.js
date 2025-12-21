import dotenv from "dotenv";
dotenv.config();

import http from "http";
import app from "./app.js";
import { runSettlementWorker } from "./modules/settlement/settlement.worker.js";
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
 * Start Settlement Worker (singleton, nodemon-safe)
 */
if (!global.settlementInterval) {
  global.settlementInterval = setInterval(() => {
    runSettlementWorker();
  }, 15000);
}

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
  server.close(() => process.exit(0));
});

process.on("SIGINT", () => {
  server.close(() => process.exit(0));
});
