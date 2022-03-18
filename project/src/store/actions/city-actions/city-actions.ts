import { createAction } from '@reduxjs/toolkit';

import OfferType from '../../../types/offerType';

import { CITY_ACTIONS } from '../../../const/actions-names';

export const changeCityName = createAction<string>(CITY_ACTIONS.CHANGE_CITY_NAME);

export const changeCitySpots = createAction<OfferType[]>(CITY_ACTIONS.CHANGE_CITY_SPOTS);
