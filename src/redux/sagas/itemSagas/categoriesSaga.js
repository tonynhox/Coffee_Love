import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import instance from '../../../axios/instance';
import categoriesSlice, {
  getCategoryFail,
  getCategorySuccess,
} from '../../reducers/slices/categoriesSlice';

function* WorkerCategories(action) {
  try {
    // const { tai_khoan, mat_khau, navigation } = action.payload;
    // const payload = {
    //   tai_khoan: tai_khoan,
    //   mat_khau: mat_khau,
    // };

    const response = yield call(() =>
      instance.get('api/san-pham/tim-kiem-san-pham-theo-list-category'),
    );

    if (response.data.success) {
      yield put(getCategorySuccess(response.data.data));
    } else {
      yield put(getCategoryFail(response.data.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getCategoryFail('Lỗi kết nối'));
  }
}

function* categoriesSaga() {
  yield takeLatest('categories/getCategoryFetch', WorkerCategories);
}

export default categoriesSaga;
