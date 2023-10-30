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
  historyScores: historyScoreSlide,
  searchs: searchSlice,
});

export default rootReducer;
