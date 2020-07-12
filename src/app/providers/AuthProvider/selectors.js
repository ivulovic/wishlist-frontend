import { createSelector } from 'reselect';

export const stateName = 'auth';

// basic selectors
export const selectState = state => state[stateName];
export const selectInitializedAuth = state => state[stateName].initializedAuth;
export const selectIsUserAuthenticated = state =>
  state[stateName].isAuthenticated;

// memoize selectors

export const makeSelectIsSuperUser = createSelector(selectState, s =>
  s ? s.isSuperUser : false,
);
export const makeSelectIsUserAuthenticated = createSelector(
  selectIsUserAuthenticated,
  isAuthenticated => isAuthenticated,
);
export const makeSelectInitializedAuth = createSelector(
  selectInitializedAuth,
  initializedAuth => initializedAuth,
);
