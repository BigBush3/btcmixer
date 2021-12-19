import { SELECT_SERVICE } from '../../../utils/selectData';
import { Tooltip } from '../Tooltip';
import { AddAddressMob } from './components/Buttons/AddAddressMob';
import { Checkbox } from './components/Checkbox';
import { Field } from './components/Field'
import { SelectDefault } from './components/FieldElement/SelectDefault';
import { TEXT_TOOLTIP } from '../../../utils/tooltipText';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Address } from './components/Address';
import { useCallback } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { SELECT_COINS } from '../../../utils/selectData';
import { SELECT_HOUR } from '../../../utils/selectData';

const selectsData = { SELECT_COINS, SELECT_HOUR };

export const MixerForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [addresses, setAddresses] = useState([{
    coin: 'btc',
    address: '',
    delay: '0',
    isRemovable: false,
    key: uuidv4(),
  }]);
  const { t } = useTranslation('formMixer')

  const handleCheckout = useCallback(() => {
    setIsChecked(!isChecked)
  }, [isChecked])

  const addAddress = useCallback(() => {
    setAddresses(prev =>
      [...prev, {
        coin: 'btc',
        address: '',
        delay: '0',
        isRemovable: true,
        key: uuidv4(),
      }]);
  }, [addresses]);

  const deleteAddress = useCallback((key) => {
    setAddresses(prev => prev.filter(address => address.key !== key));
  }, [addresses]);

  return (
    <form className="mixer-form">
      <div className="mixer-form__scope">
        <Checkbox
          id='score'
          handleCheckout={handleCheckout}
          isChecked={isChecked}
          label={t('checkbox')}
        />

        <Tooltip
          classmodify="tooltip--checkbox-mixer"
          text={t(TEXT_TOOLTIP.mixerCheckbox)}
        />
      </div>

      <div className="mixer-form__params-wrapper">
        <ol className="mixer-form__params-list">
          {
            addresses.map((address) => (
              <Address
                key={address.key}
                defaultValueField={address}
                amountAddresses={addresses.length}
                selectsData={selectsData}
                addAddress={addAddress}
                deleteAddress={deleteAddress}
              />
            ))
          }
        </ol>

        {addresses.length !== 5 && (
          <AddAddressMob
            addAddress={addAddress}
          />
        )}
      </div>

      <div className="mixer-form__service mixer-form-service">
        <Field
          classmodify='mixer-form-service__service'
          label={t('label-service')}
          tooltipText={t(TEXT_TOOLTIP.mixerService)}
        >
          <SelectDefault selectData={SELECT_SERVICE} scale='%' defaultValue='1.218' />
        </Field>

        <div className="mixer-form-service__text">
          + 0.007 btc {t('bonus')}
        </div>
      </div>

      <div className="mixer-form__mix mixer-from-mix">
        <div className="mixer-from-mix__button-wrap">
          <button
            type="button"
            className="mixer-from-mix__button"
          >
            {t('btn-mix')}
          </button>
        </div>
        <div className="mixer-from-mix__total">
          <div className="mixer-from-mix__total-label">{t('total')}:</div>
          <div className="mixer-from-mix__total-value">3.4209 BTC</div>
        </div>
      </div>


    </form >
  );
}
