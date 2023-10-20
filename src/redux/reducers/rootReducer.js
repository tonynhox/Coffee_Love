import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice' 
import categoriesSlice from './slices/categoriesSlice';
import cartPaymentSlice from './slices/cartPaymentSlice';
import chiTietSanPhamSlice from './slices/chiTietSanPhamSlice';

const rootReducer = combineReducers({
  users: userSlice,
  categories: categoriesSlice,
  cartPayment: cartPaymentSlice,
  chi_tiet_san_pham: chiTietSanPhamSlice,
});



export default rootReducer;
