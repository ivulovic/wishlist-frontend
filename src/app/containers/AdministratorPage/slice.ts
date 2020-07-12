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
  loading: false,
  error: null,
};

const administratorSlice = createSlice({
  name: 'administrator',
  initialState,
  reducers: {
    loadStores(state) {
      state.loading = true;
      state.error = null;
      state.stores = [];
    },
    loadStoresSuccess(state, action: PayloadAction<Store[]>) {
      state.stores = action.payload;
      state.loading = false;
    },
    loadStoresFail(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    createStore(state, action: PayloadAction<Store>) {
      state.loading = true;
      state.error = null;
    },
    createStoreSuccess(state, action: PayloadAction<Store>) {
      state.stores.push(action.payload);
      state.loading = false;
    },
    updateStore(state, action: PayloadAction<Store>) {
      state.loading = true;
      state.error = null;
    },
    updateStoreSuccess(state, action: PayloadAction<Store>) {
      state.stores = state.stores.map(i =>
        i._id === action.payload._id ? { ...i, ...action.payload } : i,
      );
      state.loading = false;
    },
    removeStore(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    removeStoreSuccess(state, action: PayloadAction<Store>) {
      state.stores = state.stores.filter(i => i._id !== action.payload._id);
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = administratorSlice;
