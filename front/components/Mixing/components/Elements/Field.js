import PropTypes from "prop-types";
import { Tooltip } from "../../../Tooltip";

export const Field = ({ label, tooltipText, children }) => {
  return (
    <div>
      <div className="field__label">
        <span className="field__label-title">{label}</span>
        {tooltipText && <Tooltip text={tooltipText} />}
      </div>
      {children}
    </div>
  );
};

Field.defaultProps = {
  tooltipText: "",
};

Field.propTypes = {
  tooltipText: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};
