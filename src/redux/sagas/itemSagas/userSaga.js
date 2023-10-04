import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getUserSuccess,getUserFail, } from '../../reducers/slices/userSlice'
import instance from '../../../axios/instance'

function* workGetTokenFetch(action){
  try {
    const { username, password } = action.payload;
    const payload = {
      username: username,
      password: password,
    };
    
    //api
    const response = yield call(() => instance.post('xxx', payload));
    

    if(response.data.result){
      yield put(getUserSuccess(response.data))
    }else{
      yield put(getUserFail('Sai tài khoản hoặc mật khẩu'))
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'))
  }
}


function* userSaga(){
  yield takeLatest('users/getUserFetch', workGetTokenFetch)
}

export default userSaga