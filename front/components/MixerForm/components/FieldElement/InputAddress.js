import { PropTypes } from "prop-types";
import { useState } from "react";

export const InputAddress = ({ id }) => {
  return (
    <div className="field__element">
      <input
        name="Receiver's address"
        type="text"
        className="input-address"
        placeholder="1njrRcKQtfjjLuQxFYCeMXcth77m5TAYo"
        autoComplete="off"
        onChange={(e) => {
          if (id === 0) {
            localStorage.setItem("address", e.target.value);
          }
          if (id === 1) {
            localStorage.setItem("address1", e.target.value);
          }
          if (id === 2) {
            localStorage.setItem("address2", e.target.value);
          }
          if (id === 3) {
            localStorage.setItem("address3", e.target.value);
          }
          if (id === 4) {
            localStorage.setItem("address4", e.target.value);
          }
        }}
      />
    </div>
  );
};

InputAddress.propTypes = {
  value: PropTypes.string,
};
