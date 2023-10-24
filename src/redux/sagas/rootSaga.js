import {all} from 'redux-saga/effects';
import userSaga from './itemSagas/userSaga';
import categoriesSaga from './itemSagas/categoriesSaga';
import cartPaymentSaga from './itemSagas/cartPaymentSaga';
import chiTietSanPhamSaga from './itemSagas/chiTietSanPhamSaga';
import topOrderSaga from './itemSagas/topOrderSaga';
import productSaga from './itemSagas/productSaga';
import { chiTietDonHangSaga, donHangSaga } from './itemSagas/donHangSaga';

import locationMapSaga from './itemSagas/locationMapSaga';
import toppingSaga from './itemSagas/toppingSaga';
import favoriteSaga from './itemSagas/favoriteSaga';
export default function* rootSaga() {
  yield all([
    userSaga(),
    categoriesSaga(),
    cartPaymentSaga(),
    chiTietSanPhamSaga(),
    topOrderSaga(),
    productSaga(),
    donHangSaga(),
    chiTietDonHangSaga(),
    // locationMapSaga(),
    toppingSaga(),
    favoriteSaga(),
  ]);
}
