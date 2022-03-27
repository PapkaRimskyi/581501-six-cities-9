import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import getFavoritesRequest from './get-favorites-request';

import { FAVORITES_ACTIONS } from '../../const/actions-names';

import OfferType from '../../../types/offer-type';

import { API_ENDPOINT } from '../../../const/request-const';

const changeFavoritesStatus = createAsyncThunk(FAVORITES_ACTIONS.SEND_FAVORITES_REQUEST, async (d: { id: number, status: number }, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const axios = thunkAPI.extra as AxiosInstance;

  try {
    await axios.post<OfferType[]>(`${API_ENDPOINT.FAVORITE}/${d.id}/${d.status}`);

    dispatch(getFavoritesRequest());
  } catch(e) {
    throw new Error();
  }
});

export default changeFavoritesStatus;
