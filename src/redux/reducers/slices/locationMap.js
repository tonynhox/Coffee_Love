import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
    data:{},
    isLoading: false,
};

export const locationMapSlice =  createSlice({
  name: 'locationMap',
  initialState,
  reducers: {
    getLocationMapFetch: (state) => {
        console.log('getLocationMapFetch');
      state.isLoading = true;
    },
    //action success
    getLocationMapSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      console.log('getLocationMapSuccess');
    },
    //action fail
    getLocationMapFail: (state, action) => {
      console.log('getLocationMapFail', action);
      state.isLoading = false;
    },
  },
});

export const {getLocationMapFetch,getLocationMapSuccess,getLocationMapFail} = locationMapSlice.actions;

export default locationMapSlice.reducer;
