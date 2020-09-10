import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './slice';
import { Store } from 'types/Store';

/**
 * Github repos request/response handler
 */
export function* getStores(action) {
  yield delay(500);
  const requestURL = `/api/stores`;

  try {
    // Call our request helper (see 'utils/request')
    const stores: Store[] = yield call(request, requestURL);
    yield put(actions.loadStoresSuccess(stores));
  } catch (err) {
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
export function* storesSaga() {
  yield takeLatest(actions.loadStores.type, getStores);
}
