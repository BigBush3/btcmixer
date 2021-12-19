import classNames from 'classnames';
import { useState, useCallback, useMemo } from 'react';
import imgSelectedCoin from '../../../../img/select-selected-el.png';
import { useClickOutside } from '../../../../hocks/useClickOutside';
import { PropTypes } from 'prop-types';

export const SelectCoins = ({ coinsList, defaultCoin }) => {
  const [coinActive, setCoinActive] = useState(coinsList[defaultCoin]);
  const [isOpen, setIsOpen] = useState(false);

  const coinListArray = useMemo(() => (
    Object.entries(coinsList)
  ), []);

  const switchSelected = useCallback((coin) => {
    if (coinActive.label !== coin.label) {
      setCoinActive(coin)
    }

    setIsOpen(false);
  }, [coinActive]);

  const domNode = useClickOutside(() => {
    setIsOpen(false)
  })

  return (
    <div className="field__element select" ref={domNode}>
      {/* Select Header */}
      <div
        className="select__selected"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="select__selected-left">
          <img src={coinActive.img} alt={coinActive.label} />
        </div>
        <div className="select__selected-right"></div>
      </div>

      {/* LIST: */}
      <div className={classNames('select__list select-list', { 'select__list--active': isOpen })}>
        {
          coinListArray.map(coin => (
            <div
              className="select-list__el"
              key={coin[1].label}
              onClick={() => switchSelected(coin[1])}
            >
              <img className="select-list__el-coin" src={coin[1].img} alt={coin[1].label} />
              {
                coinActive.label !== coin[1].label ? (
                  <span className="select-list__el-text">{coin[1].label}</span>
                ) : (
                  <img src={imgSelectedCoin} className="select-list__el-icon" alt="selected-coin" />
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

SelectCoins.propTypes = {
  coinsList: PropTypes.object.isRequired,
  defaultCoin: PropTypes.string.isRequired,
};
