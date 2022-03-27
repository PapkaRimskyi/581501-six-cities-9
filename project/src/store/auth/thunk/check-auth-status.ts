import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import getFavoritesRequest from '../../favorites/thunk/get-favorites-request';

import { loginErrorHandler, LoginErrorHandlerReturnType } from '../../../errors/auth-errors/auth-errors';

import { AUTH_ACTIONS } from '../../const/actions-names';
import { API_ENDPOINT } from '../../../const/request-const';

import AuthDataType from '../../../types/auth-data-type';
import ReqRejectType from '../../../types/req-reject-type';

type FulfilledDataType = Omit<AuthDataType, 'token'>;

const checkAuthStatus = createAsyncThunk<FulfilledDataType, void, { rejectValue: LoginErrorHandlerReturnType }>(AUTH_ACTIONS.CHECK_AUTH_STATUS, async(state, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  const axios = thunkAPI.extra as AxiosInstance;

  try {
    const { data } = await axios.get<AuthDataType>(API_ENDPOINT.LOGIN);
    delete data.token;
    dispatch(getFavoritesRequest());
    return data;
  } catch (e) {
    const error = loginErrorHandler(e as ReqRejectType);
    return rejectWithValue({...error, errText: ''});
  }
});

export default checkAuthStatus;
