import {all, takeEvery, put} from 'redux-saga/effects';
import {SET_STATE, APP_LOADING} from './actions';

export function* appLoading({payload}){
  const {loading} = payload;
  yield put({
    type: SET_STATE,
    payload: {
      loading
    }
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(APP_LOADING, appLoading)
  ])
}
