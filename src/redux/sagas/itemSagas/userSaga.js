import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LoginSuccess,getUserFail, } from '../../reducers/slices/userSlice'
import instance from '../../../axios/instance'

function* Login(action){
  try {
    const { tai_khoan, mat_khau } = action.payload;
    const payload = {
      tai_khoan: tai_khoan,
      mat_khau: mat_khau,
    };
    console.log("ENDPOINT:", `${instance} /users/dang-nhap-username`)
    console.log("USER:", payload)
    //api
    const response = yield call(() => instance.post('/users/dang-nhap-username', payload));
    
    if(response.data.result){
      yield put(LoginSuccess(response.data))
    }else{
      yield put(getUserFail('Sai tài khoản hoặc mật khẩu'))
    }



    
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'))
  }
}


function* userSaga(){
  yield takeLatest('users/getUserFetch', Login)
}

export default userSaga