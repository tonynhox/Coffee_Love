import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice' 
import chiTietSanPhamSlice from './slices/chiTietSanPhamSlice';

const rootReducer = combineReducers({
  users: userSlice,
  chi_tiet_san_pham: chiTietSanPhamSlice,
});



export default rootReducer;
