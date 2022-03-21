import UserType from './userType';

type AuthData = UserType & {
  email: string,
  token: string,
}

export default AuthData;
