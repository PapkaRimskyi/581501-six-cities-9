export enum CITY_ACTIONS {
  GET_DEFAULT_SPOTS = 'city/getDefaultSpots',
  CHANGE_CITY_NAME = 'city/changeCityName',
  CHANGE_CITY_SPOTS = 'city/changeCitySpots',
}

export enum AUTH_ACTIONS {
  CHECK_AUTH_STATUS = 'auth/checkAuthStatus',
  SEND_AUTH_DATA = 'auth/sendAuthData',
  PENDING_AUTH_STATUS = 'auth/pendingAuthStatus',
  SUCCESSFUL_AUTH_STATUS = 'auth/successfulAuthStatus',
  ERROR_AUTH_STATUS = 'auth/errorAuthStatus',
}

export enum SORTING_ACTIONS {
  CHANGE_SORTING_TYPE = 'sorting/changeSortingType',
}
