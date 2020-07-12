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
import { Wishlist } from 'types/Wishlist';

// The initial state of the GithubRepoForm container
export const initialState: ContainerState = {
  wishlists: [],
  loading: null,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetState(state) {
      return initialState;
    },
    loadWishlists(state, action: PayloadAction<any>) {
      state.wishlists = [];
      state.loading = state.loading == null ? true : false;
      state.error = null;
    },
    loadWishlistsSuccess(state, action: PayloadAction<Wishlist[]>) {
      state.wishlists = action.payload;
      state.loading = false;
    },
    loadWishlistsFail(state /**, action: PayloadAction<any> */) {
      // state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = usersSlice;
