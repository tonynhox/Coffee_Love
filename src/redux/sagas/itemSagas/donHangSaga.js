import { takeLatest, call, put } from 'redux-saga/effects';
import { getChiTietDonHangFail, getChiTietDonHangSuccess, getDonHangFail, getDonHangSuccess } from '../../reducers/slices/donHangSlice';
import instance from '../../../axios/instance';

function* fetchDonHangAsync(action) {
    try {
      const id_user = action.payload.id_user;
      const response = yield call(instance.get, `api/don-hang/lay-don-hang-theo-id-user/${id_user}`);
      console.log('donHang', response.data);
      yield put(getDonHangSuccess(response.data));
    } catch (error) {
      yield put(getDonHangFail(error.message));
    }
  }

 function* fetchChiTietDonHangAsync(action) {
    try {
      const id_don_hang = action.payload.id_don_hang;
      const response = yield call(instance.get, `/api/don-hang/lay-don-hang/${id_don_hang}`);
      console.log('donHang', response.data);
      yield put(getChiTietDonHangSuccess(response.data));
    } catch (error) {
      yield put(getChiTietDonHangFail(error.message));
    }
  } 

export function* donHangSaga() {
    yield takeLatest('don_hang/getDonHangRequest', fetchDonHangAsync);
}

export function* chiTietDonHangSaga() {
    yield takeLatest('don_hang/getChiTietDonHangRequest', fetchChiTietDonHangAsync);
}
