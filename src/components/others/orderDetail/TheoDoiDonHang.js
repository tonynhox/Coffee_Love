import {
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  BACKGROUND_BUTTON_COLOR,
  trang_thai_don_hang,
} from '../../../utils/contanst';
import Header from '../../../utils/Header';
import moment from 'moment';
import 'moment/locale/vi'; // Load Vietnamese locale

const TheoDoiDonHang = ({
  maTrangThai,
  thoiGianDatHang,
  thoiGianXacNhan,
  thoiGianDangGiao,
  thoiGianHoanThanh,
}) => {
  // const [thoiGianDonHang, setThoiGianDonHang] = React.useState({
  //   thoiGianXacNhan: '',
  //   thoiGianDangGiao: '',
  //   thoiGianHoanThanh: '',
  // });

  // useEffect(() => {
  //   setThoiGianDonHang({
  //     thoiGianXacNhan: thoiGianXacNhan,
  //     thoiGianDangGiao: thoiGianDangGiao,
  //     thoiGianHoanThanh: thoiGianHoanThanh,
  //   });
  // }, [thoiGianXacNhan, thoiGianDangGiao, thoiGianHoanThanh]);

  const da_huy = maTrangThai === trang_thai_don_hang.da_huy;
  const da_xac_nhan = maTrangThai === trang_thai_don_hang.da_xac_nhan;
  const dang_giao_hang = maTrangThai === trang_thai_don_hang.dang_giao;
  const da_giao_hang = maTrangThai === trang_thai_don_hang.da_giao;
  const da_danh_gia = maTrangThai === trang_thai_don_hang.da_danh_gia;

  const transition = {
    duration: 250, // You can adjust the duration as needed
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

  const [isExpand, setIsExpand] = React.useState(false);
  const handleAnimation = () => {
    LayoutAnimation.configureNext(transition);
    setIsExpand(!isExpand);
  };

  return (
    <>
      {da_huy ? (
        <View style={styles.container}>
          <Text style={styles.textDaHuy}>Đã hủy</Text>
        </View>
      ) : (
        <>
          <View style={styles.container}>
            {/* 5 icon container */}
            <View style={styles.trangThaiContainer}>
              {/* Da dat container */}
              <View style={styles.daDatContainer}>
                <Icon
                  name="circle-check"
                  solid
                  size={15}
                  color={BACKGROUND_BUTTON_COLOR}
                />

                <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
                  Đã đặt hàng
                </Text>

                <Icon name="circle" solid size={3} color={'gray'} />
                <Text style={styles.textThoiGianDatHang}>
                  {moment.utc(thoiGianDatHang).format('HH:mm DD/MM/yyyy')}
                </Text>
              </View>

              {/* ============================ ANIMATION ============================ */}
              {!isExpand ? null : (
                <>
                  {/* separate line */}
                  <Icon
                    name="chevron-down"
                    size={20}
                    color={BACKGROUND_BUTTON_COLOR}
                  />

                  {/* Đã xác nhận container */}
                  <View style={styles.daDatContainer}>
                    <Icon
                      name={
                        da_xac_nhan ||
                        dang_giao_hang ||
                        da_giao_hang ||
                        da_danh_gia
                          ? 'circle-check'
                          : 'circle'
                      }
                      size={15}
                      solid={
                        da_xac_nhan ||
                        dang_giao_hang ||
                        da_giao_hang ||
                        da_danh_gia
                          ? true
                          : false
                      }
                      color={BACKGROUND_BUTTON_COLOR}
                    />

                    <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
                      Đã xác nhận
                    </Text>
                    {thoiGianXacNhan && (
                      <>
                        <Icon name="circle" solid size={3} color={'gray'} />
                        <Text style={styles.textThoiGianDatHang}>
                          {moment
                            .utc(thoiGianXacNhan)
                            .format('HH:mm DD/MM/yyyy')}
                        </Text>
                      </>
                    )}
                  </View>

                  {/* separate line */}
                  <Icon
                    name="chevron-down"
                    size={20}
                    color={BACKGROUND_BUTTON_COLOR}
                  />

                  {/* Đang giao hang container */}
                  <View style={styles.daDatContainer}>
                    <Icon
                      name={
                        dang_giao_hang || da_giao_hang || da_danh_gia
                          ? 'circle-check'
                          : 'circle'
                      }
                      size={15}
                      solid={
                        dang_giao_hang || da_giao_hang || da_danh_gia
                          ? true
                          : false
                      }
                      color={BACKGROUND_BUTTON_COLOR}
                    />

                    <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
                      Đang giao hàng
                    </Text>
                    {thoiGianDangGiao && (
                      <>
                        <Icon name="circle" solid size={3} color={'gray'} />
                        <Text style={styles.textThoiGianDatHang}>
                          {moment
                            .utc(thoiGianDangGiao)
                            .format('HH:mm DD/MM/yyyy')}
                        </Text>
                      </>
                    )}
                  </View>

                  {/* separate line */}
                  <Icon
                    name="chevron-down"
                    size={20}
                    color={BACKGROUND_BUTTON_COLOR}
                  />

                  {/* Giao thanh cong container */}
                  <View style={styles.daDatContainer}>
                    <Icon
                      name={
                        da_giao_hang || da_danh_gia ? 'circle-check' : 'circle'
                      }
                      size={15}
                      solid={da_giao_hang || da_danh_gia ? true : false}
                      color={BACKGROUND_BUTTON_COLOR}
                    />

                    <Text style={[styles.textTrangThai, {paddingVertical: 8}]}>
                      Giao thành công
                    </Text>
                    {thoiGianHoanThanh && (
                      <>
                        <Icon name="circle" solid size={3} color={'gray'} />
                        <Text style={styles.textThoiGianDatHang}>
                          {moment
                            .utc(thoiGianHoanThanh)
                            .format('HH:mm DD/MM/yyyy')}
                        </Text>
                      </>
                    )}
                  </View>
                </>
              )}
            </View>

            {isExpand ? (
              <>
                {/* Ẩn bớt  */}
                <TouchableOpacity
                  style={styles.xemThemContainer}
                  onPress={() => handleAnimation()}
                  activeOpacity={0.9}>
                  <Icon
                    name="angles-up"
                    size={20}
                    color={BACKGROUND_BUTTON_COLOR}
                  />
                  <Text style={styles.textXemThem}>Ẩn bớt</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                {/* Xem them  */}
                <TouchableOpacity
                  style={styles.xemThemContainer}
                  onPress={() => handleAnimation()}
                  activeOpacity={0.9}>
                  <Icon
                    name="angles-down"
                    size={20}
                    color={BACKGROUND_BUTTON_COLOR}
                  />
                  <Text style={styles.textXemThem}>Xem thêm</Text>
                </TouchableOpacity>
              </>
            )}
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
    color: '#555555',
    fontWeight: '500',
    marginLeft: 10,
  },
  textTrangThai: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
    marginHorizontal: 10,
  },
  trangThaiContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  daDatContainer: {
    flexDirection: 'row',
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
  textXemThem: {
    fontSize: 14,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: '500',
    marginLeft: 10,
  },
  xemThemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    width: Dimensions.get('window').width * 0.9,
    // backgroundColor: 'blue',
  },
});
