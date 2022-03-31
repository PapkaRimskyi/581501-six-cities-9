import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import getFavoritesRequest from './get-favorites-request';

import { FAVORITES_ACTIONS } from '../../const/actions-names';

import OfferType from '../../../types/offer-type/offer-type';

import { API_ENDPOINT } from '../../../const/request-const';

type FavoritesDataType = {
  id: number,
  status: number,
}

const changeFavoritesStatus = createAsyncThunk(FAVORITES_ACTIONS.SEND_FAVORITES_REQUEST, async (favoritesData: FavoritesDataType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const axios = thunkAPI.extra as AxiosInstance;

  try {
    await axios.post<OfferType[]>(`${API_ENDPOINT.FAVORITE}/${favoritesData.id}/${favoritesData.status}`);

    dispatch(getFavoritesRequest());
  } catch(e) {
    throw new Error();
  }
});

export default changeFavoritesStatus;
