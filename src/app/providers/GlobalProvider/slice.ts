import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the GithubRepoForm container
export const initialState: ContainerState = {
  isDrawerOpen: true,
  loading: null,
  error: null,
};

const storesSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openDrawer(state) {
      state.isDrawerOpen = true;
      // localStorage.setItem('isDrawerOpen', '1');
    },
    closeDrawer(state) {
      state.isDrawerOpen = false;
      // localStorage.setItem('isDrawerOpen', '0');
    },
  },
});

export const { actions, reducer, name: sliceKey } = storesSlice;
