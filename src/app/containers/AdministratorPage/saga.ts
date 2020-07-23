import { call, put, takeLatest, delay } from 'redux-saga/effects';
import {
  request,
  makePostReq,
  makePatchReq,
  makeDeleteReq,
} from 'utils/request';
import { actions } from './slice';
import { Store } from 'types/Store';
import { successNotification } from 'utils/notifications';

/**
 * Github repos request/response handler
 */
export function* getStores() {
  yield delay(500);
  const requestURL = `/api/stores/all`;

  try {
    // Call our request helper (see 'utils/request')
    const stores: Store[] = yield call(request, requestURL);
    if (stores?.length > 0) {
      yield put(actions.loadStoresSuccess(stores));
      // yield put();
    } else {
      // yield put(actions.repoError(RepoErrorType.USER_HAS_NO_REPO));
    }
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

export function* createStore(action) {
  yield delay(500);
  const requestURL = `/api/stores`;

  try {
    const store: Store = yield call(
      request,
      requestURL,
      makePostReq(action.payload) as RequestInit,
    );
    if (store) {
      yield put(actions.createStoreSuccess(store));
      successNotification({ message: 'Store created' });
    } else {
      console.log('Error occured ');
      // yield put(actions.repoError(RepoErrorType.USER_HAS_NO_REPO));
    }
  } catch (err) {
    console.log('Error occured ', err);
    if (err.response?.status === 404) {
      // yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
    } else if (err.message === 'Failed to fetch') {
      // yield put(actions.repoError(RepoErrorType.GITHUB_RATE_LIMIT));
    } else {
      // yield put(actions.repoError(RepoErrorType.RESPONSE_ERROR));
    }
  }
}

export function* updateStore(action) {
  yield delay(500);
  const {
    _id,
    createdAt,
    modifiedAt,
    __v,
    createdBy,
    modifiedBy,
    ...payload
  } = action.payload;
  const requestURL = `/api/stores/${_id}`;
  try {
    const store: Store = yield call(
      request,
      requestURL,
      makePatchReq(payload) as RequestInit,
    );
    if (store) {
      yield put(actions.updateStoreSuccess(store));
      successNotification({ message: 'Store updated' });
    } else {
      console.log('Error occured ');
      // yield put(actions.repoError(RepoErrorType.USER_HAS_NO_REPO));
    }
  } catch (err) {
    console.log('Error occured ', err);
    if (err.response?.status === 404) {
      // yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
    } else if (err.message === 'Failed to fetch') {
      // yield put(actions.repoError(RepoErrorType.GITHUB_RATE_LIMIT));
    } else {
      // yield put(actions.repoError(RepoErrorType.RESPONSE_ERROR));
    }
  }
}

export function* removeStore(action) {
  yield delay(500);
  const requestURL = `/api/stores/${action.payload}`;
  try {
    const store: Store = yield call(
      request,
      requestURL,
      makeDeleteReq({}) as RequestInit,
    );
    if (store) {
      yield put(actions.removeStoreSuccess(store));
    } else {
      console.log('Error occured ');
      // yield put(actions.repoError(RepoErrorType.USER_HAS_NO_REPO));
    }
  } catch (err) {
    console.log('Error occured ', err);
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
export function* administratorSaga() {
  yield takeLatest(actions.loadStores.type, getStores);
  yield takeLatest(actions.createStore.type, createStore);
  yield takeLatest(actions.updateStore.type, updateStore);
  yield takeLatest(actions.removeStore.type, removeStore);
}
