import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BottomSheetDanhSachCuaHang from './BottomSheetDanhSachCuaHang';
import Icon from 'react-native-vector-icons/FontAwesome6';

const BottomView = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const openBottomSheet = () => {
    setIsVisible(true);
  };

  const closeBottomSheet = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Floating show button */}
      <TouchableOpacity
        style={styles.floatingShowButton}
        onPress={() => openBottomSheet()}>
        <Icon name="map-location-dot" size={20} color="#fff" />
      </TouchableOpacity>
      <BottomSheetDanhSachCuaHang
        isVisible={isVisible}
        onClose={closeBottomSheet}
      />
    </>
  );
};

export default BottomView;

const styles = StyleSheet.create({
  floatingShowButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#df7a00',
    position: 'absolute',
    bottom: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
