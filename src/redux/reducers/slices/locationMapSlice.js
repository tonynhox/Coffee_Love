import {createSlice} from '@reduxjs/toolkit';
import {sortStore} from '../../../components/others/map4D/tinhKhoangCach';

//state
const initialState = {
  data: {},
  isLoading: false,
  toaDoCuaHang: [],
  myLocation: {},
  routeCart: {},
  route: {},
  locationDefault: {},
};

export const locationMapSlice = createSlice({
  name: 'locationMap',
  initialState,
  reducers: {
    setLocationDefault: (state, action) => {
      state.locationDefault = action.payload;
    },
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
      const ham = () => {
        const sortStoreTemp = sortStore(
          {
            latitude: state?.myLocation.latitude,
            longitude: state?.myLocation.longitude,
          },
          action.payload,
        );

        state.toaDoCuaHang = sortStoreTemp;
        state.locationDefault = sortStoreTemp[0];
        state.isLoading = false;
      };

      ham();

      // // Check if state.myLocation exists
      // if (state.myLocation?.latitude && state.myLocation?.longitude) {
      //   // Your existing logic for sorting the stores
      // } else {
      //   // setTimeout(() => {
      //   //   ham();
      //   // }, 1000);
      // }
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
    getRouteCartFetch: state => {
      console.log('getroute');
    },
    setRouteCart: (state, action) => {
      state.routeCart = action.payload;
    },
  },
});

export const {
  setLocationDefault,
  getLocationMapFetch,
  getLocationMapSuccess,
  getLocationStoreFetch,
  getLocationStoreSuccess,
  setMyLocation,
  getLocationRouteFetch,
  getLocationRouteSuccess,
  getLocationMapFail,
  setRouteCart,
  getRouteCartFetch,
} = locationMapSlice.actions;

export default locationMapSlice.reducer;
