import useAppSelector from '../../../hooks/use-app-selector';

import UserAuthorized from './user-authorized/user-authorized';
import UserNotAuthorized from './user-not-authorized/user-not-authorized';

import AUTH_STATUS from '../../../const/auth-status';

function UserProfile() {
  const authorizationStatus = useAppSelector((state) => state.auth.authStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AUTH_STATUS.AUTHORIZED ? <UserAuthorized />: <UserNotAuthorized />}
      </ul>
    </nav>
  );
}

export default UserProfile;
