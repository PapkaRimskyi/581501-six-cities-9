import { Link, useLocation } from 'react-router-dom';

import HeaderNav from './header-nav/header-nav';

import ROUTES_PATHS from '../app/routes-paths';

type HeaderProps = {
  isAuthorized: boolean,
}

function Header({ isAuthorized } : HeaderProps) {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={ROUTES_PATHS.MAIN} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="./img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {pathname !== ROUTES_PATHS.LOGIN && isAuthorized ? <HeaderNav /> : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
