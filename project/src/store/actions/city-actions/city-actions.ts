import { createAction } from '@reduxjs/toolkit';

import OfferType from '../../../types/offerType';

export const changeCityName = createAction<string>('city/changeCityName');

export const changeCitySpots = createAction<OfferType[]>('city/changeCitySpots');
