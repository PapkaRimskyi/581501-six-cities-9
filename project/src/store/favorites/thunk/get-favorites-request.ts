import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { setFavoritesData } from '../favorites';

import { FAVORITES_ACTIONS } from '../../const/actions-names';

import OfferType from '../../../types/offer-type';

import { API_ENDPOINT } from '../../../const/request-const';

const getFavoritesRequest = createAsyncThunk(FAVORITES_ACTIONS.GET_FAVORITES_REQUEST, async (d, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const axios = thunkAPI.extra as AxiosInstance;

  try {
    const { data } = await axios.get<OfferType[]>(API_ENDPOINT.FAVORITE);

    dispatch(setFavoritesData(data));
  } catch(e) {
    throw new Error();
  }
});

export default getFavoritesRequest;
