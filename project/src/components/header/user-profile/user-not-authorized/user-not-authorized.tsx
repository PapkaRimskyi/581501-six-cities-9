import { Link } from 'react-router-dom';

import ROUTES_PATHS from '../../../../const/routes-paths';

function UserNotAuthorized() {
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={ROUTES_PATHS.LOGIN}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

export default UserNotAuthorized;
