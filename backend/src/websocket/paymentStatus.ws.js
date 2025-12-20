import { WebSocketServer } from "ws";

export function initPaymentStatusWebSocket(server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("🔌 WebSocket client connected");

    ws.on("close", () => {
      console.log("❌ WebSocket client disconnected");
    });
  });

  return {
    broadcastPaymentUpdate(payload) {
      wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
          client.send(JSON.stringify(payload));
        }
      });
    }
  };
}
