import { PropTypes } from 'prop-types';

export const AddAddressMob = ({ addAddress }) => {
  return (
    <button
      type="button"
      className="btn-another-mob"
      onClick={addAddress}
    >
      <span className="btn-another-mob__icon">+</span>
      <span className="btn-another-mob__text">. Add another address</span>
    </button>
  );
}

AddAddressMob.propTypes = {
  addAddress: PropTypes.func.isRequired,
}



