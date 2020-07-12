/*
 * GithubRepoForm Slice
 *
 * Here we define:
 * - The shape of our container's slice of Redux store,
 * - All the actions which can be triggered for this slice, including their effects on the store.
 *
 * Note that, while we are using dot notation in our reducer, we are not actually mutating the state
 * manually. Under the hood, we use immer to apply these updates to a new copy of the state.
 * Please see https://immerjs.github.io/immer/docs/introduction for more information.
 *
 */

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { Store } from 'types/Store';

// The initial state of the GithubRepoForm container
export const initialState: ContainerState = {
  stores: [],
  loading: null,
  error: null,
};

const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    loadStores(state) {
      state.loading = state.loading == null ? true : false;
      state.error = null;
      // state.stores = [];
    },
    loadStoresSuccess(state, action: PayloadAction<Store[]>) {
      state.stores = action.payload;
      state.loading = false;
    },
    loadStoresFail(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = storesSlice;
