import {all} from 'redux-saga/effects';
import userSaga from './itemSagas/userSaga';
import categoriesSaga from './itemSagas/categoriesSaga';
import cartPaymentSaga from './itemSagas/cartPaymentSaga';
import chiTietSanPhamSaga from './itemSagas/chiTietSanPhamSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    categoriesSaga(),
    cartPaymentSaga(),
    chiTietSanPhamSaga(),
  ]);
}
