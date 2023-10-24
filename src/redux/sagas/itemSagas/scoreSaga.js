import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {getScoreSuccess, getScoreFail} from '../../reducers/slices/scoreSlide';
import instance from '../../../axios/instance';

function* getScore(action) {
  try {
    const response = yield call(() =>
      instance.get('api/voucher/lay-danh-sach-voucher-doi-diem'),
    );
    console.log('get Score: ', response.data);
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

function* scoreSaga() {
  yield takeLatest('scores/getScoreFetch', getScore);
}

export default scoreSaga;
