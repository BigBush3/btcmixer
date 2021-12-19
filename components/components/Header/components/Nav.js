import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation';
import { MENU } from '../../../../utils/MENU'


export const Nav = () => {
  const router = useRouter();
  const { t } = useTranslation('menu');

  return (
    <ul className="header-nav__list">
      {MENU.map(({ label, path }) => (
        <li
          key={path}
          className="header-nav__item"
        >
          <Link href={path}>
            <a
              className={classNames('header-nav__link', { 'header-nav__link--active': router.pathname === path })}
            >
              {t(label)}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
