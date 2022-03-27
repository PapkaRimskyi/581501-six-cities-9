import { AnyAction, createSlice, AsyncThunk } from '@reduxjs/toolkit';

import AuthDataType from '../../types/auth-data-type';

import AUTH_STATUS from '../../const/auth-status';
import { AUTH_ACTIONS, NAME_SPACES } from '../const/actions-names';
import { LoginErrorHandlerReturnType } from '../../errors/auth-errors/auth-errors';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

type InitialStateType = {
  authStatus: AUTH_STATUS,
  pending: boolean,
  error: LoginErrorHandlerReturnType,
  userData: Omit<AuthDataType, 'token'> | null,
};

function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.startsWith('auth/') && action.type.endsWith('/pending') && !action.type.includes(AUTH_ACTIONS.CANCEL_AUTH_SESSION);
}

function isFulfilledAction(action: AnyAction): action is FulfilledAction {
  return action.type.startsWith('auth/') && action.type.endsWith('/fulfilled') && !action.type.includes(AUTH_ACTIONS.CANCEL_AUTH_SESSION);
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.startsWith('auth/') && action.type.endsWith('/rejected') && !action.type.includes(AUTH_ACTIONS.CANCEL_AUTH_SESSION);
}

const initialState: InitialStateType = {
  authStatus: AUTH_STATUS.UNKNOWN,
  pending: false,
  error: { code: null, errText: '' },
  userData: null,
};

export const auth = createSlice({
  name: NAME_SPACES.AUTH,
  initialState,
  reducers: {
    cancelUserSession: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPendingAction, (state) => {
        state.pending = true;
        state.error = initialState.error;
        state.userData = initialState.userData;
      })
      .addMatcher(isFulfilledAction, (state, action) => {
        state.pending = false;
        state.authStatus = AUTH_STATUS.AUTHORIZED;
        state.userData = action.payload;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.pending = false;
        state.authStatus = AUTH_STATUS.NOT_AUTHORIZED;
        state.error = action.payload;
      });
  },
});

export const { cancelUserSession } = auth.actions;
