import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  data: null,
  dataFromMenu: null,
  isMenuLoading: true
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
      state.data = action.payload.data;
    },
    getChiTietSanPhamFail: (state, action) => {
      state.isLoading = false;
      state.data = [];
      console.log('action.payload fail', action.payload);
    },

    getChiTietSanPhamTuMenuRequest: (state, action) => {
      state.isMenuLoading = true;
    },
    getChiTietSanPhamTuMenuSuccess: (state, action) => {
      state.isMenuLoading = false;
      state.dataFromMenu = action.payload.data;
    },
    getChiTietSanPhamTuMenuFail: (state, action) => {
      state.isMenuLoading = false;
      state.dataFromMenu = [];
      console.log('action.payload fail', action.payload);
    },
  },
});

export const {
  getChiTietSanPhamRequest,
  getChiTietSanPhamSuccess,
  getChiTietSanPhamFail,
  getChiTietSanPhamTuMenuRequest,
  getChiTietSanPhamTuMenuSuccess,
  getChiTietSanPhamTuMenuFail,
} = chiTietSanPhamSlice.actions;

export default chiTietSanPhamSlice.reducer;
