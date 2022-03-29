import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { CITY_ACTIONS } from '../../const/actions-names';

import commentsErrorHandler from '../../../errors/comments-error/comments-error';

import OfferType from '../../../types/offer-type/offer-type';
import ReqRejectType from '../../../types/error-type/req-reject-type/req-reject-type';
import ErrorHandlerType from '../../../types/error-type/error-handler-type/error-handler-type';

import { API_ENDPOINT } from '../../../const/request-const';

const getCitySpots =
  createAsyncThunk<OfferType[], void, { rejectValue: ErrorHandlerType }>(CITY_ACTIONS.GET_CITY_SPOTS, async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const axios = thunkAPI.extra as AxiosInstance;

    try {
      const { data } = await axios.get<OfferType[]>(API_ENDPOINT.HOTELS);
      return data;
    } catch (e) {
      const error = commentsErrorHandler(e as ReqRejectType);
      return rejectWithValue(error);
    }
  });

export default getCitySpots;
