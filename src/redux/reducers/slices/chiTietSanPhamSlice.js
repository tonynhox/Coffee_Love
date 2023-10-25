import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  success: false,
  data: null,
};

const chiTietSanPhamSlice = createSlice({
  name: 'chi_tiet_san_pham',
  initialState,
  reducers: {
    getChiTietSanPhamRequest: (state, action) => {
      state.isLoading = true;
    },
    getChiTietSanPhamSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.data = action.payload.data;
    },
    getChiTietSanPhamFail: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.data = [];
      console.log('action.payload fail', action.payload);
    },
  },
});

export const {
  getChiTietSanPhamRequest,
  getChiTietSanPhamSuccess,
  getChiTietSanPhamFail,
} = chiTietSanPhamSlice.actions;

export default chiTietSanPhamSlice.reducer;
