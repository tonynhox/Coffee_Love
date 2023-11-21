import {createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
import Storage from '../../../utils/Storage';
//state
const initialState = {
  search: [],
  isLoading: true,
};

export const searchSlice = createSlice({
  name: 'searchs', //users/getUserFetch
  initialState,
  reducers: {
    getSearchFetch: state => {
      state.isLoading = true;
    },
    //action success
    getSearchSuccess: (state, action) => {
      state.search = action.payload.data;
      // console.log('data>>>>>>>> ', action.payload.data);
      state.isLoading = false;
    },
    //error
    getSearchFail: (state, action) => {
      state.isLoading = false;
      console.log('action.payload faile', action.payload);
      ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },
  },
});

export const {getSearchFetch, getSearchSuccess, getSearchFail} =
  searchSlice.actions;

export default searchSlice.reducer;
