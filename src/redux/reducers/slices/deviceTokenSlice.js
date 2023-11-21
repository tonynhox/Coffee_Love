import {createSlice} from '@reduxjs/toolkit';

const deviceTokenSlice = createSlice({
  name: 'device_token',
  initialState: {
    deviceToken: 'none',
  },
  reducers: {
    setCurrentDeviceToken: (state, action) => {
      console.log("SET CURRENT TOKE: ", action.payload)
      state.deviceToken = action.payload;
    },

    getDeviceTokenRequest: (state, action) => {
      console.log("DEVICE REQUEST")
    },
    getDeviceTokenSuccess: (state, action) => {
      console.log('NEW TOKEN DEVICE: ', action.payload);
      state.deviceToken = action.payload;
    },
    getDeviceTokenFail: (action, payload) => {
      console.log('FAIL TO SET NEW TOKEN DEVICE', action.payload);
    },
  },
});

export const {
  setCurrentDeviceToken,
  getDeviceTokenFail,
  getDeviceTokenRequest,
  getDeviceTokenSuccess,
} = deviceTokenSlice.actions;

export default deviceTokenSlice.reducer;
