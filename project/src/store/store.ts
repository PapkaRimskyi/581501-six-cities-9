import { configureStore } from '@reduxjs/toolkit';
import axiosApi from '../api/create-axios';

import rootReducer from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
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
