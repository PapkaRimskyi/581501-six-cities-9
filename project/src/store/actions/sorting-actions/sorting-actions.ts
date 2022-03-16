import { createAction } from '@reduxjs/toolkit';

export const changeSortingType = createAction<string>('sorting/changeSortingType');
