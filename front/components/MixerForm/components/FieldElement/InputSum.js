import { PropTypes } from "prop-types";
import { useState } from "react";

export const InputSum = ({ id }) => {
  return (
    <div className="field__element">
      <input
        name="Send sum"
        type="text"
        className="input-sum"
        placeholder="Sum"
        autoComplete="off"
        onChange={(e) => {
          if (id === 0) {
            localStorage.setItem("sum", e.target.value)
            console.log("xuy")
          }
          if (id === 1) {
            localStorage.setItem("sum1", e.target.value)
            console.log("xuy1")
          }
          if (id === 2) {
            localStorage.setItem("sum2", e.target.value)
            console.log("xuy2")
          }
          if (id === 3) {
            localStorage.setItem("sum3", e.target.value)
            console.log("xuy3")
          }
          if (id === 4) {
            localStorage.setItem("sum4", e.target.value)
            console.log("xuy4")
          }
        }}
      />
    </div>
  );
};

InputSum.propTypes = {
  value: PropTypes.string,
};
