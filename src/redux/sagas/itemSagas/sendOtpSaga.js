import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getOtpSuccess,getUserFail, } from '../../reducers/slices/userSlice'
import instance from '../../../axios/instance'

function* sendOtp(action){
  try {
    const { email } = action.payload;
    const payload = {
      email: email,
    };
    
    //api
    const response = yield call(() => instance.post('users/gui-otp', payload));
    

    if(response.data.status){
      yield put(getOtpSuccess(response.data))
    }else{
      yield put(getUserFail(response.data.notification))
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'))
  }
}


function* sendOtpSaga(){
  yield takeLatest('users/getOtp', sendOtp)
}

export default sendOtpSaga