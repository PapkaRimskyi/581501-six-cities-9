import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { cancelUserSession } from '../auth';
import { clearFavoritesData } from '../../favorites/favorites';

import { deleteUserToken } from '../../../util/user-token';

import { AUTH_ACTIONS } from '../../const/actions-names';
import { API_ENDPOINT } from '../../../const/request-const';

const cancelAuthSession = createAsyncThunk(AUTH_ACTIONS.CANCEL_AUTH_SESSION, async (state, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const axios = thunkAPI.extra as AxiosInstance;

  try {
    await axios.delete(API_ENDPOINT.LOGOUT);
    deleteUserToken();
    dispatch(cancelUserSession());
    dispatch(clearFavoritesData());
  } catch (e) {
    throw new Error();
  }
});

export default cancelAuthSession;
