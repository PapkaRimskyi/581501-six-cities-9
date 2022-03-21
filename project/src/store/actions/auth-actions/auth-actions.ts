import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {AxiosInstance, AxiosResponse} from 'axios';

import { AUTH_ACTIONS } from '../../../const/actions-names';
import { API_ENDPOINT } from '../../../const/api-endpoint';

import AuthData from '../../../types/authData';
import AxiosResponseType from "../../../types/axiosReponse";

type sendAuthDataType = {
  password: string,
  email: string,
}

export const setPendingStatus = createAction(AUTH_ACTIONS.PENDING_AUTH_STATUS);

export const setErrorStatus = createAction<string>(AUTH_ACTIONS.ERROR_AUTH_STATUS);

export const setSuccessfulStatus = createAction<Omit<AuthData, 'token'>>(AUTH_ACTIONS.SUCCESSFUL_AUTH_STATUS);

// export const checkAuthStatus = createAsyncThunk(AUTH_ACTIONS.CHECK_AUTH_STATUS, async (d, thunkAPI) => {
//   const { dispatch } = thunkAPI;
//   const axios = thunkAPI.extra as AxiosInstance;
//
//   try {
//     const res = await axios.get(API_ENDPOINT.LOGIN);
//     setAuth({ err: null, status: true, pending: false });
//   } catch(e) {
//     console.log(e);
//   }
// });

export const sendAuthData = createAsyncThunk(AUTH_ACTIONS.SEND_AUTH_DATA, async (userData: sendAuthDataType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const axios = thunkAPI.extra as AxiosInstance;
  dispatch(setPendingStatus());

  try {
    const { data } = await axios.post<AxiosResponse<AuthData>>(API_ENDPOINT.LOGIN, userData);
    const token = data.token;
    console.log(data);
    dispatch(setSuccessfulStatus());
  } catch(errText) {
    dispatch(setErrorStatus(errText as string));
  }
});
