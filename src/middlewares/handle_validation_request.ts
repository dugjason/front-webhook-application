/**
 * Implements responding to the validation request:
 * https://dev.frontapp.com/docs/webhooks-1#responding-to-the-validation-request
 *
 * Quickly returns the valdation challenge if this is a validation request, or
 * moves on to the next middleware / router step otherwise.
 */

import { NextFunction, Request, Response } from "express";
import { getHeader } from "./helpers";

export function handleValidationRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const challenge = getHeader(req, "x-front-challenge");

    if (challenge) {
      return res.status(200).json({ challenge });
    }
  } catch (error) {
    // Safe to skip
  }

  next();
}
