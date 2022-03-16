import { configureStore } from '@reduxjs/toolkit';

import { cityReducer } from './reducers/city-reducer/city-reducer';
import { sortingReducer } from './reducers/sorting-reducer/sorting-reducer';

const reducer = {
  cityData: cityReducer,
  sortType: sortingReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export type AppDispatchType = typeof store.dispatch;

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
