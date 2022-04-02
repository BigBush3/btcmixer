import { PropTypes } from "prop-types";
import { useState } from "react";

export const InputAddress = ({ value }) => {
  return (
    <div className="field__element">
      <input
        name="Receiver's address"
        type="text"
        className="input-address"
        placeholder="1njrRcKQtfjjLuQxFYCeMXcth77m5TAYo"
        autoComplete="off"
      />
    </div>
  );
};

InputAddress.propTypes = {
  value: PropTypes.string,
};
