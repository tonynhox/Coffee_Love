import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import AppNavigation from './src/components/navigations/AppNavigation';
import {store} from './src/redux/store';
import ModalCartOrder from './src/utils/Modals/ModalCartOrder';
import ManHinhCHao from './src/components/navigations/ManHinhChao';
import {NavigationContainer} from '@react-navigation/native';
import {createNavigationContainerRef} from '@react-navigation/native';
import Map from './src/components/others/map4D/Map';
import ModalHuyDonHang from './src/components/others/oders/item/ModalHuyDonHang';
import ModalDanhGia from './src/components/others/oders/item/ModalDanhGia';
import ModalVongQuayMayMan from './src/components/others/wheelOfFortune/ModelVongQuayMayMan';
import NotificationHandler from './src/notification/NotificationHandler';
import ModalNotification from './src/notification/ModalNotification';
import OnScreenNotification from './src/notification/OnScreenNotification';
import StoreCoffee from './src/components/others/storeCoffee/StoreCoffee';
import BottomSheetDanhSachCuaHang from './src/components/main/listStore/BottomSheetDanhSachCuaHang';
import MapAddAddress from './src/components/others/addAddress/MapAddAddress';
import BottomDanhGia from './src/components/others/product/BottomDanhGia';
// import Camera from './src/testCam/Camera';
import PickImage from './src/testCam/PickImage';
import Camera from './src/testCam/Camera';
import CameraComponent from './src/testCam/CameraComponent';
import TakingPhoto from './src/testCam/TakingPhoto';
import VisionCamera from './src/testCam/VisionCamera';
import ModalTuyChonHinhAnh from './src/components/others/oders/item/ModalTuyChonHinhAnh';
import ModalChiTietHinhAnhDanhGia from './src/components/others/oders/item/ModalChiTietHinhAnhDanhGia';
import OrderLoadingPlaceholder from './src/components/others/loading/OrderLoadingPlaceholder';

export const navigationRef = createNavigationContainerRef();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <NotificationHandler />
        {/* <BottomSheetDanhSachCuaHang /> */}
        <ManHinhCHao />
        {/* <OrderLoadingPlaceholder /> */}
        {/* <VisionCamera /> */}
        {/* <MapAddAddress /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: 'black',
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
  },
});
