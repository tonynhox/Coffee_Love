import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
};
const muaSanPhamSlice = createSlice({
  name: 'mua_san_pham',
  initialState,
  reducers: {
    setSanPham: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setSanPham} = muaSanPhamSlice.actions;

export default muaSanPhamSlice.reducer;
