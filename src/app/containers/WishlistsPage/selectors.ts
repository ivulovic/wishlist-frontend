import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.wishlists || initialState;

export const selectLoading = createSelector([selectDomain], s => s.loading);

export const selectError = createSelector([selectDomain], s => s.error);

export const selectWishlists = createSelector(
  [selectDomain],
  state => state.wishlists,
);

export const selectTempWish = createSelector(
  [selectDomain],
  state => state.tempWish,
);
