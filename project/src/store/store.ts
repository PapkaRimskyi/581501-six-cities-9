import { configureStore } from '@reduxjs/toolkit';
import axiosApi from '../api/create-axios';

import { cityReducer } from './reducers/city-reducer/city-reducer';
import { sortingReducer } from './reducers/sorting-reducer/sorting-reducer';
import { authReducer } from './reducers/auth-reducer/auth-reducer';

const reducer = {
  cityData: cityReducer,
  sortType: sortingReducer,
  authStatus: authReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: axiosApi,
    },
  }),
  devTools: true,
});

export type AppDispatchType = typeof store.dispatch;

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
