import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import useAppSelector from '../../../../hooks/use-app-selector';
import useAppDispatch from '../../../../hooks/use-app-dispatch';

import cancelAuthSession from '../../../../store/auth/thunk/cancel-auth-session';

import ROUTES_PATHS from '../../../../const/routes-paths';

function UserAuthorized() {
  const userData = useAppSelector((state) => state.auth.userData);
  const dispatch = useAppDispatch();

  function signOutHandler(e: MouseEvent) {
    e.preventDefault();
    dispatch(cancelAuthSession());
  }

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={ROUTES_PATHS.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${userData?.avatarUrl || '../img/avatar.svg)'})` }}>
          </div>
          <span className="header__user-name user__name">{userData?.email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href=" " onClick={signOutHandler}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default UserAuthorized;
