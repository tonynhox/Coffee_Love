import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  data: {},
  isLoading: false,
};

export const topOrderSlice = createSlice({
  name: 'topOrders',
  initialState,
  reducers: {
    getTopOrderFetch: state => {
      console.log('getTopOrderFetch');
      state.isLoading = true;
    },
    //action success
    getTopOrderSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      console.log('getTopOrderSuccess');
    },
    //action fail
    getTopOrderFail: (state, action) => {
      console.log('getTopOrderFail', action);
      state.isLoading = false;
    },
  },
});

export const {getTopOrderFetch, getTopOrderSuccess, getTopOrderFail} =
  topOrderSlice.actions;

export default topOrderSlice.reducer;
