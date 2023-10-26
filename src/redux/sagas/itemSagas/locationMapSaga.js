import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
//map
import instanceMap from '../../../APIMap/instanceMap';

import {key, type, radius} from '../../../APIMap/key';
import {
  getLocationMapFail,
  getLocationMapSuccess,
  getLocationStoreSuccess,
} from '../../reducers/slices/locationMapSlice';

//main
import instance from '../../../axios/instance';

function* WorkerGetMyLocation(action) {
  try {
    const {lng, lat} = action.payload;
    console.log('action.payload', lng, lat);

    const response = yield call(() =>
      instanceMap.get(`sdk/v2/geocode?key=${key}&location=${lat}, ${lng}`),
    );

    if (response.data.result.length > 0) {
      yield put(getLocationMapSuccess(response.data.result[0]));
      console.log('response.data', response.data.result[0]);
    } else {
      yield put(getLocationMapFail('Không tìm thấy địa chỉ'));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getLocationMapFail('Lỗi kết nối'));
  }
}

function* WorkerGetDSCN(action) {
  try {
    const response = yield call(() =>
      instance.get(`api/chi-nhanh/lay-danh-sach-chi-nhanh`),
    );

    if (response.data.status) {
      yield put(getLocationStoreSuccess(response.data.result));
      console.log('response.data', response.data.result);
    } else {
      yield put(getLocationMapFail('không lấy được danh sách chi nhánh'));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getLocationMapFail('Lỗi kết nối'));
  }
}

function* topOrderSaga() {
  // yield takeLatest('locationMap/getLocationMapFetch', WorkerGetMyLocation);

  yield takeLatest('locationMap/getLocationStoreFetch', WorkerGetDSCN);


}

export default topOrderSaga;
