import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import instance from '../../../axios/instance';
import { getDailyProductFail, getDailyProductSuccess } from '../../reducers/slices/dailyProductSlice';


function* getDailyProduct(action) {
  try {
    const response = yield call(() =>
      instance.get('api/san-pham/danh-sach-san-pham-giam-gia'),
    );
    console.log('response dailyProduct', response);
    if (response.data.success) {
      yield put(getDailyProductSuccess(response.data.data));
    } else {
      yield put(getDailyProductFail(response.data.message));
    }
  } catch (error) {
    console.log('error dailyProduct', error);
    yield put(getDailyProductFail('Lỗi kết nối'));
  }
}

//sanpham mới
// function* getDailyProduct(action) {
//     try {
//       console.log('response dailyProduct');
  
//       const response = yield call(() =>
//         instance.get('api/san-pham/danh-sach-san-pham-moi'),
//       );
//       if (response.data.success) {
//         yield put(getDailyProductSuccess(response.data.data));
//       } else {
//         yield put(getDailyProductFail(response.data.message));
//       }
//     } catch (error) {
//       console.log('error dailyProduct', error);
//       yield put(getDailyProductFail('Lỗi kết nối'));
//     }
//   }

function* dailyProductSaga() {
  yield takeLatest('dailyProducts/getDailyProduct', getDailyProduct);
}

export default dailyProductSaga;
