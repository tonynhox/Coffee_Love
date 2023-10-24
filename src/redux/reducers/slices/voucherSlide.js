import {createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
import Storage from '../../../utils/Storage';
//state
const initialState = {
  voucher: {
    
  },
  isLoading: false,
};

export const voucherSlide = createSlice({
  name: 'vouchers', //users/getUserFetch
  initialState,
  reducers: {
    getVoucherFetch: state => {
      state.isLoading = true;
    },
    //action success
    getVoucherSuccess: (state, action) => {
      state.voucher = action.payload.data;
      // console.log('store của voucher', state.voucher);
      state.isLoading = false;
      ToastAndroid.show('Lấy All Voucher Thành công', ToastAndroid.SHORT);
    },

  },

  //error
  getVoucherFail: (state, action) => {
    state.isLoading = false;
    console.log('action.payload voucher faile', action.payload);
    ToastAndroid.show(action.payload, ToastAndroid.SHORT);
  },
});

export const {
  getVoucherFetch,
  getVoucherSuccess,
  getVoucherFail,
  
} = voucherSlide.actions;

export default voucherSlide.reducer;
