import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  data: [],
  cart: {
    quantity: 0,
    price: 0,
  },
  dataPayment:     {
    "id_user":"651e8c5baa3c5378de775821", 
    "id_chi_nhanh":"6522818a2639141f25388250", 
    "loai_don_hang":"order Online", 
    "dia_chi":{
        "ten_dia_chi": "212312",
        "so_dien_thoai":"" , 
        "so_nha":"", 
        "tinh":"",
        "nguoi_nhan":"huy tran"
    }, 
    "san_pham":[], 
    "ghi_chu":"", 
    "giam_gia": 10000, 
    "phi_van_chuyen": 15000,
    "thanh_toan":{
        "ten_thanh_toan":"ZaloPay",
        "ma_thanh_toan":"",
        "trang_thai": 2
    }
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
    setDataPayment: (state, action) => {
      state.dataPayment = action.payload;
    },
    getPaymentFetch: (state, action) => {
      state.isLoading = true;
    },
    getPaymentSuccess: (state, action) => {
      state.isLoading = false;
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
  setDataPayment,
  getPaymentFetch,
  getPaymentSuccess,
  getCartPaymentFail,
} = cartPaymentSlice.actions;

export default cartPaymentSlice.reducer;
