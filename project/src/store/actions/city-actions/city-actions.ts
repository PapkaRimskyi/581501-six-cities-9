import { AxiosInstance } from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

import OfferType from '../../../types/offerType';

import { CITY_ACTIONS } from '../../../const/actions-names';
import { API_ENDPOINT } from '../../../const/api-endpoint';

export const changeCityName = createAction<string>(CITY_ACTIONS.CHANGE_CITY_NAME);

export const changeCitySpots = createAction<OfferType[]>(CITY_ACTIONS.CHANGE_CITY_SPOTS);

////// thunk

export const getDefaultSpotsAction =
  createAsyncThunk(CITY_ACTIONS.GET_DEFAULT_SPOTS, async (d, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const axios = thunkAPI.extra as AxiosInstance;

    const { data } = await axios(API_ENDPOINT.HOTELS);

    dispatch(changeCitySpots(data));
  });
