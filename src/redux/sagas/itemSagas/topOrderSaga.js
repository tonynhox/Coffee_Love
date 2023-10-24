import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import instance from '../../../axios/instance';
import {
  getTopOrderFail,
  getTopOrderSuccess,
} from '../../reducers/slices/topOrderSlice';

function* WorkerTopOrder(action) {
  try {
    // const { tai_khoan, mat_khau, navigation } = action.payload;
    // const payload = {
    //   tai_khoan: tai_khoan,
    //   mat_khau: mat_khau,
    // };
    console.log('WorkerTopOrder');
    const response = yield call(() =>
      instance.get('api/san-pham/danh-sach-san-pham-danh-gia-tot-nhat'),
    );
    if (response.data.success) {
      yield put(getTopOrderSuccess(response.data.data));
    } else {
      yield put(getTopOrderFail(response.data.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getTopOrderFail('Lỗi kết nối'));
  }
}

function* topOrderSaga() {
  yield takeLatest('topOrders/getTopOrderFetch', WorkerTopOrder);
}

export default topOrderSaga;
