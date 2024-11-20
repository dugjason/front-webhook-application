import { Request, Response } from "express";

/**
 * POST /webhook
 * Handle webhook calls from Front - here is where you implement your business logic to process the payload
 */
export async function handlePost(req: Request, res: Response) {
  await doWork(req.body);

  return res.status(200).json({ type: "success" });
}

// A good practice for production is pushing the payload to a queue for processing.
// - Front will retry the request up to 3 times if you don't respond with a 2xx status code.
// - Your endpoint must respond within 5 seconds.
async function doWork(body: any) {
  // process the received payload.
  console.log("\n---\nHandling payload: ", `${new Date()}`);
  console.log({
    event_type: body.type,
    company_id: body.authorization.id,
    activity_id: body.payload.id,
    conversation_id: body.payload.conversation.id,
  });

  return;
}
