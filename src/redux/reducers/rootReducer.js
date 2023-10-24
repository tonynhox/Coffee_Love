import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import categoriesSlice from './slices/categoriesSlice';
import cartPaymentSlice from './slices/cartPaymentSlice';
import chiTietSanPhamSlice from './slices/chiTietSanPhamSlice';

import topOrdersSlice from './slices/topOrderSlice';
import productSlice from './slices/productSlice';
import donHangSlice from './slices/donHangSlice';

import locationMapSlice from './slices/locationMap';
import toppingSlice from './slices/toppingSlice';
import voucherSlide from './slices/voucherSlide';
import scoreSlide from './slices/scoreSlide';

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
});

export default rootReducer;
