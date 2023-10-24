import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    getFavoriteRequest: (state, action) => {},
    getFavoriteSuccess: (state, action) => {
      const onlyId = action.payload.result.map(item => ({_id: item._id}));
      console.log('FAVORITE', onlyId);
      state.data = onlyId;
    },
    getFavoriteFail: (state, action) => {
      state.favorites = [];
    },
  },
});

export const {getFavoriteFail, getFavoriteRequest, getFavoriteSuccess} =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
