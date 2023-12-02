import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import instance from '../../../axios/instance';
import { getNewProductFail, getNewProductSuccess } from '../../reducers/slices/newProductSlice';

//sanpham mới
function* getNewProduct(action) {
    try {
      console.log('response NewProduct');
  
      const response = yield call(() =>
        instance.get('api/san-pham/danh-sach-san-pham-moi'),
      );
      if (response.data.success) {
        yield put(getNewProductSuccess(response.data.data));
      } else {
        yield put(getNewProductFail(response.data.message));
      }
    } catch (error) {
      console.log('error NewProduct', error);
      yield put(getNewProductFail('Lỗi kết nối'));
    }
  }

function* newProductSaga() {
  yield takeLatest('newProducts/getNewProduct', getNewProduct);
}

export default newProductSaga;
