import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  openBottomSheet: false,
  idSanPham: null,
  isVisibleModalCart: false,
  itemGioHang: null,
  listAddress: [],
  cameraChoose: null,
};

export const utilSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    //action user
    // setData: (state, action) => {
    //   state.dataFake = action.payload;
    // },
    setOpenBottomSheet: (state, action) => {
      state.openBottomSheet = action.payload;
    },
    setIDSanPham: (state, action) => {
      state.idSanPham = action.payload;
    },
    setIsVisibleModalCart: (state, action) => {
      state.isVisibleModalCart = action.payload;
    },
    setItemGioHang: (state, action) => {
      console.log('setItemGioHang', action.payload);
      state.itemGioHang = action.payload;
    },
    setListAddress: (state, action) => {
      state.listAddress = action.payload;
    },
    setCameraChoose: (state, action) => {
      state.cameraChoose = action.payload;
    },
  },
});

export const {
  setOpenBottomSheet,
  setIDSanPham,
  setIsVisibleModalCart,
  setItemGioHang,
  setListAddress,
  setCameraChoose
} = utilSlice.actions;

export default utilSlice.reducer;
