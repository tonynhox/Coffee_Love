import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SignUpSuccess,getUserFail, } from '../../reducers/slices/userSlice'
import instance from '../../../axios/instance'

function* SignUp(action){
  try {
    const { tai_khoan, mat_khau, ho_ten } = action.payload;
    const payload = {
      tai_khoan: tai_khoan,
      mat_khau: mat_khau,
      ho_ten: ho_ten,
    };
    
    //api
    const response = yield call(() => instance.post('users/dang-ky-username', payload));
    

    console.log('response', response.data);
    // if(response.data.trang_thai){
    //   yield put(SignUpSuccess(response.data))
    // }else{
    //   yield put(getUserFail(response.data.message))
    // }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'))
  }
}


function* SignUpSaga(){
  yield takeLatest('users/getRegister', SignUp)
}

export default SignUpSaga