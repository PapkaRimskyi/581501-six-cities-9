import { Link, useLocation } from 'react-router-dom';

import UserProfile from './user-profile/user-profile';

import ROUTES_PATHS from '../../const/routes-paths';
import AUTH_STATUS from '../../const/auth-status';

type HeaderProps = {
  isAuthorized: AUTH_STATUS,
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
          {pathname !== ROUTES_PATHS.LOGIN && <UserProfile isAuthorized={isAuthorized} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
