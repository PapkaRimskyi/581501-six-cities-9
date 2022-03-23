import { createReducer } from '@reduxjs/toolkit';

import { changeCityName, changeCitySpots } from '../../actions/city-actions/city-actions';

import OfferType from '../../../types/offerType';

type InitStateType = {
  city: string,
  citySpots: OfferType[],
}

const initState: InitStateType = {
  city: 'Paris',
  citySpots: [],
};

export const cityReducer = createReducer(initState, (builder) => {
  builder
    .addCase(changeCityName, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeCitySpots, (state, action) => {
      state.citySpots = action.payload;
    });
});
