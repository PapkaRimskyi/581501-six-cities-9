import { combineReducers } from '@reduxjs/toolkit';

import { sorting } from './sorting/sorting';
import { city } from './city/city';
import { auth } from './auth/auth';
import { favorites } from './favorites/favorites';

import { NAME_SPACES } from './const/actions-names';

const rootReducer = combineReducers({
  [NAME_SPACES.SORTING]: sorting.reducer,
  [NAME_SPACES.CITY]: city.reducer,
  [NAME_SPACES.AUTH]: auth.reducer,
  [NAME_SPACES.FAVORITES]: favorites.reducer,
});

export default rootReducer;
