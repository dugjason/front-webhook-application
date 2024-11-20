import express from "express";

// Routes
import { webhookRouter } from "./routes/webhook";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use("/webhook", webhookRouter);
