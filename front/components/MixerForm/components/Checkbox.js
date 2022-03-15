import { PropTypes } from 'prop-types';

export const Checkbox = ({ id, handleCheckout, isChecked, label }) => {
  return (
    <div className="checkbox-mixer">
      <input
        type="checkbox"
        className="checkbox-mixer__input"
        id={id}
        checked={isChecked}
        onChange={handleCheckout}
      />
      <label className="checkbox-mixer__label" htmlFor={id}>
        <div className="checkbox-mixer__label-text">{label}<span> 0 - 25 %</span></div>
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  handleCheckout: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
}
