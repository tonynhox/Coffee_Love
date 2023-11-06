import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Map from '../../others/map4D/Map';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheetDanhSachCuaHang from './BottomSheetDanhSachCuaHang';
import BottomView from './BottomView';

const ListStore = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Map /> */}
    <BottomView />
      {/* <BottomSheetDanhSachCuaHang /> */}
    </View>
  );
};

export default ListStore;

const styles = StyleSheet.create({});
