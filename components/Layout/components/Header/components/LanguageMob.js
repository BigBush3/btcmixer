import { useState, useMemo } from 'react';
import { LANGUAGES_IMAGE } from '../../../../../utils/language';
import { useRouter } from "next/router";
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

export const LanguageMob = () => {
  const router = useRouter();
  const { t } = useTranslation('menu');

  const [languageActive, setLanguageActive] = useState(router.locale)

  const { asPath, push, pathname, query } = useRouter();

  const changeLanguage = (locale) => {
    setLanguageActive(locale);
    push({ pathname, query }, asPath, { locale });
  }

  const arrLanguage = useMemo(() => {
    return router.locales;
  }, [])

  return (
    <div className="language-mob">
      <div className="language-mob__title">{t('language')}</div>
      <div className="language-mob__list">
        {arrLanguage.map(language => (
          <button
            type="button"
            className={classNames(
              'language-mob__btn',
              { 'language-mob__btn--active': languageActive === language },
            )}
            key={language}
            onClick={() => changeLanguage(language)}
          >
            <img src={LANGUAGES_IMAGE[language]} alt={language} />
            <p>{language}</p>
          </button>
        ))}
      </div>
    </div>
  )
}