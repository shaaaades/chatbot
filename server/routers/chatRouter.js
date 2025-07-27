import express from "express";
import { generateChatResponse } from "../services/generateChatResponse.js";

const chatRouter = express.Router();

chatRouter.post("/chat", async (req, res) => {
  try {
    const params = req.body.prompt;
    const response = await generateChatResponse(params);
    res.status(200).json({ response });
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
});

export default chatRouter;