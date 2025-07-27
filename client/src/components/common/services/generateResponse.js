import axios from "axios"
import config from "../../../config";

export const getChatResponse = async (prompt) => {
  try {
    const result = await axios.post(`${config.geminiAiAPI}/chat`, { prompt });
    return result.data.response;
  } catch (err) {
    console.log("Failed to generate response:", err);
    throw err;
  } 
}