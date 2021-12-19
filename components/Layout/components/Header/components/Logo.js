import Link from 'next/link';
import logo from '../../../../../img/logo.png';

export const Logo = () => {
  return (
    <div className="header__logo">
      <Link href="/">
        <a className="logo">
          <img src={logo} alt="BitShake" />
        </a>
      </Link>
    </div>
  );
};
