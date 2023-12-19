import {createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
import Storage from '../../../utils/Storage';
//state
const initialState = {
  user: null,
  isLoading: false,
  isChangeUserLoading: false,
  isLoadingAddAddress: false,
  isLogin: false,
  notifications: [],
  isNotificationLoading: true,
  countNotification: 0,
};

export const userSlice = createSlice({
  name: 'users', //users/getUserFetch
  initialState,
  reducers: {
    //action user
    getUserFetch: state => {
      state.isLoading = true;
    },
    //lấy thông tin user
    getOneUserFetch: state => {
      state.isLoading = true;
    },

    //action success
    LoginSuccess: (state, action) => {
      state.user = action.payload.data;
      state.isLogin = true;
      state.isLoading = false;
      // ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
    },

    getRegister: state => {
      state.isLoading = true;
    },

    SignUpSuccess: state => {
      state.isLoading = false;
      ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
    },

    getOtp: state => {
      state.isLoading = true;
    },

    getOtpSuccess: state => {
      state.isLoading = false;
      ToastAndroid.show('Send Otp ', ToastAndroid.SHORT);
    },

    changePassOtp: state => {
      state.isLoading = true;
    },

    changePassOtpSuccess: state => {
      state.isLoading = false;
      ToastAndroid.show('Đổi mật khẩu thành công ', ToastAndroid.SHORT);
    },

    changePass: state => {
      state.isLoading = true;
    },

    changePassSuccess: state => {
      state.isLoading = false;
      ToastAndroid.show('Đổi mật khẩu thành công ', ToastAndroid.SHORT);
    },

    checkOtp: state => {
      state.isLoading = true;
    },

    checkOtpSuccess: state => {
      state.isLoading = false;
      ToastAndroid.show('Otp đúng', ToastAndroid.SHORT);
    },

    editUser: state => {
      state.isChangeUserLoading = true;
    },

    editUserSuccess: (state, action) => {
      state.isChangeUserLoading = false;
      state.user = {
        ...state.user,
        ho_ten: action.payload.ho_ten,
        so_dien_thoai: action.payload.so_dien_thoai,
        email: action.payload.email,
        avatar: action.payload.avatar,
      };
      ToastAndroid.show('Chỉnh sửa thành công', ToastAndroid.SHORT);
    },
    getAddAddress: state => {
      state.isLoadingAddAddress = true;
    },
    getAddAddressSuccess: (state, action) => {
      state.isLoadingAddAddress = false;
      const {user} = state;
      const updatedUser = {
        ...user,
        dia_chi: action.payload,
      };

      state.user = updatedUser;
    },
    //error
    getUserFail: (state, action) => {
      state.isLoading = false;
      state.isChangeUserLoading = false;
      console.log('action.payload user faile', action.payload);
      // ToastAndroid.show(action.payload, ToastAndroid.SHORT);
    },

    //vong quay may man
    getQuayThanhCongUser: (state, action) => {
      state.user.tich_diem = state.user.tich_diem - 100;
      console.log('DIEM THUONG: ', state.user.tich_diem);
    },
    getThemDiemFail: (state, action) => {
      state.user.tich_diem = state.user.tich_diem + 100;
    },

    // notification
    getNotificationRequest: state => {
      state.isLoading = true;
    },
    getNotificationSuccess: (state, action) => {
      state.isNotificationLoading = false;
      state.notifications = [...action.payload].reverse();
      state.countNotification = 0;
      action.payload.map(item => {
        if (!item.isRead) {
          state.countNotification = state.countNotification + 1;
        }
      });
    },
    getIncreaseCountNotificationByRemote: (state, action) => {
      state.countNotification = state.countNotification + 1;
    },
    clearNotificationCounter: state => {
      state.countNotification = 0;
    },
    getNotificationFail: (state, action) => {
      state.isNotificationLoading = false;
      state.notifications = [];
      console.log("LOI THONG BAO: ", action.payload)
      // ToastAndroid.show('Đã xảy ra lỗi nhận thông báo!', ToastAndroid.SHORT);
    },
    getChangeStatusReadNotification: (state, action) => {
      const updatedNotifications = state.notifications.map(item => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            isRead: true,
          };
        }
        return item;
      });

      state.notifications = updatedNotifications;
      console.log('updatedNotifications', updatedNotifications);
      if (state.countNotification > 0) {
        state.countNotification = state.countNotification - 1;
      }
    },
    getChangeStatusReadNotificationSuccess: (state, action) =>{
      console.log("XEM THONG BAO THANH CONG")
    },
    getChangeStatusReadNotificationFail: (state, action) =>{
      console.log("XEM THONG BAO THAT BAI")
    }
  },
});

export const {
  getOneUserFetch,
  getUserFetch,
  LoginSuccess,
  getRegister,
  SignUpSuccess,
  getOtp,
  getOtpSuccess,
  checkOtp,
  checkOtpSuccess,
  changePassOtp,
  changePassOtpSuccess,
  changePass,
  changePassSuccess,
  editUser,
  editUserSuccess,
  getUserFail,
  getQuayThanhCongUser,
  getThemDiemFail,
  getAddAddress,
  getAddAddressSuccess,
  getNotificationFail,
  getNotificationRequest,
  getNotificationSuccess,
  getIncreaseCountNotificationByRemote,
  clearNotificationCounter,
  getChangeStatusReadNotification,
  getChangeStatusReadNotificationSuccess,
  getChangeStatusReadNotificationFail,
} = userSlice.actions;

export default userSlice.reducer;
