import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import AuthDataType from '../../../types/auth-data-type';

import { browserHistory } from '../../../components/app/history-router/history-router';

import { loginErrorHandler, LoginErrorHandlerReturnType } from '../../../errors/auth-errors/auth-errors';

import { setUserToken } from '../../../util/user-token';

import { AUTH_ACTIONS } from '../../const/actions-names';
import { API_ENDPOINT } from '../../../const/request-const';
import ROUTES_PATHS from '../../../const/routes-paths';

import ReqRejectType from '../../../types/req-reject-type';

type SendAuthDataType = {
  password: string,
  email: string,
};

type FulfilledDataType = Omit<AuthDataType, 'token'>;

const sendAuthRequest = createAsyncThunk<FulfilledDataType, { email: string, password: string }, { rejectValue: LoginErrorHandlerReturnType }>(AUTH_ACTIONS.SEND_AUTH_REQUEST, async (userData: SendAuthDataType, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const axios = thunkAPI.extra as AxiosInstance;

  try {
    const { data } = await axios.post<AuthDataType>(API_ENDPOINT.LOGIN, userData);
    const token = data.token || '';
    delete data.token;

    setUserToken(token);
    browserHistory.push(ROUTES_PATHS.MAIN);
    return data;
  } catch (e) {
    const error = loginErrorHandler(e as ReqRejectType);
    return rejectWithValue(error);
  }
});

export default sendAuthRequest;
