import { createSlice } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import Storage from '../../../utils/storage'
//state
const initialState = {
  user: {
    "id_user": '',
    "token": ''
},
  isLoading: false,
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'users',//users/getUserFetch
  initialState,
  reducers: {
    //action user
    getUserFetch: (state) => {
      state.isLoading = true;
    },
    //action success
    LoginSuccess: (state, action) => {
      state.user = action.payload.data;
      Storage.setToken(action.payload.data.token);
      state.isLogin = true;
      state.isLoading = false;
      ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);

    },

    getRegister: (state) => {
      state.isLoading = true;
    },

    SignUpSuccess: (state) => {
      state.isLoading = false;
      ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
    },

    getOtp: (state) => {
      state.isLoading = true;
    },

    getOtpSuccess: (state) => {
      state.isLoading = false;
      ToastAndroid.show("Send Otp ", ToastAndroid.SHORT);
    },

    changePassOtp: (state) => {
      state.isLoading = true;
    },

    changePassOtpSuccess: (state) => {
      state.isLoading = false;
      ToastAndroid.show("Đổi mật khẩu thành công ", ToastAndroid.SHORT);
    },

    changePass: (state) => {
      state.isLoading = true;
    },

    changePassSuccess: (state) => {
      state.isLoading = false;
      ToastAndroid.show("Đổi mật khẩu thành công ", ToastAndroid.SHORT);
    },

    //error
    getUserFail: (state, action) => {
      state.isLoading = false;
      console.log('action.payload user faile', action.payload);
      ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },
  },
});

export const { getUserFetch, LoginSuccess, getRegister, SignUpSuccess, getOtp, getOtpSuccess, changePassOtp, changePassOtpSuccess, changePass, changePassSuccess, getUserFail } = userSlice.actions;

export default userSlice.reducer;
