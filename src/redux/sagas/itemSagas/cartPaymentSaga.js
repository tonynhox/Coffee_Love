import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import instance from '../../../axios/instance';
import {
  getAddCartPaymentSuccess,
  getCartPaymentFail,
  getCartPaymentSuccess,
  getDeleteCartSuccess,
  getPaymentSuccess,
} from '../../reducers/slices/cartPaymentSlice';
import { setOpenBottomSheet } from '../../reducers/slices/utilSlice';
import { setUseVoucher } from '../../reducers/slices/voucherSlide';

function* WorkercartPayment(action) {
  try {

    const {id_user} = action.payload;
    const response = yield call(() =>
      instance.get(`api/gio-hang/lay-danh-sach-gio-hang/${id_user}`),
    );
    const result = response.data;
    if (result.status) {
      yield put(getCartPaymentSuccess(result.result.san_pham));
    } else {
      yield put(getCartPaymentFail(result.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getCartPaymentFail('Lỗi kết nối'));
  }
}

function* WorkerAddCartPayment(action) {
  try {
    const {data,navigation,dispatch} = action.payload;

    const response = yield call(() =>
      instance.post(`api/gio-hang/them-gio-hang`,data),
    );
    const result = response.data;
    if (result.status) {
      if(navigation){
        navigation.goBack();
      }else{
        dispatch(setOpenBottomSheet(false));
      }
      
      yield put(getAddCartPaymentSuccess(result.result.san_pham));
    } else {
      yield put(getCartPaymentFail(result.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getCartPaymentFail('Lỗi kết nối'));
  }
}

function* WorkerUpdateCartPayment(action) {
  try {
    const {data,navigation,dispatch} = action.payload;

    const response = yield call(() =>
      instance.post(`api/gio-hang/cap-nhat-gio-hang`,data),
    );
    const result = response.data;
    if (result.status) {
      if(navigation){
        navigation.goBack();
      }else{
        dispatch(setOpenBottomSheet(false));
      }
      
      yield put(getAddCartPaymentSuccess(result.result.san_pham));
    } else {
      yield put(getCartPaymentFail(result.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getCartPaymentFail('Lỗi kết nối'));
  }
}

function* WorkerDeleteCartPayment(action) {
  try {
    const {data,navigation,dispatch} = action.payload;

    const response = yield call(() =>
      instance.post(`api/gio-hang/xoa-gio-hang`,data),
    );
    const result = response.data;
    if (result.status) {
      if(navigation){
        navigation.goBack();
      }else{
        dispatch(setOpenBottomSheet(false));
      }
      yield WorkercartPayment({payload:{id_user: data.id_user}})

      
    } else {
      yield put(getCartPaymentFail(result.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getCartPaymentFail('Lỗi kết nối'));
  }
}

function* WorkerPayment(action) {
  try {
    const {navigation,id_user,dispatch} = action.payload;

    const response = yield call(() =>
      instance.post(`api/don-hang/them-don-hang`,action.payload),
    );
    const result = response.data;
    if (result.status) {
      yield put(getPaymentSuccess());
      yield DeleteAllCart({payload: {id_user: id_user}});
      dispatch(setUseVoucher(null));
      navigation.navigate('OrderDetail',{id_don_hang: result.result._id});
    } else {
      yield put(getCartPaymentFail(result.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getCartPaymentFail('Lỗi kết nối'));
  }
}

function* DeleteAllCart(action) {
  try {
    const {id_user} = action.payload;
    const response = yield call(() =>
      instance.get(`https://coffee.thaihoa.software/api/gio-hang/xoa-gio-hang/${id_user}`),
    );
    const result = response.data;
    if (result.status) {
      yield put(getDeleteCartSuccess());
      
    } 
  } catch (error) {
    console.log('error', error);
    yield put(getCartPaymentFail('Lỗi kết nối'));
  }
}


function* cartPaymentSaga() {
  yield takeEvery('cartPayment/getCartPaymentFetch', WorkercartPayment);

  yield takeEvery('cartPayment/getAddCartPaymentFetch', WorkerAddCartPayment);

  yield takeEvery('cartPayment/getUpdateCartPaymentFetch', WorkerUpdateCartPayment);

  yield takeEvery('cartPayment/getDeleteCartPaymentFetch', WorkerDeleteCartPayment);

  yield takeEvery('cartPayment/getPaymentFetch', WorkerPayment);


}

export default cartPaymentSaga;
