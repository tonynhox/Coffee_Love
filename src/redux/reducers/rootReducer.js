import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import categoriesSlice from './slices/categoriesSlice';
import cartPaymentSlice from './slices/cartPaymentSlice';
import topOrdersSlice from './slices/topOrderSlice';
import productSlice from './slices/productSlice';
const rootReducer = combineReducers({
  users: userSlice,
  categories: categoriesSlice,
  cartPayment: cartPaymentSlice,
  topOrders: topOrdersSlice,
  products: productSlice
});

export const appReducer = (state, action) => {
  if (action.type === 'logout') {
    const slices = getState();
    //reset
    Object.keys(slices).forEach(slice => {
      slices[slice] = slices[slice].initialState;
    });

    return slices;
  }

  return rootReducer(state, action);
};

export default rootReducer;
