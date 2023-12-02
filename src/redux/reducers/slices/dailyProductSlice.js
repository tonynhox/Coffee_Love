import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  data: [],
  isLoading: false,
};

export const dailyProductSlice = createSlice({
  name: 'dailyProducts',
  initialState,
  reducers: {
    getDailyProduct: state => {
      console.log('getDailyProduct');
      state.isLoading = true;
    },
    //action success
    getDailyProductSuccess: (state, action) => {
      console.log('getDailyProductSuccess', action.payload);
      state.data = action.payload;
      state.isLoading = false;
    },
    //action fail
    getDailyProductFail: (state, action) => {
      console.log('getCategoryFail', action);
      state.isLoading = false;
    },
  },
});

export const {getDailyProduct, getDailyProductSuccess, getDailyProductFail} =
dailyProductSlice.actions;

export default dailyProductSlice.reducer;
