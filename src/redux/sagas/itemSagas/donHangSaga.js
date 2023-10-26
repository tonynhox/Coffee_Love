import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getChiTietDonHangFail,
  getChiTietDonHangSuccess,
  getDonHangFail,
  getDonHangSuccess,
  getThayDoiFail,
  getThayDoiSuccess,
} from '../../reducers/slices/donHangSlice';
import instance from '../../../axios/instance';
import {trang_thai_don_hang} from '../../../utils/contanst';

function* fetchDonHangAsync(action) {
  try {
    const id_user = action.payload.id_user;
    const response = yield call(
      instance.get,
      `api/don-hang/lay-don-hang-theo-id-user/${id_user}`,
    );
    yield put(getDonHangSuccess(response.data));
  } catch (error) {
    yield put(getDonHangFail(error.message));
  }
}

function* fetchChiTietDonHangAsync(action) {
  try {
    const id_don_hang = action.payload.id_don_hang;
    const response = yield call(
      instance.get,
      `/api/don-hang/lay-don-hang/${id_don_hang}`,
    );
    console.log('donHang', response.data);
    yield put(getChiTietDonHangSuccess(response.data));
  } catch (error) {
    yield put(getChiTietDonHangFail(error.message));
  }
}

function* fetchThayDoiTrangThaiDonHangAsync(action) {
  try {
    const {id_don_hang, ma_trang_thai} = action.payload;
    const response = yield call(
      instance.post,
      `api/don-hang/cap-nhat-trang-thai`,
      {id_don_hang: id_don_hang, ma_trang_thai: ma_trang_thai},
    );
    console.log('response', response.data);
    yield put(getThayDoiSuccess(response.data));
  } catch (error) {
    yield put(getThayDoiFail(error.message));
  }
}

export function* donHangSaga() {
  yield takeLatest('don_hang/getDonHangRequest', fetchDonHangAsync);
  yield takeLatest(
    'don_hang/thayDoiTrangThaiDonHangRequest',
    fetchThayDoiTrangThaiDonHangAsync,
  );
}

export function* chiTietDonHangSaga() {
  yield takeLatest(
    'don_hang/getChiTietDonHangRequest',
    fetchChiTietDonHangAsync,
  );
}
