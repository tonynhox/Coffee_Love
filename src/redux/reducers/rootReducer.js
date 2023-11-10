import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import categoriesSlice from './slices/categoriesSlice';
import cartPaymentSlice from './slices/cartPaymentSlice';
import chiTietSanPhamSlice from './slices/chiTietSanPhamSlice';

import topOrdersSlice from './slices/topOrderSlice';
import productSlice from './slices/productSlice';
import donHangSlice from './slices/donHangSlice';

import locationMapSlice from './slices/locationMapSlice';
import toppingSlice from './slices/toppingSlice';
import voucherSlide from './slices/voucherSlide';
import scoreSlide from './slices/scoreSlide';
import historyScoreSlide from './slices/historyScoreSlide';
import searchSlice from './slices/searchSlice';

import favoriteSlice from './slices/favoriteSlice';
import muaSanPhamSlice from './slices/muaSanPhamSlice';

import utilsSlice from './slices/utilSlice';
import vongQuayMayManSlice from './slices/vongQuayMayManSlice';

import deviceTokenSlice from './slices/deviceTokenSlice';
import cameraSlice from './slices/cameraSlice';

const rootReducer = combineReducers({
  users: userSlice,
  categories: categoriesSlice,
  cartPayment: cartPaymentSlice,
  chi_tiet_san_pham: chiTietSanPhamSlice,
  topOrders: topOrdersSlice,
  products: productSlice,
  don_hang: donHangSlice,
  locationMap: locationMapSlice,
  topping: toppingSlice,
  vouchers: voucherSlide,
  scores: scoreSlide,
  favorite: favoriteSlice,
  mua_san_pham: muaSanPhamSlice,
  utils: utilsSlice,
  historyScores: historyScoreSlide,
  searchs: searchSlice,
  vong_quay_may_man: vongQuayMayManSlice,
  deviceToken: deviceTokenSlice,
  camera: cameraSlice,
});

export default rootReducer;
