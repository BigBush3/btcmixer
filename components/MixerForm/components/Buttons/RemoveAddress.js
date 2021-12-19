import { PropTypes } from 'prop-types';
import useTranslation from 'next-translate/useTranslation';

export const RemoveAddress = ({ deleteAddress, rowKey }) => {
  const { t } = useTranslation('formMixer')

  return (
    <button
      type="button"
      className='btn-another-desktop'
      onClick={() => deleteAddress(rowKey)}
    >
      <span className="btn-another-desktop__icon">-</span>
      <span className="btn-another-desktop__text">{t('delete-address')}</span>
    </button>
  )
};

RemoveAddress.propTypes = {
  deleteAddress: PropTypes.func,
  rowKey: PropTypes.string,
  classmodify: PropTypes.string
}
