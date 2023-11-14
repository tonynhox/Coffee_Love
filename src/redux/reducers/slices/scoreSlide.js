import {createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
import Storage from '../../../utils/Storage';
//state
const initialState = {
  score: {},
  isLoading: false,
};

export const scoreSlide = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    getScoreFetch: state => {
      state.isLoading = true;
    },
    //action success
    getScoreSuccess: (state, action) => {
      state.score = action.payload.data;
      //   console.log('store của Score: ', state.score);
      state.isLoading = false;
    },

    getChangeScoreFetch: state => {
      state.isLoading = true;
    },
    //action success
    getChangeScoreSuccess: (state, action) => {
      // state.score = action.payload;
      //   console.log('store của Score: ', state.score);
      state.isLoading = false;
      ToastAndroid.show('Đổi Điểm Thành công', ToastAndroid.SHORT);
    },
    //error
    getScoreFail: (state, action) => {
      state.isLoading = false;
      console.log('action.payload score faile', action.payload);
      ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },
  },
});

export const {
  getScoreFetch,
  getScoreSuccess,
  getChangeScoreFetch,
  getChangeScoreSuccess,
  getScoreFail,
} = scoreSlide.actions;

export default scoreSlide.reducer;
