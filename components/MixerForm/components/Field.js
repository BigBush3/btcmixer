import PropTypes from 'prop-types'
import { Tooltip } from '../../Tooltip';

export const Field = ({ classmodify, label, tooltipText, children }) => {
  return (
    <div className={'field' + ` ${classmodify}`}>
      <div className="field__label">
        <span className="field__label-title">{label}</span>
        {tooltipText && (
          <Tooltip text={tooltipText} />
        )}
      </div>

      {children}
    </div>
  );
};

Field.defaultProps = {
  tooltipText: '',
  classmodify: '',
};

Field.propTypes = {
  classmodify: PropTypes.string,
  label: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};
