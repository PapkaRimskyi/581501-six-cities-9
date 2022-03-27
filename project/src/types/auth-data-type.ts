import UserType from './user-type';

type AuthDataType = UserType & {
  email: string,
  token?: string,
}

export default AuthDataType;
