import {takeLatest, put, call} from 'redux-saga/effects';
import instance from '../../../axios/instance';
import {
  getAddFavoriteSuccess,
  getChangeFavoriteFail,
  getChangeFavoriteSuccess,
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
    if (!response.data.status) {
      yield put(getFavoriteFail(response.data.message));
    } else {
      yield put(getFavoriteSuccess(response.data));
    }
  } catch (error) {
    yield put(getFavoriteFail(error.message));
  }
}

function* fetchChangeFavoriteSaga(action) {
  try {
    const {id_user, id_san_pham} = action.payload;

    const response = yield call(() =>
      instance.post(`api/favorite/them-danh-sach-yeu-thich`, {
        id_user,
        id_san_pham,
      }),
    );
    if (response.data == null) {
      yield put(getChangeFavoriteFail());
    } else {
      yield put(getChangeFavoriteSuccess(response.data));
      yield put(getAddFavoriteSuccess(response.data));
      // yield put(getFavoriteRequest({id_user}));
      // yield fetchFavoriteItemsSaga({payload: {id_user: id_user}});

    }
  } catch (error) {
    yield put(getChangeFavoriteFail());
  }
}

export default function* favoriteSaga() {
  yield takeLatest('favorite/getFavoriteRequest', fetchFavoriteItemsSaga);
  yield takeLatest(
    'favorite/getChangeFavoriteRequest',
    fetchChangeFavoriteSaga,
  );
}
