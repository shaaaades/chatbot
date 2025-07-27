import { GoogleGenerativeAI } from "@google/generative-ai";
import { formatResponse } from "../utility/utilities.js"

export const generateChatResponse = async (prompt) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  return formatResponse(result.response.text());
}