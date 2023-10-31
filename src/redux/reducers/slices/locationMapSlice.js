import {createSlice} from '@reduxjs/toolkit';

//state
const initialState = {
  data: {},
  isLoading: false,
  toaDoCuaHang: {},
  myLocation: {},
  route: {},
};

export const locationMapSlice = createSlice({
  name: 'locationMap',
  initialState,
  reducers: {
    getLocationMapFetch: state => {
      console.log('getLocationMapFetch');
      state.isLoading = true;
    },
    //action success
    getLocationMapSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      console.log('getLocationMapSuccess');
    },
    getLocationStoreFetch: state => {
      console.log('getLocationMapFetch');
      state.isLoading = true;
    },

    getLocationStoreSuccess: (state, action) => {
      state.toaDoCuaHang = action.payload;
      state.isLoading = false;
      console.log('getToaDoCuaHangSuccess');
    },
    setMyLocation: (state, action) => {
      state.myLocation = action.payload;
    },
    //logation route
    getLocationRouteFetch: state => {
      console.log('getroute');
      state.isLoading = true;
    },
    //action success
    getLocationRouteSuccess: (state, action) => {
      state.route = action.payload;
      state.isLoading = false;
      console.log('get route success');
    },
    //action fail
    getLocationMapFail: (state, action) => {
      console.log('getLocationMapFail', action);
      state.isLoading = false;
    },
  },
});

export const {
  getLocationMapFetch,
  getLocationMapSuccess,
  getLocationStoreFetch,
  getLocationStoreSuccess,
  setMyLocation,
  getLocationRouteFetch,
  getLocationRouteSuccess,
  getLocationMapFail,
} = locationMapSlice.actions;

export default locationMapSlice.reducer;
