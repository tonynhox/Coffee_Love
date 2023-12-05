import {createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
import Storage from '../../../utils/Storage';
//state
const initialState = {
  voucher: {},
  useVoucher: {},
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
    },
    setUseVoucher: (state, action) => {
      state.useVoucher = action.payload;
    },
    //error
    getVoucherFail: (state, action) => {
      state.isLoading = false;
      console.log('action.payload voucher faile', action.payload);
    },
  },
});

export const {getVoucherFetch, getVoucherSuccess,setUseVoucher, getVoucherFail} =
  voucherSlide.actions;

export default voucherSlide.reducer;
