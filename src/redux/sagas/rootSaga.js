import {all} from 'redux-saga/effects';
import userSaga from './itemSagas/userSaga';
import SignUpSaga from './itemSagas/SignUpSaga';

export default function* rootSaga() {
  yield all([userSaga(), SignUpSaga(), ]);
}
