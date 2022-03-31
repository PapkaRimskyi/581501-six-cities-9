const LOCAL_STORAGE_TOKEN_NAME = 'USER_TOKEN';

export function getUserToken() {
  const userToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);
  return userToken || '';
}

export function setUserToken(token: string) {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
}

export function deleteUserToken() {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
}
