import {all} from 'redux-saga/effects';
import userSaga from './itemSagas/userSaga';

export default function* rootSaga() {
  yield all([userSaga(),]);
}
