import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.administrator || initialState;

export const selectLoading = createSelector([selectDomain], s => s.loading);

export const selectError = createSelector([selectDomain], s => s.error);

export const selectStores = createSelector(
  [selectDomain],
  state => state.stores,
);
