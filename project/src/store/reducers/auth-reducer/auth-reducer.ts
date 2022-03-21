import { createReducer } from '@reduxjs/toolkit';

import {
  setErrorStatus,
  setPendingStatus,
  setSuccessfulStatus
} from '../../actions/auth-actions/auth-actions';

import AuthData from '../../../types/authData';

type initStateType = {
  err: null | string,
  status: boolean,
  pending: boolean,
  userData: null | AuthData,
};

export const initState: initStateType = {
  err: null,
  status: false,
  pending: false,
  userData: null,
};

export const authReducer = createReducer(initState, (builder) => {
  builder
    .addCase(setPendingStatus, (state) => {
      state.pending = true;
      state.status = false;
      state.err = null;
    })
    .addCase(setErrorStatus, (state, action) => {
      state.pending = false;
      state.status = false;
      state.err = action.payload;
    })
    .addCase(setSuccessfulStatus, (state, action) => {
      state.pending = false;
      state.status = true;
      state.err = null;
    })
})
