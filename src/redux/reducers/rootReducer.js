import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice' 
import chiTietSanPhamSlice from './slices/chiTietSanPhamSlice';

const rootReducer = combineReducers({
  users: userSlice,
  chi_tiet_san_pham: chiTietSanPhamSlice,
});

export const appReducer = (state, action) => {
  if(action.type === 'logout') {
    const slices = getState();  
    //reset
    Object.keys(slices).forEach(slice => {
      slices[slice] = slices[slice].initialState; 
    })

    return slices;  
  }

  return rootReducer(state, action);
}


export default rootReducer;
