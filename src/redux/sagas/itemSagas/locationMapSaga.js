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
    //sdk/v2/geocode?key=7f96dfb1ca09d1c81bcc5cbb87a52ec3&location=10.843000038038689, 106.65389754447622

    const response = yield call(() =>
      instanceMap.get(
        // `sdk/place/nearby-search?key=${key}&location=${lat}, ${lng}&radius=${radius}&types=${type}`,
        `sdk/v2/geocode?key=${key}&location=${lat}, ${lng}`,
      ),
    );

  //   {
  //     "result": [
  //         {
  //             "addressComponents": [
  //                 {
  //                     "types": [
  //                         "housenumber"
  //                     ],
  //                     "name": "184/1"
  //                 },
  //                 {
  //                     "types": [
  //                         "street"
  //                     ],
  //                     "name": "Nguyễn Văn Khối"
  //                 },
  //                 {
  //                     "types": [
  //                         "admin_level_4"
  //                     ],
  //                     "name": "Phường 9"
  //                 },
  //                 {
  //                     "types": [
  //                         "admin_level_3"
  //                     ],
  //                     "name": "Quận Gò Vấp"
  //                 },
  //                 {
  //                     "types": [
  //                         "admin_level_2"
  //                     ],
  //                     "name": "Thành phố Hồ Chí Minh"
  //                 },
  //                 {
  //                     "types": [
  //                         "admin_level_1"
  //                     ],
  //                     "name": "Việt Nam"
  //                 }
  //             ],
  //             "id": "605a67720618007e000fa4f1",
  //             "name": "184/1 Nguyễn Văn Khối, P 9 , Q Gò Vấp",
  //             "address": "184/1 Nguyễn Văn Khối, Phường 9, Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam",
  //             "location": {
  //                 "lng": 106.65389754447622,
  //                 "lat": 10.843000038038689
  //             },
  //             "types": [
  //                 "establishment",
  //                 "other",
  //                 "industrial_zone",
  //                 "travel_agency",
  //                 "electronics_store"
  //             ]
  //         }
  //     ],
  //     "code": "ok"
  // }
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
