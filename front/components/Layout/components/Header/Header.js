import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Language, LanguageMob, Logo, Nav } from './components';

export const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  useEffect(() => {
    isBurgerActive
      ? document.body.classList.add('fixed')
      : document.body.classList.remove('fixed');
  }, [isBurgerActive]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Logo />

          <nav className={classNames('header-nav', { 'header-nav--active': isBurgerActive })}>
            <Nav />

            <Language />

            <LanguageMob />
          </nav>

          <div
            className={classNames('burger', { 'burger--active': isBurgerActive })}
            onClick={() => setIsBurgerActive(!isBurgerActive)}
          >
            {[...Array(3).keys()].map((key) => <div key={key} className="burger__line"></div>)}
          </div>
        </div>
      </div>
    </header>
  )
};
