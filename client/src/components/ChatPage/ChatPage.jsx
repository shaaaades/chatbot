import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./ChatPage.css";
import "../common/styles/css/index.css";
import { getChatResponse } from "../common/services/generateResponse";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatInput from "../ChatInput/ChatInput";
import ChatError from "../ChatError/ChatError"

const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]); 
  const [isError, setIsError] = useState(false);

  const sendMessage = async (e) => {
    if (e) e.preventDefault();
    setLoading(true); 

    if (!prompt.trim()) {
      // Do not send if no input
      setLoading(false);
      return;
    }

    // Sets the message content of the sender for display
    const userMessage = { role: "user", content: prompt.split("\n") };
    console.log("userMessage", userMessage)
    setHistory((prev) => [...prev, userMessage]);
    setPrompt(""); 

    try {
      const response = await getChatResponse(prompt); 
      console.log("AI Response", response);

      // Sets the message content of the AI in array format
      const aiMessage = { role: "AI", content: response };
      setHistory((prev) => [...prev, aiMessage]);
      setIsError(false);
    } catch (err) {
      console.error("An error occurred while getting the chat response.", err);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  // Auto-close the alert after 3 seconds
  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => setIsError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isError]);

  return (
    <>
      <Card>
        <Card.Body>
          {isError && <ChatError/>}
          <ChatHeader/>
          <div className="message-container">
            <ChatMessage history={history} loading={loading}/>
            <ChatInput prompt={prompt} setPrompt={setPrompt} sendMessage={sendMessage}/>
          </div>  
        </Card.Body>
      </Card>
    </>
  );
}

export default ChatPage;