import PropTypes from "prop-types";
import "./ChatInput.css"

const ChatInput = ({ prompt, setPrompt, sendMessage }) => {
  const formatMessageDisplay = (e) => {
    if (e.key === "Enter" && !e.ctrlKey) {
      // Sends message when Enter key is pressed
      e.preventDefault(); 
      sendMessage();
    } else if (e.key === "Enter" && e.ctrlKey) {
      // Sends message when Ctrl+Enter is pressed
      setPrompt((prev) => prev + "\n");
    }
  }

  return (
    <div className="message-input-container">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {formatMessageDisplay(e)}}
        placeholder="Type a message..."
        rows="2"
      />
      <button type="submit" onClick={sendMessage} disabled={!prompt.trim()}>
        Send
      </button>
    </div>
  );
};

ChatInput.propTypes = {
  prompt: PropTypes.string.isRequired,
  setPrompt: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default ChatInput;