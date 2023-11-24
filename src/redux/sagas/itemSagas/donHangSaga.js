import {takeLatest, call, put, delay} from 'redux-saga/effects';
import {
  addSanPhamDaGiaoVaoLichSuRealTime,
  getChiTietDonHangFail,
  getChiTietDonHangSuccess,
  getDanhGiaFail,
  getDanhGiaSuccess,
  getDonHangFail,
  getDonHangSuccess,
  getThayDoiFail,
  getThayDoiSuccess,
} from '../../reducers/slices/donHangSlice';
import instance from '../../../axios/instance';
import {trang_thai_don_hang} from '../../../utils/contanst';
import {Alert} from 'react-native';

function* fetchDonHangAsync(action) {
  try {
    const id_user = action.payload.id_user;
    const response = yield call(
      instance.get,
      `api/don-hang/lay-don-hang-theo-id-user/${id_user}`,
    );
    console.log('MESSAGE: ', response.data.message);
    if (response.data.message == 'Token invalid') {
      Alert.alert('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại');
    }
    yield put(getDonHangSuccess(response.data));
  } catch (error) {
    yield put(getDonHangFail(error.message));
  }
}

function* fetchChiTietDonHangAsync(action) {
  try {
    const id_don_hang = action.payload.id_don_hang;
    const response = yield call(
      instance.get,
      `/api/don-hang/lay-don-hang/${id_don_hang}`,
    );
    yield put(getChiTietDonHangSuccess(response.data));
  } catch (error) {
    yield put(getChiTietDonHangFail(error.message));
  }
}

function* fetchThayDoiTrangThaiDonHangAsync(action) {
  try {
    const {id_don_hang, ma_trang_thai} = action.payload;
    console.log('ID DON HANG: ', id_don_hang, 'MA TRANG THAI: ', ma_trang_thai);
    // const response = yield call(
    //   instance.post,
    //   'api/don-hang/cap-nhat-trang-thai',
    //   {id_don_hang: id_don_hang, ma_trang_thai: ma_trang_thai},
    // );
    const response = yield call(() =>
      instance.post('api/don-hang/cap-nhat-trang-thai', {
        id_don_hang: id_don_hang,
        ma_trang_thai: ma_trang_thai,
      }),
    );
    console.log('RESPONSE: ', response.data);
    if (response.data.status == false) {
      yield put(getThayDoiFail(response.data.message));
    }
    yield put(getThayDoiSuccess(response.data));
  } catch (error) {
    yield put(getThayDoiFail(error.message));
  }
}

function* fetchDanhGiaDonHangAsync(action) {
  try {
    const value = action.payload;
    console.log('value', value);
    const response = yield call(instance.post, `api/don-hang/danh-gia`, value);
    if (response.data.status == false) {
      yield put(getDanhGiaFail(response.data));
    }
    yield put(getDanhGiaSuccess(response.data));
  } catch (error) {
    console.log('ERROR SAGA DANH GIA: ', error);
    yield put(getDanhGiaFail(error.message));
  }
}

// loop check trang thai
function* re_checkTrangThaiDonHangAsync(action) {
  //nếu đang giao, đã giao, đã hủy, đã đánh giá thì ko cần check

  const dieu_kien_dung = trang_thai_don_hang.da_giao;
  let dieu_kien_hien_tai = '';
  let data;
  const id_don_hang = action.payload.id_don_hang;
  if (
    id_don_hang == trang_thai_don_hang.da_huy ||
    id_don_hang == trang_thai_don_hang.da_danh_gia
  ) {
    return;
  }

  // nếu status hiện tại là đã đặt, đang xác nhận, đang giao hàng thì check liên tục
  // nếu == 4 (đã giao thành công) thì dừng
  while (dieu_kien_dung != dieu_kien_hien_tai) {
    try {
      const response = yield call(
        instance.get,
        `/api/don-hang/lay-don-hang/${id_don_hang}`,
      );
      data = response.data;
      dieu_kien_hien_tai = response.data.result.ma_trang_thai;
      if (dieu_kien_hien_tai == dieu_kien_dung) {
        console.log('BREAK');
        break;
      } else if (
        dieu_kien_hien_tai == trang_thai_don_hang.dang_giao ||
        dieu_kien_hien_tai == trang_thai_don_hang.da_xac_nhan
      ) {
        yield put(getChiTietDonHangSuccess(data));
      }
    } catch (error) {
      console.log('LOI ROI: ', error.message);
    }

    //wait 10s
    yield delay(10000);
  }
  // while đã dừng
  console.log('STOPPPPP');
  yield put(getChiTietDonHangSuccess(data));
  yield put(addSanPhamDaGiaoVaoLichSuRealTime(data.result));
}

export function* donHangSaga() {
  yield takeLatest('don_hang/getDonHangRequest', fetchDonHangAsync);
  yield takeLatest(
    'don_hang/thayDoiTrangThaiDonHangRequest',
    fetchThayDoiTrangThaiDonHangAsync,
  );
  yield takeLatest('don_hang/getDanhGiaRequest', fetchDanhGiaDonHangAsync);

  //  loop check trang thai
  yield takeLatest(
    'don_hang/re_checkTrangThaiDonHangRequest',
    re_checkTrangThaiDonHangAsync,
  );
}

export function* chiTietDonHangSaga() {
  yield takeLatest(
    'don_hang/getChiTietDonHangRequest',
    fetchChiTietDonHangAsync,
  );
}
