// import { PAYMENT_STATUS, FAILURE_CODE } from "../modules/payments/payment.constants.js";

// export async function simulateAuthorization({ scenario }) {
//   // Artificial latency
//   const latencyMs = 300 + Math.floor(Math.random() * 700);
//   await new Promise(r => setTimeout(r, latencyMs));

//   switch (scenario) {
//     case "SUCCESS":
//       return {
//         status: PAYMENT_STATUS.AUTHORIZED,
//         latencyMs
//       };

//     case "INSUFFICIENT_FUNDS":
//       return {
//         status: PAYMENT_STATUS.FAILED,
//         failureCode: FAILURE_CODE.INSUFFICIENT_FUNDS,
//         latencyMs
//       };

//     case "TIMEOUT":
//       return {
//         status: PAYMENT_STATUS.FAILED,
//         failureCode: FAILURE_CODE.TIMEOUT,
//         latencyMs
//       };

//     case "NETWORK_ERROR":
//       return {
//         status: PAYMENT_STATUS.FAILED,
//         failureCode: FAILURE_CODE.NETWORK_ERROR,
//         latencyMs
//       };

//     default:
//       return {
//         status: PAYMENT_STATUS.FAILED,
//         failureCode: FAILURE_CODE.UNKNOWN_ERROR,
//         latencyMs
//       };
//   }
// }
