import crypto from "crypto";
import "dotenv/config";
import { Request } from "express";

/**
 * Verify integrify of payloads sent from Front according to
 * https://dev.frontapp.com/docs/webhooks-1#verifying-integrity
 *
 * @param req - The unmodified Request of the inbound webhook request
 * @returns Boolean - Is the payload valid?
 */
export function validateFrontWebhookAppSignature(req: Request) {
  if (!process.env.FRONT_API_SECRET || process.env.FRONT_API_SECRET === "") {
    throw new Error("FRONT_API_SECRET is not set");
  }

  const signature = getHeader(req, "x-front-signature");
  const timestamp = getHeader(req, "x-front-request-timestamp");

  const baseString = Buffer.concat([
    Buffer.from(`${timestamp}:`, "utf8"),
    Buffer.from(JSON.stringify(req.body)),
  ]).toString();

  const hmac = crypto
    .createHmac("sha256", process.env.FRONT_API_SECRET)
    .update(baseString)
    .digest("base64");

  return hmac === signature;
}

// Retrieve the Front signature header value.
export function getHeader(req: Request, header: string) {
  const signatureHeader = req.headers[header];
  if (!signatureHeader) {
    throw new Error(`Missing ${header} header`);
  }

  if (typeof signatureHeader === "string") {
    return signatureHeader;
  } else {
    throw new Error(`Invalid ${header} header`);
  }
}
