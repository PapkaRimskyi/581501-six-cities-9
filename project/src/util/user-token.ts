type UserTokenType = {
  token: null | string,
  getUserToken: () => null | string,
  setUserToken: (userToken: string) => void,
}

const userToken: UserTokenType = {
  token: null,
  getUserToken() {
    return this.token;
  },
  setUserToken(userToken: string) {
    this.token = userToken;
  },
}

export default userToken;
