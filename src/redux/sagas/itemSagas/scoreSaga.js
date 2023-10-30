import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  getScoreSuccess,
  getChangeScoreSuccess,
  getScoreFail,
} from '../../reducers/slices/scoreSlide';
import instance from '../../../axios/instance';
import {changePass} from '../../reducers/slices/userSlice';

function* getScore(action) {
  try {
    const response = yield call(() =>
      instance.get('api/voucher/lay-danh-sach-voucher-doi-diem'),
    );
    // console.log('get Score: ', response.data);
    if (response.data.trang_thai) {
      yield put(getScoreSuccess(response.data));
    } else {
      yield put(getScoreFail(response.data.message));
    }
  } catch (error) {
    console.log('error get 1 user', error);
    yield put(getScoreFail('Lỗi kết nối'));
  }
}

function* ChangeScore(action) {
  try {
    const {id_user, so_diem, id_voucher, ten_voucher, gia_tri, ngay_ket_thuc} =
      action.payload;
    const payload = {
      id_user: id_user,
      so_diem: so_diem,
      id_voucher: id_voucher,
      ten_voucher: ten_voucher,
      gia_tri: gia_tri,
      ngay_ket_thuc: ngay_ket_thuc,
    };

    console.log("payload: ", payload);
    //api
    const response = yield call(() =>
      instance.post('api/voucher/doi-diem-thanh-voucher', payload),
    );
console.log("response: ", response.data);
    if (response.data.trang_thai) {
      yield put(getChangeScoreSuccess());
    } else {
      yield put(getScoreFail(response.data.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getScoreFail('Lỗi kết nối'));
  }
}

function* scoreSaga() {
  yield takeLatest('scores/getScoreFetch', getScore);
  yield takeLatest('scores/getChangeScoreFetch', ChangeScore);
}

export default scoreSaga;
