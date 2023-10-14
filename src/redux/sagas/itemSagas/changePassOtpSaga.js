import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getUserFail, changePassOtpSuccess, } from '../../reducers/slices/userSlice'
import instance from '../../../axios/instance'

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


function* changePassOtpSaga() {
    yield takeLatest('users/changePassOtp', ChangePassOtp)
}

export default changePassOtpSaga