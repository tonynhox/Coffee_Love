import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import instance from '../../../axios/instance';
import {
  getProductAllSuccess,
  getProductFail,
} from '../../reducers/slices/productSlice';
import { getAddAddress, getAddAddressSuccess } from '../../reducers/slices/userSlice';
import { getAddressFail, getDeleteAddressSuccess, getEditAddressSuccess } from '../../reducers/slices/editAddressSlice';

function* WorkerEdit(action) {
  try {
    const {
      id_user,
      id_dia_chi,
      nguoi_nhan,
      address,
      so_dien_thoai,
      latitude,
      longitude,
      navigation,
    } = action.payload;

    const payload = {
      id_user: id_user,
      id_dia_chi: id_dia_chi,
      ten_dia_chi: address,
      so_dien_thoai: so_dien_thoai,
      so_nha: '',
      tinh: '',
      latitude: latitude,
      longitude: longitude,
      nguoi_nhan: nguoi_nhan,
    };

    console.log('payload ok --');
    //api
    const response = yield call(() =>
      instance.post('users/sua-dia-chi', payload),
    );
    
    if (response.data.trang_thai) {
      yield put(getAddAddressSuccess(response.data.dia_chi));
      yield put(getEditAddressSuccess());
      navigation.goBack();
    } else {
      yield put(getAddressFail(response.data.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getAddressFail('Lỗi kết nối'));
  }
}


function* WorkerDelete(action) {
  try {
    const {
      id_user,
      id_dia_chi,
      navigation,
    } = action.payload;

    const payload = {
      id_user: id_user,
      id_dia_chi: id_dia_chi,
    };

    console.log('payload ok --');
    //api
    const response = yield call(() =>
      instance.post('users/xoa-dia-chi', payload),
    );
    
    if (response.data.trang_thai) {
      yield put(getAddAddressSuccess(response.data.dia_chi));
      yield put(getDeleteAddressSuccess());
      navigation.goBack();
    } else {
      yield put(getAddressFail(response.data.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getAddressFail('Lỗi kết nối'));
  }
}

function* editAddressSaga() {
  yield takeLatest('editAddress/getDeleteAddressFetch', WorkerDelete);

  yield takeLatest('editAddress/getEditAddressFetch', WorkerEdit);
}

export default editAddressSaga;
