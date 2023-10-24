import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  getVoucherSuccess,
  getVoucherFail,
} from '../../reducers/slices/voucherSlide';
import instance from '../../../axios/instance';
import {useSelector} from 'react-redux';

function* getVoucher(action) {
  try {
    const {id_user} = action.payload;
    console.log('>id user: ', id_user);
    const response = yield call(() =>
      instance.get('api/voucher/lay-danh-sach-voucher-user/' + id_user),
    );
    console.log('voucher: ', response.data);
    if (response.data.trang_thai) {
      yield put(getVoucherSuccess(response.data));
    } else {
      yield put(getVoucherFail(response.data.message));
    }
  } catch (error) {
    console.log('error get 1 user', error);
    yield put(getVoucherFail('Lỗi kết nối'));
  }
}

function* voucherSaga() {
  yield takeLatest('vouchers/getVoucherFetch', getVoucher);
}

export default voucherSaga;
