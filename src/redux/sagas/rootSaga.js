import {all} from 'redux-saga/effects';
import userSaga from './itemSagas/userSaga';
import SignUpSaga from './itemSagas/SignUpSaga';
import sendOtpSaga from './itemSagas/sendOtpSaga';
import changePassOtpSaga from './itemSagas/changePassOtpSaga';

export default function* rootSaga() {
  yield all([userSaga(), SignUpSaga(), sendOtpSaga(), changePassOtpSaga(), ]);
}
