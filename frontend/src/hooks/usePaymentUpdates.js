import { useEffect } from "react";

export default function usePaymentUpdates(onUpdate) {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "PAYMENT_STATUS_UPDATE") {
        onUpdate(message.payload);
      }
    };

    return () => ws.close();
  }, [onUpdate]);
}
