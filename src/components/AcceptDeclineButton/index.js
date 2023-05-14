import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const AcceptButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Accept
    </Button>
  );
};

AcceptButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const DeclineButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      Decline
    </Button>
  );
};

DeclineButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { AcceptButton, DeclineButton };
