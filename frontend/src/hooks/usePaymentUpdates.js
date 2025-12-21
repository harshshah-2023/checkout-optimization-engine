import { useEffect, useState } from "react";

export default function usePaymentUpdates(setPayments) {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "PAYMENT_STATUS_UPDATE") {
        const update = message.payload;

        setPayments((prev) => {
          const existingIndex = prev.findIndex(
            (p) => p.id === update.id
          );

          // Update existing payment
          if (existingIndex !== -1) {
            const copy = [...prev];
            copy[existingIndex] = {
              ...copy[existingIndex],
              ...update
            };
            return copy;
          }

          // New payment → add to top
          return [update, ...prev];
        });
      }
    };

    return () => ws.close();
  }, [setPayments]);
}
