import {all} from 'redux-saga/effects';
import userSaga from './itemSagas/userSaga';
import categoriesSaga from './itemSagas/categoriesSaga';
import cartPaymentSaga from './itemSagas/cartPaymentSaga';
import chiTietSanPhamSaga from './itemSagas/chiTietSanPhamSaga';
import topOrderSaga from './itemSagas/topOrderSaga';
import productSaga from './itemSagas/productSaga';
import voucherSaga from './itemSagas/voucherSaga';
import scoreSaga from './itemSagas/scoreSaga';
import {donHangSaga, chiTietDonHangSaga} from './itemSagas/donHangSaga';

import locationMapSaga from './itemSagas/locationMapSaga';
import toppingSaga from './itemSagas/toppingSaga';
import favoriteSaga from './itemSagas/favoriteSaga';
import historyScoreSaga from './itemSagas/historyScoreSaga';
import searchSaga from './itemSagas/searchSaga';
import vongQuayMayManSaga from './itemSagas/vongQuayMayManSaga';
import deviceTokenSaga from './itemSagas/deviceTokenSaga';

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
    locationMapSaga(),
    toppingSaga(),
    voucherSaga(),
    scoreSaga(),
    favoriteSaga(),
    historyScoreSaga(),
    searchSaga(),
    vongQuayMayManSaga(),
    deviceTokenSaga(),
  ]);
}
