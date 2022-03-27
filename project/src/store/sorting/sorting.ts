import { createSlice } from '@reduxjs/toolkit';

import { SORTING_LIST_ENUM } from '../../const/sorting-list';

import { NAME_SPACES } from '../const/actions-names';

const initialState: SORTING_LIST_ENUM = SORTING_LIST_ENUM.POPULAR;

export const sorting = createSlice({
  name: NAME_SPACES.SORTING,
  initialState,
  reducers: {
    changeSortType: (state, action) => action.payload,
  },
});

export const { changeSortType } = sorting.actions;

