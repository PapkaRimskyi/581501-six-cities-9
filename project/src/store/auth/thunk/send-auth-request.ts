import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { setPendingAuthStatus, setUserAuthData, setErrorAuthStatus } from '../auth';
import getFavoritesRequest from '../../favorites/thunk/get-favorites-request';

import AuthDataType from '../../../types/auth-data-type/auth-data-type';

import { browserHistory } from '../../../components/app/history-router/history-router';

import loginErrorHandler from '../../../errors/auth-errors/auth-errors';

import { setUserToken } from '../../../util/user-token';

import { AUTH_ACTIONS } from '../../const/actions-names';
import { API_ENDPOINT } from '../../../const/request-const';
import ROUTES_PATHS from '../../../const/routes-paths';

import ReqRejectType from '../../../types/error-type/req-reject-type/req-reject-type';
import validateLoginForm from "../../../util/validate-login-form";

type SendAuthDataType = {
  password: string,
  email: string,
};

const sendAuthRequest = createAsyncThunk(AUTH_ACTIONS.SEND_AUTH_REQUEST, async (userData: SendAuthDataType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const axios = thunkAPI.extra as AxiosInstance;

  dispatch(setPendingAuthStatus());

  const isPasswordValid = validateLoginForm(userData.password);

  if (isPasswordValid) {
    try {
      const { data } = await axios.post<AuthDataType>(API_ENDPOINT.LOGIN, userData);
      const token = data.token || '';
      delete data.token;

      setUserToken(token);
      dispatch(setUserAuthData(data));
      dispatch(getFavoritesRequest());

      browserHistory.push(ROUTES_PATHS.MAIN);
    } catch (e) {
      const error = loginErrorHandler(e as ReqRejectType);
      dispatch(setErrorAuthStatus(error));
    }
  } else {
    dispatch(setErrorAuthStatus({ errText: 'Password should contains at least 1 number and 1 letter' }))
  }
});

export default sendAuthRequest;
