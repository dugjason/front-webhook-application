import { Router } from "express";
import { handlePost } from "../controllers/webhook";
import { handleValidationRequest } from "../middlewares/handle_validation_request";
import { checkRequestValidity } from "../middlewares/check_request_validity";

export const webhookRouter = Router();
webhookRouter.use(checkRequestValidity);
webhookRouter.use(handleValidationRequest);
webhookRouter.post("/", handlePost);
