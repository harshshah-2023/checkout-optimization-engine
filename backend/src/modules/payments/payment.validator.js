import { z } from "zod";
import { PAYMENT_METHOD } from "./payment.constants.js";

/**
 * Base payment schema
 */
const basePaymentSchema = {
  amount: z
    .number()
    .int()
    .positive("Amount must be a positive integer"),

  currency: z
    .string()
    .length(3)
    .default("INR"),

    

  paymentMethod: z.enum([
    PAYMENT_METHOD.CARD,
    PAYMENT_METHOD.UPI,
    PAYMENT_METHOD.NETBANKING
  ]),

  scenario: z.enum([
    "SUCCESS",
    "INSUFFICIENT_FUNDS",
    "TIMEOUT",
    "NETWORK_ERROR"
  ]).optional(),
  // idempotencyKey: z.string().optional(),
  // userReference: z.string().optional(),

  idempotencyKey: z
    .string()
    .min(5)
    .optional(),

  userReference: z
    .string()
    .optional(),
    // scenario: scenarioSchema.optional()
};

/**
 * Card payment validation
 */
const cardSchema = z.object({
  ...basePaymentSchema,
  card: z.object({
    last4: z.string().length(4),
    network: z.string(),
    issuer: z.string()
  })
});

/**
 * UPI payment validation
 */
const upiSchema = z.object({
  ...basePaymentSchema,
  upi: z.object({
    vpa: z.string().includes("@")
  })
});

/**
 * Netbanking payment validation
 */
const netbankingSchema = z.object({
  ...basePaymentSchema,
  netbanking: z.object({
    bankCode: z.string()
  })
});

/**
 * Main validation dispatcher
 */
export function validateCreatePayment(payload) {
  switch (payload.paymentMethod) {
    case PAYMENT_METHOD.CARD:
      return cardSchema.parse(payload);

    case PAYMENT_METHOD.UPI:
      return upiSchema.parse(payload);

    case PAYMENT_METHOD.NETBANKING:
      return netbankingSchema.parse(payload);

    default:
      const error = new Error("Unsupported payment method");
      error.statusCode = 400;
      throw error;
  }
}
