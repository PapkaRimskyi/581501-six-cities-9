import { createReducer } from '@reduxjs/toolkit';

import { changeSortingType } from '../../actions/sorting-actions/sorting-actions';

const initState = 'Popular';

export const sortingReducer = createReducer(initState, (builder) => {
  builder
    .addCase(changeSortingType, (state, action) => action.payload);
});
