// import { useState } from "react";
// import axios from "axios";

// export default function SimulatorPanel() {
//   const [amount, setAmount] = useState(50000);
//   const [scenario, setScenario] = useState("SUCCESS");
//   const [loading, setLoading] = useState(false);

//   async function triggerPayment() {
//     setLoading(true);
//     try {
//       await axios.post("/api/payments", {
//         amount,
//         currency: "INR",
//         paymentMethod: "CARD",
//         card: {
//           last4: "4242",
//           network: "VISA",
//           issuer: "HDFC",
//           scenario
//         }
//       });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="bg-[#121316] border border-white/10 rounded-2xl p-6">
//       <h3 className="text-lg font-semibold mb-4">Simulate Payment</h3>

//       <label className="text-sm text-gray-400">Amount (paise)</label>
//       <input
//         value={amount}
//         onChange={e => setAmount(e.target.value)}
//         className="mt-2 w-full bg-black/40 border border-white/10 rounded px-3 py-2"
//       />

//       <label className="block mt-4 text-sm text-gray-400">
//         Failure Scenario
//       </label>
//       <select
//         value={scenario}
//         onChange={e => setScenario(e.target.value)}
//         className="mt-2 w-full bg-black/40 border border-white/10 rounded px-3 py-2"
//       >
//         <option value="SUCCESS">Success</option>
//         <option value="INSUFFICIENT_FUNDS">Insufficient Funds</option>
//         <option value="TIMEOUT">Timeout</option>
//         <option value="NETWORK_ERROR">Network Error</option>
//       </select>

//       <button
//         onClick={triggerPayment}
//         disabled={loading}
//         className="mt-6 w-full py-2 rounded bg-yellow-400 text-black font-semibold"
//       >
//         {loading ? "Processing…" : "Trigger Payment"}
//       </button>
//     </div>
//   );
// }
