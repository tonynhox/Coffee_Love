import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getChuanBiQuayFail,
  getChuanBiQuaySuccess,
  getThemDiemChoUserFail,
  getThemDiemChoUserSuccess,
  getVongQuayMayManFail,
  getVongQuayMayManSuccess,
} from '../../reducers/slices/vongQuayMayManSlice';
import instance from '../../../axios/instance';
import {
  getQuayThanhCongUser,
  getThemDiemFail,
} from '../../reducers/slices/userSlice';

function* fetchVongQuay() {
  try {
    const response = yield call(() =>
      instance.get('api/vong-quay/lay-danh-sach-vong-quay'),
    );
    if (response.data.status) {
      yield put(getVongQuayMayManSuccess(response.data));
    } else {
      yield put(getVongQuayMayManFail(response.data.message));
    }
  } catch (error) {
    yield put(getVongQuayMayManFail(error.message));
  }
}

function* fetchChuanBiQuay(action) {
  try {
    const {id_user} = action.payload;
    console.log('ID USER', id_user);
    const response = yield call(() =>
      instance.get(`api/vong-quay/su-dung-vong-quay/${id_user}`),
    );
    if (response.data.status) {
      yield put(getChuanBiQuaySuccess(response.data));
      yield put(getQuayThanhCongUser());
    } else {
      yield put(getChuanBiQuayFail(response.data.message));
    }
  } catch (error) {
    yield put(getChuanBiQuayFail(error.message));
  }
}

function* fetchThemDiemChoUser(action) {
  try {
    const payload = action.payload;
    console.log('PAYLOAD', payload);
    const response = yield call(() =>
      instance.post('api/vong-quay/them-voucher-user', payload),
    );
    if (response.data.status) {
      yield put(getThemDiemChoUserSuccess(response.data));
    } else {
      yield put(getThemDiemChoUserFail(response.data.message));
      yield put(getThemDiemFail());
    }
  } catch (error) {
    yield put(getThemDiemChoUserFail(error.message));
    yield put(getThemDiemFail());
  }
}

export default function* vongQuayMayManSaga() {
  yield takeLatest('vong_quay_may_man/getVongQuayMayManRequest', fetchVongQuay);
  yield takeLatest('vong_quay_may_man/getChuanBiQuayRequest', fetchChuanBiQuay);
  yield takeLatest(
    'vong_quay_may_man/getThemDiemChoUserRequest',
    fetchThemDiemChoUser,
  );
}
