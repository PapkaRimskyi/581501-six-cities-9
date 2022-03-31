import { createSlice } from '@reduxjs/toolkit';

import AuthDataType from '../../types/auth-data-type/auth-data-type';
import ErrorHandlerType from '../../types/error-type/error-handler-type/error-handler-type';
import AUTH_STATUS from '../../const/auth-status';
import { NAME_SPACES } from '../const/actions-names';

type InitialStateType = {
  authStatus: AUTH_STATUS,
  pending: boolean,
  error: ErrorHandlerType | null,
  userData: Omit<AuthDataType, 'token'> | null,
};

const initialState: InitialStateType = {
  authStatus: AUTH_STATUS.UNKNOWN,
  pending: false,
  error: null,
  userData: null,
};

export const auth = createSlice({
  name: NAME_SPACES.AUTH,
  initialState,
  reducers: {
    cancelUserSession: () => initialState,
    setPendingAuthStatus: (state) => {
      state.pending = true;
      state.error = initialState.error;
      state.userData = initialState.userData;
    },
    setUserAuthData: (state, action) => {
      state.pending = false;
      state.authStatus = AUTH_STATUS.AUTHORIZED;
      state.userData = action.payload;
    },
    setNonAuthorizedStatus: (state) => {
      state.pending = false;
      state.authStatus = AUTH_STATUS.NOT_AUTHORIZED;
    },
    setErrorAuthStatus: (state, action) => {
      state.pending = false;
      state.authStatus = AUTH_STATUS.NOT_AUTHORIZED;
      state.error = action.payload || null;
    },
  },
});

export const { cancelUserSession, setPendingAuthStatus, setUserAuthData, setNonAuthorizedStatus, setErrorAuthStatus } = auth.actions;
