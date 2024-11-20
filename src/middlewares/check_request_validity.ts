/**
 * Validates the authenticity of the request from Front.
 * You need to ensure you set a FRONT_API_SECRET environment variable for this to work.
 */

import { NextFunction, Request, Response } from "express";

import { validateFrontWebhookAppSignature } from "./helpers";

export function checkRequestValidity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isValid = validateFrontWebhookAppSignature(req);

  if (!isValid) {
    return res.status(401).end();
  }

  next();
}
