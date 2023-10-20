import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import instance from '../../../axios/instance'
import { getCartPaymentFail, getCartPaymentSuccess } from '../../reducers/slices/cartPaymentSlice';
import { useSelector } from 'react-redux';



function* WorkercartPayment(action){
  try {
    const { id_user } = action.payload;
    // const payload = {
    //   tai_khoan: tai_khoan,
    //   mat_khau: mat_khau,
    // };
    // const id = useSelector(state => state.users.id_user);
    // console.log('id_user', id);
    const response = yield call(() => instance.get('api/gio-hang/lay-danh-sach-gio-hang/'+id_user));
    const result= response.data;
    console.log('result', result.result);
    if(result.status){
      yield put(getCartPaymentSuccess(result.result.san_pham))
    }else{
      yield put(getCartPaymentFail(result.message))
    }
  } catch (error) {
    console.log('error', error);
    yield put(getCartPaymentFail('Lỗi kết nối'))
  }
}

function* cartPaymentSaga(){
  yield takeLatest('cartPayment/getCartPaymentFetch', WorkercartPayment)

}

export default cartPaymentSaga