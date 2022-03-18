import { createReducer } from '@reduxjs/toolkit';

import { changeCityName, changeCitySpots } from '../../actions/city-actions/city-actions';

import offersMocks from '../../../mocks/offers';

const initState = {
  city: 'Paris',
  citySpots: offersMocks,
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
