import {createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
//state
const initialState = {
  historyScore: null,
  isLoading: false,
};

export const historyScoreSlide = createSlice({
  name: 'historyScores',
  initialState,
  reducers: {
    getHistoryScoreFetch: state => {
      state.isLoading = true;
    },
    //action success
    getHistoryScoreSuccess: (state, action) => {
      state.historyScore = action.payload.data;
      // console.log('store của history score: ', state.historyScore);
      state.isLoading = false;
    },
    //error
    getHistoryScoreFail: (state, action) => {
      state.isLoading = false;
      console.log('action.payload history score faile', action.payload);
      ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },
  },
});

export const {
  getHistoryScoreFetch,
  getHistoryScoreSuccess,
  getHistoryScoreFail,
} = historyScoreSlide.actions;

export default historyScoreSlide.reducer;
