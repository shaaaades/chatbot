import PropTypes from "prop-types";
import "./ChatMessage.css";

const ChatMessage = ({ history, loading }) => {
  return (
    <div className="chat-container">
      {history.length === 0 ? (
        <h3 className="intro">What can I help you with? Start chat.</h3>
      ) : (
        history.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              message.role === "user" ? "sent" : "received"
            }`}
          >
            <span className="role-label">
              {message.role === "user" ? "You" : "Chatbot"}
            </span>
            {message.content.map((part, index) => (
              <p className="message" key={index}>
                {part}
              </p>
            ))}
          </div>
        ))
      )}
      {loading && 
        <div className="chat-bubble received typing-indicator"></div>
      }
    </div>
  );
};

export default ChatMessage;

ChatMessage.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.oneOf(["user", "AI"]).isRequired,
      content: PropTypes.array.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool,
};
