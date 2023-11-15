import {takeLatest, call, put} from 'redux-saga/effects';
import instance from '../../../axios/instance';
import {
  getDeviceTokenFail,
  getDeviceTokenSuccess,
} from '../../reducers/slices/deviceTokenSlice';

function* fetchDeviceTokenSaga(action) {
  try {
    console.log("VALUE USER++++++++++: ", action.payload)
    const response = yield call(() =>
      instance.post('users/sua-user', action.payload),
    );
    if (response.data.trang_thai) {
      yield put(getDeviceTokenSuccess(response.data.data.device_token));
    } else {
      yield put(getDeviceTokenFail(response.data.message));
    }
  } catch (error) {
    console.log("CATCH =======", error.message)
    yield put(getDeviceTokenFail(error.message));
  }
}

function* deviceTokenSaga() {
  yield takeLatest('device_token/getDeviceTokenRequest', fetchDeviceTokenSaga);
}

export default deviceTokenSaga;
