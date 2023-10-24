import {takeLatest, put, call} from 'redux-saga/effects';
import instance from '../../../axios/instance';
import {
  getFavoriteFail,
  getFavoriteSuccess,
} from '../../reducers/slices/favoriteSlice';

function* fetchFavoriteItemsSaga(action) {
  try {
    const {id_user} = action.payload;
    console.log('id_user saga', id_user);
    const response = yield call(() =>
      instance.get(`api/favorite/lay-danh-sach-san-pham-yeu-thich/${id_user}`),
    );
    if (response.data == null) {
      yield put(getFavoriteFail());
    } else {
      yield put(getFavoriteSuccess(response.data));
    }
  } catch (error) {
    yield put(getFavoriteFail());
  }
}

export default function* favoriteSaga() {
  yield takeLatest('favorite/getFavoriteRequest', fetchFavoriteItemsSaga);
}
