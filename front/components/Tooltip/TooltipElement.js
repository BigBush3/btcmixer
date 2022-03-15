import propTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@material-ui/core'
import Zoom from '@mui/material/Zoom';

const useStyles = makeStyles(theme => ({
  customTooltip: {
    backgroundColor: '#302257',
    padding: '16px',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.9px',
    color: '#76737C',
    maxWidth: '252px',
  },
  customArrow: {
    color: '#302257',
  },
}));

export const TooltipElement = ({ classmodify, text, placement }) => {
  const classes = useStyles();

  return (
    <Tooltip
      classes={{
        tooltip: classes.customTooltip,
        arrow: classes.customArrow
      }}
      title={text}
      placement={placement}
      arrow
      TransitionComponent={Zoom}
      enterTouchDelay={false}
      disableInteractive
    >
      <div className={'tooltip ' + classmodify}>
        <span className="tooltip__icon">?</span>
      </div>
    </Tooltip >
  );
}

Tooltip.defaultProps = {
  classmodify: '',
  placement: 'top',
};

Tooltip.propTypes = {
  classmodify: propTypes.string,
  text: propTypes.string,
  placement: propTypes.string,
}

