import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import instance from '../../../axios/instance';
import {
  getProductAllSuccess,
  getProductFail,
} from '../../reducers/slices/productSlice';

function* WorkerProduct(action) {
  try {
    // const { tai_khoan, mat_khau, navigation } = action.payload;
    // const payload = {
    //   tai_khoan: tai_khoan,
    //   mat_khau: mat_khau,
    // };
    // console.log('WorkerProduct');
    const response = yield call(() =>
      instance.get('api/san-pham/get-all-san-pham'),
    );
    if (response.data.success) {
      yield put(getProductAllSuccess(response.data.data));
    } else {
      yield put(getProductFail(response.data.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getProductFail('Lỗi kết nối'));
  }
}

function* productSaga() {
  yield takeLatest('products/getProductAllFetch', WorkerProduct);
}

export default productSaga;
