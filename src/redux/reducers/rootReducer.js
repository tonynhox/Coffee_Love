import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import categoriesSlice from './slices/categoriesSlice';
import cartPaymentSlice from './slices/cartPaymentSlice';
import chiTietSanPhamSlice from './slices/chiTietSanPhamSlice';

import topOrdersSlice from './slices/topOrderSlice';
import productSlice from './slices/productSlice';
import donHangSlice from './slices/donHangSlice';

import locationMapSlice from './slices/locationMap';
const rootReducer = combineReducers({
  users: userSlice,
  categories: categoriesSlice,
  cartPayment: cartPaymentSlice,
  chi_tiet_san_pham: chiTietSanPhamSlice,
  topOrders: topOrdersSlice,
  products: productSlice,
  don_hang: donHangSlice,
  locationMap: locationMapSlice,
});

// export const appReducer = (state, action) => {
//   if (action.type === 'logout') {
//     const slices = getState();
//     //reset
//     Object.keys(slices).forEach(slice => {
//       slices[slice] = slices[slice].initialState;
//     });

//     return slices;
//   }

//   return rootReducer(state, action);
// };

export default rootReducer;
