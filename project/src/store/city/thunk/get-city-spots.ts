import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { CITY_ACTIONS } from '../../const/actions-names';
import { API_ENDPOINT } from '../../../const/request-const';

import OfferType from '../../../types/offer-type';
import ReqRejectType from '../../../types/req-reject-type';

const getCitySpots =
  createAsyncThunk<OfferType[], void, { rejectValue: ReqRejectType }>(CITY_ACTIONS.GET_CITY_SPOTS, async (d, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const axios = thunkAPI.extra as AxiosInstance;

    try {
      const { data } = await axios.get<OfferType[]>(API_ENDPOINT.HOTELS);
      return data;
    } catch (e) {
      return rejectWithValue(e as ReqRejectType);
    }
  });

export default getCitySpots;
