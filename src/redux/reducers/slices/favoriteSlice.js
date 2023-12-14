import {createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
import {code_trang_thai_yeu_thich} from '../../../utils/contanst';

const initialState = {
  data: [],
  dataFavorite: [],
  trang_thai_yeu_thich: false,
  isLoading: true,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    getFavoriteRequest: (state, action) => {
      state.isLoading = true;
    },
    getFavoriteSuccess: (state, action) => {
      const onlyId = action.payload.result.map(item => ({_id: item._id}));
      console.log('FAVORITE', onlyId);
      state.data = onlyId;

      state.dataFavorite = action.payload.result.map(item => ({
        ...item,
        isLike: true,
      }));
      state.isLoading = false;
    },
    getFavoriteFail: (state, action) => {
      state.favorites = [];
      state.isLoading = false;
    },

    // đổi trạng thái yêu thích
    getChangeFavoriteRequest: (state, action) => {
      state.isLoading = true;
    },
    getChangeFavoriteSuccess: (state, action) => {
      console.log('FAVORITE CHANGE', action.payload.result);
      if (action.payload.result == code_trang_thai_yeu_thich.them_yeu_thich) {
        state.trang_thai_yeu_thich = true;
      } else {
        state.trang_thai_yeu_thich = false;
      }

      state.dataFavorite = state.dataFavorite.map(item => {
        if (item._id == action.payload.id_san_pham) {
          if (
            action.payload.result == code_trang_thai_yeu_thich.them_yeu_thich
          ) {
            return {...item, isLike: true};
          }
          return {...item, isLike: false};
        }
        return item;
      });

      state.isLoading = false;
    },
    getChangeFavoriteFail: (state, action) => {
      state.isLoading = false;
      ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },

    getAddFavoriteSuccess: (state, action) => {
      if (action.payload.result == code_trang_thai_yeu_thich.them_yeu_thich) {
        state.data = [...state.data, {_id: action.payload.id_san_pham}];
      } else {
        state.data = state.data.filter(
          item => item._id != action.payload.id_san_pham,
        );
      }
    },
    clearFavorite: (state, action) => {
      state.data = [];
    },
  },
});

export const {
  getFavoriteFail,
  getFavoriteRequest,
  getFavoriteSuccess,
  getChangeFavoriteFail,
  getChangeFavoriteRequest,
  getChangeFavoriteSuccess,
  clearFavorite,
  getAddFavoriteSuccess,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
