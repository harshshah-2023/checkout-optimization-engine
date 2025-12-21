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
      const message = JSON.stringify(payload);

      wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
          client.send(message);
        }
      });
    }
  };
}
