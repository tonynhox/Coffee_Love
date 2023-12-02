import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  data: [],
  isLoading: false,
};

export const newProductSlice = createSlice({
  name: 'newProducts',
  initialState,
  reducers: {
    getNewProduct: state => {
      console.log('getNewProduct');
      state.isLoading = true;
    },
    //action success
    getNewProductSuccess: (state, action) => {
      console.log('getNewProductSuccess', action.payload);
      state.data = action.payload;
      state.isLoading = false;
    },
    //action fail
    getNewProductFail: (state, action) => {
      console.log('getCategoryFail', action);
      state.isLoading = false;
    },
  },
});

export const {getNewProduct, getNewProductSuccess, getNewProductFail} =
newProductSlice.actions;

export default newProductSlice.reducer;
