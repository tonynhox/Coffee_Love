import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  LoginSuccess,
  getUserFail,
  changePassSuccess,
  getOtpSuccess,
  checkOtpSuccess,
  SignUpSuccess,
  changePassOtpSuccess,
} from '../../reducers/slices/userSlice';
import instance from '../../../axios/instance';
import Header from '../../../utils/Header';
import { useNavigation } from '@react-navigation/native';
import Storage from '../../../utils/Storage';

function* Login(action) {
  try {
    const {tai_khoan, mat_khau, navigation} = action.payload;
    const payload = {
      tai_khoan: tai_khoan,
      mat_khau: mat_khau,
    };

    const response = yield call(() => instance.post('users/dang-nhap-username', payload));
    
    if(response.data.trang_thai){
      //lưu local
      Storage.setToken(response.data.data.token);
      Storage.setItem('id_user',response.data.data.id_user);

      // yield put(LoginSuccess(response.data))
      yield WorkerUser({payload:{id_user:response.data.data.id_user}})
      yield navigation.navigate('MainNavigation')
    }else{
      yield put(getUserFail(response.data.message))
    }
  } catch (error) {
    console.log('error login', error);
    yield put(getUserFail('Lỗi kết nối'))
  }
}

function* WorkerUser(action){
  try {
    const { id_user} = action.payload;
    // console.log('id_user ne',id_user);

    const response = yield call(() => instance.get('users/lay-thong-tin-user/'+id_user));
    
    if(response.data.trang_thai){
      yield put(LoginSuccess(response.data))
    }else{
      yield put(getUserFail(response.data.message))
    }
    
  } catch (error) {
    console.log('error get 1 user', error);
    yield put(getUserFail('Lỗi kết nối'))
  }
}

function* SignUp(action) {
  try {
    const {tai_khoan, mat_khau, ho_ten, navigation} = action.payload;
    const payload = {
      tai_khoan: tai_khoan,
      mat_khau: mat_khau,
      ho_ten: ho_ten,
    };

    //api
    const response = yield call(() =>
      instance.post('users/dang-ky-username', payload),
    );

    if (response.data.trang_thai) {
      yield navigation.navigate('Login');
      yield put(SignUpSuccess());
    } else {
      yield put(getUserFail(response.data.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'));
  }
}

function* sendOtp(action) {
  try {
    const {email, navigation} = action.payload;
    const payload = {
      email: email,
    };

    //api
    const response = yield call(() => instance.post('users/gui-otp', payload));

    if (response.data.status == 1) {
      yield put(getOtpSuccess());
      yield navigation.navigate('Otp', {email: email});
    } else {
      yield put(getUserFail(response.data.notification));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'));
  }
}

function* WorkCheckOTP(action) {
  try {
    console.log('ok');

    const {email, otp, navigation} = action.payload;
    const payload = {
      email: email,
      otp: otp,
    };

    //api
    const response = yield call(() =>
      instance.post('users/kiem-tra-otp', payload),
    );

    if (response.data.status == 1) {
      yield put(checkOtpSuccess());

      yield navigation.navigate('Newpassword', {email: email, otp: otp});
    } else {
      yield put(getUserFail(response.data.notification));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'));
  }
}

function* ChangePassOtp(action) {
  try {
    const {email, otp, mat_khau, navigation} = action.payload;
    const payload = {
      email: email,
      otp: otp,
      mat_khau: mat_khau,
    };

    //api
    const response = yield call(() =>
      instance.post('users/doi-mat-khau-otp', payload),
    );

    if (response.data.trang_thai) {
      yield put(changePassOtpSuccess());
      yield navigation.navigate('Login');
    } else {
      yield put(getUserFail(response.data.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'));
  }
}

function* ChangePass(action) {
  try {
    const {id_user, mat_khau_cu, mat_khau_moi, navigation} = action.payload;
    const payload = {
      id_user: id_user,
      mat_khau_cu: mat_khau_cu,
      mat_khau_moi: mat_khau_moi,
    };
      // console.log("..: ", id_user, mat_khau_cu, mat_khau_moi)
    //api
    const response = yield call(() =>
      instance.post('users/doi-mat-khau', payload),
    );

    if (response.data.trang_thai) {
      yield put(changePassSuccess());
      yield navigation.navigate('MainNavigation');
    } else {
      yield put(getUserFail(response.data.message));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserFail('Lỗi kết nối'));
  }
}

function* userSaga() {
  yield takeLatest('users/getUserFetch', Login);

  yield takeLatest('users/getOneUserFetch', WorkerUser)


  yield takeLatest('users/getRegister', SignUp)

  yield takeLatest('users/getOtp', sendOtp);

  yield takeLatest('users/checkOtp', WorkCheckOTP);

  yield takeLatest('users/changePassOtp', ChangePassOtp);

  // trong main
  yield takeLatest('users/changePass', ChangePass);
}

export default userSaga;
