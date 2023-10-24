import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  data: [],
  isLoading: false,
};

export const cartPaymentSlice = createSlice({
  name: 'cartPayment',
  initialState,
  reducers: {
    getCartPaymentFetch: state => {
      console.log('getCartPaymentSliceFetch');
      state.isLoading = true;
    },
    //action success
    getCartPaymentSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    //action fail
    getCartPaymentFail: (state, action) => {
      console.log('getCartPaymentSliceFail', action.payload);
      state.isLoading = false;
    },
  },
});

export const {getCartPaymentFetch, getCartPaymentSuccess, getCartPaymentFail} =
  cartPaymentSlice.actions;

export default cartPaymentSlice.reducer;
