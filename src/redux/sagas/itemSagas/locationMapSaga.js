import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import instanceMap from '../../../APIMap/instanceMap';

import {key,type,radius} from '../../../APIMap/key';
import { getLocationMapFail, getLocationMapSuccess } from '../../reducers/slices/locationMap';
function* WorkerTopOrder(action) {
  try {
    const { lng,lat } = action.payload;
    console.log('action.payload', lng,lat);
    // const payload = {
    //   tai_khoan: tai_khoan,
    //   mat_khau: mat_khau,
    // };
    //http://api.map4d.vn/sdk/place/nearby-search?key=7f96dfb1ca09d1c81bcc5cbb87a52ec3&location=10.861133,
    //106.619505&radius=50&types=point
    //sdk/place/nearby-search?key=${key}&location=37.42342342342342, -122.08395287867832&radius=50&types=point
    const response = yield call(() =>
      instanceMap.get(
        `sdk/place/nearby-search?key=${key}&location=${lat}, ${lng}&radius=${radius}&types=${type}`,
      ),
    );

    // {
    //     "id": "6478d160c30317a5588346bc",
    //     "name": "88 Tô Ký",
    //     "address": "88 Tô Ký, Phường Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh",
    //     "location": {
    //         "lng": 106.61930117358028,
    //         "lat": 10.861039998649108
    //     },
    //     "types": [
    //         "point"
    //     ]
    // },
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

function* topOrderSaga() {
  yield takeLatest('locationMap/getLocationMapFetch', WorkerTopOrder);
}

export default topOrderSaga;
