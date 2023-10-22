import { takeLatest, call, put } from 'redux-saga/effects';
import { getDonHangFail, getDonHangSuccess } from '../../reducers/slices/donHangSlice';
import instance from '../../../axios/instance';

function* fetchDonHangAsync(action) {
    try {
      const id_user = action.payload.id_user;
      console.log('id_user', id_user);
      const response = yield call(instance.get, `api/don-hang/lay-don-hang-theo-id-user/${id_user}`);
      console.log('donHang', response.data);
      yield put(getDonHangSuccess(response.data));
    } catch (error) {
      yield put(getDonHangFail(error.message));
    }
  }

export function* donHangSaga() {
    yield takeLatest('don_hang/getDonHangRequest', fetchDonHangAsync);
}
