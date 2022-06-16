import { PropTypes } from "prop-types";
import { useState } from "react";

export const InputSum = ({ value }) => {
  return (
    <div className="field__element">
      <input
        name="Send sum"
        type="text"
        value={value}
        className="input-sum"
        placeholder="Sum"
        autoComplete="off"
      />
    </div>
  );
};

InputSum.propTypes = {
  value: PropTypes.string,
};
