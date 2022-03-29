import { createSlice } from '@reduxjs/toolkit';

import getCitySpots from './thunk/get-city-spots';

import OfferType from '../../types/offer-type/offer-type';

import { NAME_SPACES } from '../const/actions-names';
import { CITY_LIST_ENUM } from '../../const/city-list';
import ErrorHandlerType from '../../types/error-type/error-handler-type/error-handler-type';

type InitStateType = {
  cityName: CITY_LIST_ENUM,
  citySpots: OfferType[],
  pending: boolean,
  error: ErrorHandlerType | null,
}

const initialState: InitStateType = {
  cityName: CITY_LIST_ENUM.PARIS,
  citySpots: [],
  pending: false,
  error: null,
};

export const city = createSlice({
  name: NAME_SPACES.CITY,
  initialState,
  reducers: {
    changeCityName: (state, action) => {
      state.cityName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCitySpots.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCitySpots.fulfilled, (state, action) => {
        state.pending = false;
        state.citySpots = action.payload;
      })
      .addCase(getCitySpots.rejected, (state, action ) => {
        state.pending = false;
        state.error = action.payload || null;
      });
  },
});

export const { changeCityName } = city.actions;
