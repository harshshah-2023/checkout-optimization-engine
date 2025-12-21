import { Router } from "express";
import { createRefundController } from "./refund.controller.js";

const router = Router();

router.post("/", createRefundController);

export default router;
