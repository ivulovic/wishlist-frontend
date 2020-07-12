import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request, makePostReq } from 'utils/request';
import { actions } from './slice';
import { Wishlist } from 'types/Wishlist';

/**
 * Github repos request/response handler
 */
export function* getWishlists(action) {
  yield delay(500);
  const requestURL = `/api/wishlists/user`;

  try {
    const wishlists: Wishlist[] = yield call(
      request,
      requestURL,
      makePostReq(action.payload) as RequestInit,
    );
    yield put(actions.loadWishlistsSuccess(wishlists));
  } catch (err) {
    yield put(actions.loadWishlistsFail());
    if (err.response?.status === 404) {
      // yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
    } else if (err.message === 'Failed to fetch') {
      // yield put(actions.repoError(RepoErrorType.GITHUB_RATE_LIMIT));
    } else {
      // yield put(actions.repoError(RepoErrorType.RESPONSE_ERROR));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* usersSaga() {
  yield takeLatest(actions.loadWishlists.type, getWishlists);
}
