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
    const response = yield call(() => instance.post('http://tempcoffeelove.huyta.codes/users/dang-ky-username', payload));
    

    if(response.data.result){
      yield put(SignUpSuccess(response.data))
    }else{
      yield put(getUserFail('Sai tài khoản hoặc mật khẩu'))
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'))
  }
}


function* SignUpSaga(){
  yield takeLatest('users/getUserFetch', SignUp)
}

export default SignUpSaga