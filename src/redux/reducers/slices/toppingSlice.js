import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  data: [],
};

const toppingSlice = createSlice({
  name: 'topping',
  initialState,
  reducers: {
    getDataToppingRequest: state => {
      state.isLoading = true;
    },
    getDataToppingSuccess: (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    getDataToppingFail: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {
  getDataToppingFail,
  getDataToppingRequest,
  getDataToppingSuccess,
} = toppingSlice.actions;

export default toppingSlice.reducer;
