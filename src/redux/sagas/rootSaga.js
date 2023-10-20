import {all} from 'redux-saga/effects';
import userSaga from './itemSagas/userSaga';
import categoriesSaga from './itemSagas/categoriesSaga';
import cartPaymentSaga from './itemSagas/cartPaymentSaga';
import topOrderSaga from './itemSagas/topOrderSaga';
import productSaga from './itemSagas/productSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    categoriesSaga(),
    cartPaymentSaga(),
    topOrderSaga(),
    productSaga(),
  ]);
}
