import {all} from 'redux-saga/effects';
import userSaga from './itemSagas/userSaga';
import chiTietSanPhamSaga from './itemSagas/chiTietSanPhamSaga';

export default function* rootSaga() {
  yield all([userSaga(), chiTietSanPhamSaga()]);
}
