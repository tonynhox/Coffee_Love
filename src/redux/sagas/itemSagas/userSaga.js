import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LoginSuccess,getUserFail,changePassSuccess, getOtpSuccess,SignUpSuccess,changePassOtpSuccess  } from '../../reducers/slices/userSlice'
import instance from '../../../axios/instance'
import Header from '../../../utils/Header';

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
    

    if(response.data.trang_thai){
      yield put(SignUpSuccess(response.data))
    }else{
      yield put(getUserFail(response.data.message))
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'))
  }
}

function* ChangePass(action) {
  try {
      const { id_user, mat_khau_cu, mat_khau_moi } = action.payload;
      const payload = {
          id_user: id_user,
          mat_khau_cu: mat_khau_cu,
          mat_khau_moi: mat_khau_moi,
      };

      //api
      const response = yield call(() => instance.post('users/doi-mat-khau', payload));


      if (response.data.trang_thai) {
          yield put(changePassSuccess(response.data))
      } else {
          yield put(getUserFail(response.data.message))
      }
  } catch (error) {
      console.log('error', error);
      yield put(getUserFail('Lỗi kết nối'))
  }
}

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

function* ChangePassOtp(action) {
  try {
      const { email, otp, mat_khau } = action.payload;
      const payload = {
          email: email,
          otp: otp,
          mat_khau: mat_khau,
      };

      //api
      const response = yield call(() => instance.post('users/doi-mat-khau-otp', payload));


      if (response.data.trang_thai) {
          yield put(changePassOtpSuccess(response.data))
      } else {
          yield put(getUserFail(response.data.message))
      }
  } catch (error) {
      console.log('error', error);
      yield put(getUserFail('Lỗi kết nối'))
  }
}

function* userSaga(){
  yield takeLatest('users/getUserFetch', Login)

  yield takeLatest('users/getRegister', SignUp)

  yield takeLatest('users/changePass', ChangePass)

  yield takeLatest('users/getOtp', sendOtp)

  yield takeLatest('users/changePassOtp', ChangePassOtp)

}

export default userSaga