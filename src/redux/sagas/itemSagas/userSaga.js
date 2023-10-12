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

    //api
    const response = yield call(() => instance.post('users/dang-nhap-username', payload));
    
    if(response.data.trang_thai){
      yield put(LoginSuccess(response.data))
    }else{
      yield put(getUserFail(response.data.message))
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