import {StyleSheet, Text, View} from 'react-native';
import React, { useRef } from 'react';
import Map from '../../others/map4D/Map';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheetDanhSachCuaHang from './BottomSheetDanhSachCuaHang';
import BottomView from './BottomView';

const ListStore = () => {
  const mapRef = useRef(null);
  return (
    <View style={{flex: 1}}>
      <Map mapRef={mapRef}/>
      <BottomView />
    </View>
  );
};

export default ListStore;

const styles = StyleSheet.create({});
