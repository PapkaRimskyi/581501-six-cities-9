export enum CITY_ACTIONS {
  GET_CITY_SPOTS = 'city/getCitySpots',
}

export enum AUTH_ACTIONS {
  CHECK_AUTH_STATUS = 'auth/checkAuthStatus',
  SEND_AUTH_REQUEST = 'auth/sendAuthRequest',
  CANCEL_AUTH_SESSION = 'auth/cancelAuthSession',
}

export enum FAVORITES_ACTIONS {
  GET_FAVORITES_REQUEST = 'favorites/getFavoritesRequest',
  SEND_FAVORITES_REQUEST = 'favorites/sendFavoritesRequest',
}

export enum NAME_SPACES {
  SORTING = 'sorting',
  CITY = 'city',
  AUTH = 'auth',
  FAVORITES = 'favorites',
}
