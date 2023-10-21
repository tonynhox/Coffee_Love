import {all} from 'redux-saga/effects';
import userSaga from './itemSagas/userSaga';
import categoriesSaga from './itemSagas/categoriesSaga';
import cartPaymentSaga from './itemSagas/cartPaymentSaga';
import chiTietSanPhamSaga from './itemSagas/chiTietSanPhamSaga';
import topOrderSaga from './itemSagas/topOrderSaga';
import productSaga from './itemSagas/productSaga';
import { donHangSaga } from './itemSagas/donHangSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    categoriesSaga(),
    cartPaymentSaga(),
    chiTietSanPhamSaga(),
    topOrderSaga(),
    productSaga(),
    donHangSaga(),
  ]);
}
