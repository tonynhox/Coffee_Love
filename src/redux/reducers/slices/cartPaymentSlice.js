import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  data: [],
  cart: {
    quantity: 0,
    price: 0,
  },
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
      const data = action.payload;
      state.data = data;
      state.isLoading = false;
      state.cart.quantity = 0;
      state.cart.price = 0;
      data.forEach((item, index) => {
        state.cart.quantity += item.so_luong;
        state.cart.price += item.gia_da_giam * item.so_luong;
        item.topping.forEach(toping => {
          state.cart.price += toping?.gia || 0 * item.so_luong;
        });
      });
      console.log('cart', state.cart);
    },

    getAddCartPaymentFetch: (state, action) => {
      console.log('getAddCartPaymentFetch');
      state.isLoading = true;
    },
    getAddCartPaymentSuccess: (state, action) => {
      const data = action.payload;
      state.data = data;
      state.isLoading = false;

      //macidnh
      state.cart.quantity = 0;
      state.cart.price = 0;
      data.forEach((item, index) => {
        state.cart.quantity += item.so_luong;
        state.cart.price += item.gia_da_giam * item.so_luong;
        item.topping.forEach(toping => {
          state.cart.price += toping?.gia || 0 * item.so_luong;
        });
      });
      console.log('cart', state.cart);
    },

    getUpdateCartPaymentFetch: (state, action) => {
      console.log('getAddCartPaymentFetch');
      state.isLoading = true;
    },
    getUpdateCartPaymentSuccess: (state, action) => {
      const data = action.payload;
      state.data = data;
      state.isLoading = false;

      //mac dinh
      state.cart.quantity = 0;
      state.cart.price = 0;
      data.forEach((item, index) => {
        state.cart.quantity += item.so_luong;
        state.cart.price += item.gia_da_giam * item.so_luong;
        item.topping.forEach(toping => {
          state.cart.price += toping?.gia || 0 * item.so_luong;
        });
      });
    },
    getDeleteCartPaymentFetch: (state, action) => {
      state.isLoading = true;

    },
    //action fail
    getCartPaymentFail: (state, action) => {
      console.log('getCartPaymentSliceFail', action.payload);
      state.isLoading = false;
    },
  },
});

export const {
  getCartPaymentFetch,
  getCartPaymentSuccess,
  getAddCartPaymentFetch,
  getAddCartPaymentSuccess,
  getUpdateCartPaymentFetch,
  getUpdateCartPaymentSuccess,
  getDeleteCartPaymentFetch,
  getCartPaymentFail,
} = cartPaymentSlice.actions;

export default cartPaymentSlice.reducer;
