import useTranslation from 'next-translate/useTranslation';
import { PropTypes } from 'prop-types';

export const AddAddress = ({ addAddress }) => {
  const { t } = useTranslation('formMixer');

  return (
    <button
      type="button"
      className="btn-another-desktop btn-another-desktop--add"
      onClick={addAddress}
    >
      <span className="btn-another-desktop__icon">+</span>
      <span className="btn-another-desktop__text">{t('add-address')}</span>
    </button>
  );
}

AddAddress.propTypes = {
  addAddress: PropTypes.func,
}
