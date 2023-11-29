import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  getSearchSuccess,
  getSearchFail,
} from '../../reducers/slices/searchSlice';
import instance from '../../../axios/instance';
import {useSelector} from 'react-redux';

function* Search(action) {
  try {
    const {item} = action.payload.search;
    const response = yield call(() =>
      instance.get(`api/san-pham/tim-kiem-san-pham/${action.payload.search}`),
    );
    if (response.data.success) {
      // navigation.navigate('SearchSuccess', {ten_san_pham: item});
      yield put(getSearchSuccess(response.data));
    } else {
      yield put(getSearchFail(response.data.message));
    }
  } catch (error) {
    console.log('error get 1 user', error);
    yield put(getSearchFail('Lỗi kết nối'));
  }
}
function* searchSaga() {
  yield takeLatest('searchs/getSearchFetch', Search);
}

export default searchSaga;
