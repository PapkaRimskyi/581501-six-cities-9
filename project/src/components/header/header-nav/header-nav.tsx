import { Link } from 'react-router-dom';

import ROUTES_PATHS from '../../../const/routes-paths';

type HeaderNav = {
  isAuthorized: boolean,
}

function HeaderNav({ isAuthorized }: HeaderNav) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuthorized ? (
          <>
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={ROUTES_PATHS.LOGIN}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNav;
