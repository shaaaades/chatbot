import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import "./ChatError.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ErrorAlert = ({ setIsError }) => {

  return (
    <div className="error-overlay">
      <Alert variant="danger" onClose={() => setIsError(false)} dismissible>
        An error has occured. Check your connection and try again later.
      </Alert>
    </div>
  );
};

ErrorAlert.propTypes = {
  setIsError: PropTypes.func.isRequired
}

export default ErrorAlert;