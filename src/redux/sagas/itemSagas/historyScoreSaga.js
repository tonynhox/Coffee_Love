import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import instance from '../../../axios/instance';
import { getHistoryScoreFail, getHistoryScoreSuccess } from '../../reducers/slices/historyScoreSlide';

function* HistoryScore(action) {
  try {
    const {id_user} = action.payload;
    const payload = {
      id_user: id_user,
    };

    // console.log("id user>>>>>>>>>>>>>>: ", id_user);
    const response = yield call(() =>
      instance.post('users/lich-su-dung-diem', payload),
    );

    // console.log('historyScore: ', response.data);

    if (response.data.trang_thai) {
      yield put(getHistoryScoreSuccess(response.data));
    } else {
      yield put(getHistoryScoreFail('Lấy dữ liệu thất bại'));
    }
  } catch (error) {
    yield put(getHistoryScoreFail('Lỗi kết nối'));
  }
}

function* historyScoreSaga() {
  yield takeLatest('historyScores/getHistoryScoreFetch', HistoryScore);
}

export default historyScoreSaga;
