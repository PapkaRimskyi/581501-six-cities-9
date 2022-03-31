import UserType from '../offer-type/user-type/user-type';

type AuthDataType = UserType & {
  email: string,
  token?: string,
}

export default AuthDataType;
