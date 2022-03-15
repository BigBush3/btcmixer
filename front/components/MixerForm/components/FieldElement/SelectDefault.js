import classNames from 'classnames';
import { useState, useCallback } from 'react';
import imgSelectedArrow from '../../../../img/select-selected-el.png';
import { useClickOutside } from '../../../../hocks/useClickOutside';
import { PropTypes } from 'prop-types';

export const SelectDefault = ({ selectData, defaultValue, scale }) => {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const switchSelected = useCallback((newSelected) => {
    if (selected !== newSelected) {
      setSelected(newSelected)
    }

    setIsOpen(false);
  }, [selected]);

  const domNode = useClickOutside(() => {
    setIsOpen(false)
  })

  return (
    <div className="field__element select" ref={domNode}>
      <div
        className="select__selected"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="select__selected-left">
          <span>{selected} {scale}</span>
        </div>
        <div className="select__selected-right"></div>
      </div>

      <div className={classNames(
        'select__list select-list',
        {
          'select__list--active': isOpen,
        })
      }>
        {
          selectData.map(selectEl => (
            <div
              className="select-list__el"
              key={selectEl}
              onClick={() => switchSelected(selectEl)}
            >
              <span className={classNames(
                'select-list__el-text select-list__el-text--default',
                { 'select-list__el-text--selected': selected === selectEl })}
              >
                {selectEl} {scale}
              </span>
              {
                selected === selectEl && (
                  <img src={imgSelectedArrow} className="select-list__el-icon" alt="" />
                )
              }
            </div>
          ))
        }
      </div>
    </div >
  );
}


SelectDefault.propTypes = {
  selectData: PropTypes.array.isRequired,
  scale: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
}
