import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  data: [],
  isLoading: false,
};

export const editAddressSlice = createSlice({
  name: 'editAddress',
  initialState,
  reducers: {
    getEditAddressFetch: state => {
      console.log('getEditAddressFetch');
      state.isLoading = true;
    },
    //action success
    getEditAddressSuccess: (state, action) => {
    //   state.data = action.payload;
      state.isLoading = false;
    },
    getDeleteAddressFetch: state => {
      console.log('getDeleteAddressFetch');
      state.isLoading = true;
    },
    //action success
    getDeleteAddressSuccess: (state, action) => {
    //   state.data = action.payload;
      state.isLoading = false;
    },
    //action fail
    getAddressFail: (state, action) => {
      console.log('getEditAddressFail', action);
      state.isLoading = false;
    },
  },
});

export const {getEditAddressFetch, getEditAddressSuccess,getDeleteAddressFetch,getDeleteAddressSuccess, getAddressFail} =
  editAddressSlice.actions;

export default editAddressSlice.reducer;
