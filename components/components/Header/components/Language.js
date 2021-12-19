import { useState, useMemo } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '../../../../hocks/useClickOutside';
import { LANGUAGES_IMAGE } from '../../../../utils/language';
import { useRouter } from "next/router";


export const Language = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [languageActive, setLanguageActive] = useState(router.locale)

  const { asPath, push, pathname, query } = useRouter();

  const arrLanguage = useMemo(() => {
    return router.locales;
  }, [])

  const changeLanguage = (locale) => {
    setIsOpen(!isOpen);
    setLanguageActive(locale);
    push({ pathname, query }, asPath, { locale });
  }

  const domNode = useClickOutside(() => {
    setIsOpen(false)
  })

  return (
    <div className="language" ref={domNode}>
      <button
        type="button"
        className="language__selected"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={LANGUAGES_IMAGE[languageActive]} alt={languageActive} />
      </button>
      <div className={classNames(
        'language__list-wrapper',
        {
          'language__list-wrapper--active': isOpen,
        }
      )}>
        <div className="language__list corner corner--top">
          {
            arrLanguage.map((language) => (
              languageActive !== language && (
                <button
                  type="button"
                  className="language__item-btn"
                  key={language}
                  onClick={() => changeLanguage(language)}
                >
                  <img src={LANGUAGES_IMAGE[language]} alt={language} />
                  <p>{language}</p>
                </button>
              )
            ))
          }
        </div>
      </div>
    </div>
  )
}
