import {createSlice} from '@reduxjs/toolkit';
import {trang_thai_don_hang} from '../../../utils/contanst';

const initialState = {
  isLoading: true,
  isChiTietDonHangLoading: true,
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
      console.log('THANH CONG', action.payload);
      state.data = action.payload;

      let counterProcess = 0; // đếm số item của for
      const dangGiaoArray = [];
      const danhGiaArray = [];
      const lichSuArray = [];

      for (const item of action.payload.result) {
        const maTrangThai = item.ma_trang_thai;
        if (
          maTrangThai === trang_thai_don_hang.cho_xac_nhan ||
          maTrangThai === trang_thai_don_hang.da_xac_nhan ||
          maTrangThai === trang_thai_don_hang.dang_giao
        ) {
          dangGiaoArray.push(item);
        } else if (
          maTrangThai === trang_thai_don_hang.da_huy ||
          maTrangThai === trang_thai_don_hang.da_giao
        ) {
          lichSuArray.push(item);
        } else if (maTrangThai === trang_thai_don_hang.da_danh_gia) {
          danhGiaArray.push(item);
        }

        counterProcess++;

        // để chắc chắn là đã duyệt hết tất cả các item của for
        // trước khi loading xong
        if (counterProcess === action.payload.result.length) {
          state.dataDangGiao = dangGiaoArray;
          state.dataDanhGia = danhGiaArray;
          state.dataLichSu = lichSuArray;
          state.isLoading = false;
        }
      }

      console.log('state.dataDangGiao', state.dataDanhGia);
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
      console.log(action.payload);
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
} = donHangSlice.actions;
export default donHangSlice.reducer;
