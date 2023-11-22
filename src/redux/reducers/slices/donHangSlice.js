import {createSlice} from '@reduxjs/toolkit';
import {trang_thai_don_hang} from '../../../utils/contanst';
import {ToastAndroid} from 'react-native';

const initialState = {
  isLoading: true,
  isChiTietDonHangLoading: true,
  isThayDoiTrangThaiDonHangLoading: false,
  isDanhGiaLoading: false,
  dataDangGiao: [],
  dataDanhGia: [],
  dataLichSu: [],

  dataChiTietDonHang: null,
};

const donHangSlice = createSlice({
  name: 'don_hang',
  initialState,
  reducers: {
    getDonHangRequest: state => {
      state.isLoading = true;
    },
    getChiTietDonHangRequest: state => {
      state.isChiTietDonHangLoading = true;
    },
    getDonHangSuccess: (state, action) => {
      // console.log('THANH CONG: ', action.payload.result);
      let counterProcess = 0; // đếm số item của for
      const dangGiaoArray = [];
      const danhGiaArray = [];
      const lichSuArray = [];
      if (action.payload.result.length == 0) {
        state.isLoading = false;
        state.isThayDoiTrangThaiDonHangLoading = false;
        return;
      }

      for (const item of action.payload.result) {
        const maTrangThai = item.ma_trang_thai;
        if (
          maTrangThai === trang_thai_don_hang.cho_xac_nhan ||
          maTrangThai === trang_thai_don_hang.da_xac_nhan ||
          maTrangThai === trang_thai_don_hang.dang_giao
        ) {
          dangGiaoArray.push(item);
        }
        if (
          maTrangThai === trang_thai_don_hang.da_huy ||
          maTrangThai === trang_thai_don_hang.da_giao ||
          maTrangThai === trang_thai_don_hang.da_danh_gia
        ) {
          lichSuArray.push(item);
        }
        if (
          maTrangThai === trang_thai_don_hang.da_danh_gia ||
          maTrangThai === trang_thai_don_hang.da_giao
        ) {
          danhGiaArray.push(item);
        }

        counterProcess++;

        // để chắc chắn là đã duyệt hết tất cả các item của for
        // trước khi loading xong
        if (counterProcess === action.payload.result.length) {
          state.dataDangGiao = dangGiaoArray.reverse();
          state.dataDanhGia = danhGiaArray.reverse();
          state.dataLichSu = lichSuArray.reverse();
          state.isLoading = false;
          state.isThayDoiTrangThaiDonHangLoading = false;
        }
      }

      // console.log('DATA DANG GIAO', state.dataDangGiao);
    },

    getChiTietDonHangSuccess: (state, action) => {
      state.dataChiTietDonHang = action.payload.result;
      state.isChiTietDonHangLoading = false;
    },
    getChiTietDonHangFail: (state, action) => {
      console.log('THAT BAI');
      state.isChiTietDonHangLoading = false;
      console.log(action.payload);
    },
    getDonHangFail: (state, action) => {
      console.log('THAT BAI');
      state.isLoading = false;
    },

    // thay doi trang thai don hang
    thayDoiTrangThaiDonHangRequest: state => {
      state.isThayDoiTrangThaiDonHangLoading = true;
    },
    getThayDoiSuccess: (state, action) => {
      if (action.payload.result) {
        state.dataDangGiao = state.dataDangGiao.filter(item => {
          if (item._id !== action.payload.result._id) {
            return true; // Keep the item in the filtered array
          } else {
            state.dataLichSu = [action.payload.result, ...state.dataLichSu];
            return false; // Exclude this item from the filtered array
          }
        });

        state.isThayDoiTrangThaiDonHangLoading = false;
      }
    },
    getThayDoiFail: (state, action) => {
      console.log('THAT BAI', action.payload);
      state.isThayDoiTrangThaiDonHangLoading = false;
    },

    // danh gia
    getDanhGiaRequest: state => {
      state.isDanhGiaLoading = true;
    },

    //===============================
    getDanhGiaSuccess: (state, action) => {
      if (action.payload.result) {
        state.dataLichSu = state.dataLichSu.filter(item => {
          if (item._id !== action.payload.result._id) {
            return true; // Keep the item in the filtered array
          } else {
            state.dataDanhGia = [action.payload.result, ...state.dataDanhGia];
            return false; // Exclude this item from the filtered array
          }
        });

        state.isDanhGiaLoading = false;
        ToastAndroid.show(
          'Cảm ơn bạn đã đánh giá sản phẩm của Coffee.Love',
          ToastAndroid.SHORT,
        );
      }
    },

    getDanhGiaFail: (state, action) => {
      console.log('THAT BAI', action.payload);
      state.isDanhGiaLoading = false;
      ToastAndroid.show('Opps, có lỗi xảy ra rồi bạn ơi', ToastAndroid.SHORT);
    },

    // real-time check trang thai
    re_checkTrangThaiDonHangRequest: state => {
      console.log('EXECUTED');
    },

    // add sản phẩm đã giao thành công vào danh sách lịch sử (đối với real-time)
    addSanPhamDaGiaoVaoLichSuRealTime: (state, action) => {
      state.dataDangGiao = state.dataDangGiao.filter(
        item => item._id !== action.payload._id,
      );
      state.dataLichSu.unshift(action.payload);
    },
  },
});

export const {
  getDonHangRequest,
  getDonHangSuccess,
  getDonHangFail,
  getChiTietDonHangRequest,
  getChiTietDonHangSuccess,
  getChiTietDonHangFail,
  thayDoiTrangThaiDonHangRequest,
  getThayDoiSuccess,
  getThayDoiFail,
  getDanhGiaRequest,
  getDanhGiaSuccess,
  getDanhGiaFail,
  re_checkTrangThaiDonHangRequest,
  addSanPhamDaGiaoVaoLichSuRealTime,
} = donHangSlice.actions;

export default donHangSlice.reducer;
