import {createSlice} from '@reduxjs/toolkit';

const deviceTokenSlice = createSlice({
  name: 'deviceToken',
  initialState: {
    deviceToken: '',
  },
  reducers: {
    setDeviceToken: (state, action) => {
      state.deviceToken = action.payload;
    },
    clearDeviceToken: () => {
      state.deviceToken = '';
    },
  },
});

export const {setDeviceToken, clearDeviceToken} = deviceTokenSlice.actions;

export default deviceTokenSlice.reducer;
