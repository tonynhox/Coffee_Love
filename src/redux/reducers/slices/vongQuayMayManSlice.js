import {createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';

const initialState = {
  isLoading: false,
  chuanBiQuay: false,
  quayThanhCong: false,
  nhanThuong: false,
  nhanThuongThanhCong: false,
  data: [],
  dataLabel: [],
};

const vongQuayMayManSlice = createSlice({
  name: 'vong_quay_may_man',
  initialState,
  reducers: {
    getVongQuayMayManRequest: (state, action) => {
      state.isLoading = true;
    },
    getVongQuayMayManSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.result;
      state.dataLabel = action.payload.result.map(item => {
        if (item.diem != 0) {
          return item.diem;
        } else {
          return 'Voucher';
        }
      });
      console.log('LABEL', state.dataLabel);
    },
    getVongQuayMayManFail: (state, action) => {
      state.isLoading = false;
      ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },

    // chuan bi quay
    getChuanBiQuayRequest: (state, action) => {
      state.chuanBiQuay = true;
    },
    getChuanBiQuaySuccess: (state, action) => {
      console.log('QUAYYYYYYYYYYYYY', action.payload);
      state.chuanBiQuay = false;
      state.quayThanhCong = true;
    },
    getChuanBiQuayFail: (state, action) => {
      state.chuanBiQuay = false;
      state.quayThanhCong = false;
      ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },

    // nhan thuong
    getThemDiemChoUserRequest: (state, action) => {
      state.nhanThuong = true;
    },
    getThemDiemChoUserSuccess: (state, action) => {
      console.log('THEM DIEM THANH CONG: ', action.payload.message);
      state.nhanThuong = false;
      state.quayThanhCong = false;
      state.nhanThuongThanhCong = true;
    },
    getThemDiemChoUserFail: (state, action) => {
      state.nhanThuong = false;
      state.nhanThuongThanhCong = true;
      ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },

    // nhan thuong
    getNhanThuongThanhCong: (state, action) => {
      state.nhanThuongThanhCong = false;
    },
  },
});

export const {
  getVongQuayMayManFail,
  getVongQuayMayManRequest,
  getVongQuayMayManSuccess,
  //
  getChuanBiQuayFail,
  getChuanBiQuayRequest,
  getChuanBiQuaySuccess,

  //
  getThemDiemChoUserFail,
  getThemDiemChoUserRequest,
  getThemDiemChoUserSuccess,

  // nhan thuong
  getNhanThuongThanhCong,
} = vongQuayMayManSlice.actions;

export default vongQuayMayManSlice.reducer;
