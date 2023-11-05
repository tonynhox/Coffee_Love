import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
//map
import instanceMap from '../../../APIMap/instanceMap';

import {key, type, radius} from '../../../APIMap/key';
import {
  getLocationMapFail,
  getLocationMapSuccess,
  getLocationRouteSuccess,
  getLocationStoreSuccess,
  setRouteCart,
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
    console.log('địa chỉ nè');

    if (response.data.result.length > 0) {
      yield put(getLocationMapSuccess(response.data.result[0]));
    } else {
      yield put(getLocationMapFail('Không tìm thấy địa chỉ'));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getLocationMapFail('Lỗi kết nối'));
  }
}

function* WorkerGetRoute(action) {
  try {
    const {locationStart,locationEnd} = action.payload;
    console.log('action.payload', action.payload.locationEnd.latitude, action.payload.locationEnd.longitude);
    //http://api.map4d.vn/sdk/route?key=7f96dfb1ca09d1c81bcc5cbb87a52ec3&origin=10.86121, 
    //106.61948&destination=10.85372, 106.62589&mode=Motorcycle&language=vi&weighting=2&Optimize=True
    const response = yield call(() =>
      instanceMap.get(`sdk/route?key=${key}&origin=${locationStart.latitude}, ${locationStart.longitude}&destination=${locationEnd.latitude}, ${locationEnd.longitude}&mode=Motorcycle&language=vi&weighting=2&Optimize=True`),
    );

    if (response.data.result) {
      yield put(getLocationRouteSuccess(response.data));
    } else {
      console.log('response.data', response.data);
      yield put(getLocationMapFail('Không tìm thấy đường'));
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
function* WorkerCartRoute(action) {
  try {
    const {locationStart,locationEnd} = action.payload;
    console.log('action.payload', action.payload.locationEnd.latitude, action.payload.locationEnd.longitude);
    //http://api.map4d.vn/sdk/route?key=7f96dfb1ca09d1c81bcc5cbb87a52ec3&origin=10.86121, 
    //106.61948&destination=10.85372, 106.62589&mode=Motorcycle&language=vi&weighting=2&Optimize=True
    const response = yield call(() =>
      instanceMap.get(`sdk/route?key=${key}&origin=${locationStart.latitude}, ${locationStart.longitude}&destination=${locationEnd.latitude}, ${locationEnd.longitude}&mode=Motorcycle&language=vi&weighting=2&Optimize=True`),
    );

    if (response.data.result) {
      yield put(setRouteCart(response.data));
    } else {
      console.log('response.data', response.data);
      yield put(getLocationMapFail('Không tìm thấy đường'));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getLocationMapFail('Lỗi kết nối'));
  }
}

function* locationMapSaga() {
  yield takeLatest('locationMap/getLocationMapFetch', WorkerGetMyLocation);

  yield takeLatest('locationMap/getLocationStoreFetch', WorkerGetDSCN);

  yield takeLatest('locationMap/getLocationRouteFetch', WorkerGetRoute);

  yield takeLatest('locationMap/getRouteCartFetch', WorkerCartRoute);


}

export default locationMapSaga;
