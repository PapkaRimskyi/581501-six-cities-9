import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import getFavoritesRequest from '../../favorites/thunk/get-favorites-request';
import { setNonAuthorizedStatus, setPendingAuthStatus, setUserAuthData } from '../auth';

import { AUTH_ACTIONS } from '../../const/actions-names';
import { API_ENDPOINT } from '../../../const/request-const';

import AuthDataType from '../../../types/auth-data-type/auth-data-type';

const checkAuthStatus = createAsyncThunk(AUTH_ACTIONS.CHECK_AUTH_STATUS, async(state, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const axios = thunkAPI.extra as AxiosInstance;

  dispatch((setPendingAuthStatus()));

  try {
    const { data } = await axios.get<AuthDataType>(API_ENDPOINT.LOGIN);
    delete data.token;

    dispatch(getFavoritesRequest());
    dispatch(setUserAuthData(data));
  } catch {
    dispatch(setNonAuthorizedStatus());
  }
});

export default checkAuthStatus;
