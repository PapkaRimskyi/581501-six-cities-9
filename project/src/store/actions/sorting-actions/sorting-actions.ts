import { createAction } from '@reduxjs/toolkit';

import { SORTING_ACTIONS } from '../../../const/actions-names';

export const changeSortingType = createAction<string>(SORTING_ACTIONS.CHANGE_SORTING_TYPE);
