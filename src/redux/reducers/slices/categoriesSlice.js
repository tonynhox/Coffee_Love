import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
    data:{},
    isLoading: false,
};

export const categoriesSlice =  createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryFetch: (state) => {
        console.log('getCategoryFetch');
      state.isLoading = true;
    },
    //action success
    getCategorySuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    //action fail
    getCategoryFail: (state, action) => {
      console.log('getCategoryFail', action);
      state.isLoading = false;
    },
  },
});

export const {getCategoryFetch,getCategorySuccess,getCategoryFail} = categoriesSlice.actions;

export default categoriesSlice.reducer;
