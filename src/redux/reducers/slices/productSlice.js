import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  data: [],
  isLoading: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductAllFetch: state => {
      console.log('getProductFetch');
      state.isLoading = true;
    },
    //action success
    getProductAllSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    //action fail
    getProductFail: (state, action) => {
      console.log('getProductFail', action);
      state.isLoading = false;
    },
  },
});

export const {getProductAllFetch, getProductAllSuccess, getProductFail} =
  productSlice.actions;

export default productSlice.reducer;
