import { createSlice} from '@reduxjs/toolkit';

import OfferType from '../../types/offer-type';

import { NAME_SPACES } from '../const/actions-names';

const initialState:OfferType[] = [];

export const favorites = createSlice({
  name: NAME_SPACES.FAVORITES,
  initialState,
  reducers: {
    setFavoritesData: (state, action) => action.payload,
    clearFavoritesData: () => initialState,
  },
});

export const { setFavoritesData, clearFavoritesData } = favorites.actions;
