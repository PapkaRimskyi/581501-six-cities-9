import UserAuthorized from './user-authorized/user-authorized';
import UserNotAuthorized from './user-not-authorized/user-not-authorized';

import AUTH_STATUS from '../../../const/auth-status';

type UserProfileProps = {
  isAuthorized: AUTH_STATUS,
}

function UserProfile({ isAuthorized }: UserProfileProps) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuthorized === AUTH_STATUS.AUTHORIZED ? <UserAuthorized />: <UserNotAuthorized />}
      </ul>
    </nav>
  );
}

export default UserProfile;
