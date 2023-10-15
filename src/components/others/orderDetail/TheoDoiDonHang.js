import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import Header from '../../../utils/Header';

const TheoDoiDonHang = () => {
  return (
    <>
    <View style={styles.container}>
      
      {/* 3 icon container */}
      <View style={styles.trangThaiContainer}>
        {/* Da dat container */}
        <View style={styles.daDatContainer}>
          <Icon name="circle" solid size={12} color={BACKGROUND_BUTTON_COLOR} />

          <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
            Đã đặt
          </Text>
          <Text style={styles.textThoiGianDatHang}>19:11</Text>
        </View>

        {/* separate line */}
        <View style={styles.lineTrangThai} />

        {/* Dang giao hang container */}
        <View style={styles.daDatContainer}>
          <Icon name="circle" size={12} color={BACKGROUND_BUTTON_COLOR} />

          <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
            Đang giao hàng
          </Text>
          <Text style={styles.textThoiGianDatHang}>19:11</Text>
        </View>

        {/* separate line */}
        <View style={styles.lineTrangThai} />

        {/* Dang giao hang container */}
        <View style={styles.daDatContainer}>
          <Icon
            name="circle-check"
            solid
            size={12}
            color={BACKGROUND_BUTTON_COLOR}
          />

          <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
            Giao thành công
          </Text>
          <Text style={styles.textThoiGianDatHang}>19:11</Text>
        </View>
      </View>
    </View>
    </>

  );
};

export default TheoDoiDonHang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  textThoiGianDatHang: {
    fontSize: 13,
    color: 'gray',
    fontWeight: '400',
  },
  textTrangThai: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  trangThaiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  daDatContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  lineTrangThai: {
    height: 2,
    width: 40,
    backgroundColor: 'gray',
  },
});
