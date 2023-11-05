import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  BACKGROUND_BUTTON_COLOR,
  trang_thai_don_hang,
} from '../../../utils/contanst';
import Header from '../../../utils/Header';
import moment from 'moment';

const TheoDoiDonHang = ({
  maTrangThai,
  thoiGianDatHang,
  thoiGianDangGiao,
  thoiGianHoanThanh,
}) => {
  const da_huy = maTrangThai === trang_thai_don_hang.da_huy;

  const da_dat_hang =
    maTrangThai === trang_thai_don_hang.cho_xac_nhan ||
    maTrangThai === trang_thai_don_hang.da_xac_nhan;
  const dang_giao_hang = maTrangThai === trang_thai_don_hang.dang_giao;
  const da_giao_hang = maTrangThai === trang_thai_don_hang.da_giao;

  return (
    <>
      {da_huy ? (
        <View style={styles.container}>
          <Text style={styles.textDaHuy}>Đã hủy</Text>
        </View>
      ) : (
        <>
          <View style={styles.container}>
            {/* 3 icon container */}
            <View style={styles.trangThaiContainer}>
              {/* Da dat container */}
              <View style={styles.daDatContainer}>
                <Icon
                  name="circle-check"
                  solid
                  size={12}
                  color={BACKGROUND_BUTTON_COLOR}
                />

                <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
                  Đã đặt
                </Text>
                <Text style={styles.textThoiGianDatHang}>
                  {moment(thoiGianDatHang).format('HH:mm')}
                </Text>
              </View>

              {/* separate line */}
              <View style={styles.lineTrangThai} />

              {/* Dang giao hang container */}
              <View style={styles.daDatContainer}>
                <Icon
                  name={
                    dang_giao_hang
                      ? 'circle-check'
                      : da_giao_hang
                      ? 'circle-check'
                      : 'circle'
                  }
                  size={12}
                  solid={dang_giao_hang ? true : da_giao_hang ? true : false}
                  color={BACKGROUND_BUTTON_COLOR}
                />

                <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
                  Đang giao hàng
                </Text>
                <Text style={styles.textThoiGianDatHang}>
                  {thoiGianDangGiao
                    ? moment(thoiGianDangGiao).format('HH:mm')
                    : ''}
                </Text>
              </View>

              {/* separate line */}
              <View style={styles.lineTrangThai} />

              {/* Dang giao hang container */}
              <View style={styles.daDatContainer}>
                <Icon
                  name={da_giao_hang ? 'circle-check' : 'circle'}
                  solid={da_giao_hang ? true : false}
                  size={12}
                  color={BACKGROUND_BUTTON_COLOR}
                />

                <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
                  Giao thành công
                </Text>
                <Text style={styles.textThoiGianDatHang}>{thoiGianHoanThanh
                    ? moment(thoiGianHoanThanh).format('HH:mm')
                    : ''}</Text>
              </View>
            </View>
          </View>
        </>
      )}
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
    marginTop: 10,
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
  textDaHuy: {
    fontSize: 16,
    color: 'red',
    fontWeight: '500',
  },
});
