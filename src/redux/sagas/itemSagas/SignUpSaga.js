import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {SignUpSuccess, getUserFail} from '../../reducers/slices/userSlice';
import instance from '../../../axios/instance';

function* SignUp(action) {
  console.log("SIGN UP: ", action.payload)
  try {
    const {tai_khoan, mat_khau, ho_ten, sdt, email} = action.payload;
    const payload = {
      tai_khoan: tai_khoan,
      mat_khau: mat_khau,
      ho_ten: ho_ten,
      so_dien_thoai: sdt,
      email: email,
    };

    console.log("PAYLOASD: ", payload)

    //api
    const response = yield call(() =>
      instance.post('users/dang-ky-username', payload),
    );

    if(response.data.trang_thai){
      yield put(SignUpSuccess(response.data))
    }else{
      yield put(getUserFail(response.data.message))
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail(error));
  }
}

function* SignUpSaga() {
  yield takeLatest('users/getRegister', SignUp);
}

export default SignUpSaga;
