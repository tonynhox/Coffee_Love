import {createSlice} from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';

//state
const initialState = {
  user: {},
  isLoading: false,
  isLogin: false,
};

export const userSlice =  createSlice({
  name: 'users',
  initialState,
  reducers: {
    //action user
    getUserFetch: (state) => {
      state.isLoading = true;
    },
    //action success
    getUserSuccess: (state, action) => {
        state.user = action.payload.user;
        state.isLogin = true;
        state.isLoading = false
        ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);

    },
    //error
    getUserFail: (state, action) => {
      state.isLoading = false;
      console.log('action.payload user faile', action.payload);
      ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },
  },
});

export const {getUserFetch,getUserSuccess,getUserFail} = userSlice.actions;

export default userSlice.reducer;
