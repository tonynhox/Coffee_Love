import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import React, {useEffect} from 'react';
import RenderOrderItem from './RenderOrderItem';
import TheoDoiDonHang from './TheoDoiDonHang';
import {
  BACKGROUND_BUTTON_COLOR,
  style_text_khong_co_du_lieu,
  trang_thai_thanh_toan,
} from '../../../utils/contanst';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getChiTietDonHangRequest,
  re_checkTrangThaiDonHangRequest,
} from '../../../redux/reducers/slices/donHangSlice';
import {ActivityIndicator} from 'react-native';
import {formatCurrency} from '../../../utils/formatCurrency';
import Icon from 'react-native-vector-icons/FontAwesome6';
// import { ScrollView } from 'react-native-virtualized-view';

const OrderDetail = () => {
  // const isLoading = false;
  // const data = {
  //   dia_chi: {
  //     ten_dia_chi: '212312',
  //     so_dien_thoai: '',
  //     so_nha: '',
  //     tinh: '',
  //     nguoi_nhan: 'huy',
  //   },
  //   _id: '6533b71fdd102a21406f9676',
  //   id_user: '651e8c5baa3c5378de775821',
  //   id_chi_nhanh: '6522818a2639141f25388250',
  //   loai_don_hang: 'order Online',
  //   ngay_dat: '2023-10-21T11:33:51.032Z',
  //   san_pham: [
  //     {
  //       id_san_pham: '65200da4b4687e983b7353b4',
  //       ten_san_pham: 'abc',
  //       size: 'S',
  //       so_luong: 5,
  //       gia: 75000,
  //       _id: '6533b71fdd102a21406f9677',
  //       topping: [
  //         {
  //           ten_topping: 'trân châu',
  //           gia: 10000,
  //         },
  //         {
  //           ten_topping: 'thạch dừa',
  //           gia: 12000,
  //         },
  //       ],
  //     },
  //     {
  //       id_san_pham: '6527c3f63f0f8812b90f7152',
  //       ten_san_pham: 'asdvbsdfs',
  //       size: 'F',
  //       so_luong: 5,
  //       gia: 100000,
  //       _id: '6533b71fdd102a21406f9678',
  //       topping: [
  //         {
  //           ten_topping: 'trân châu',
  //           gia: 10000,
  //         },
  //         {
  //           ten_topping: 'thạch dừa',
  //           gia: 12000,
  //         },
  //       ],
  //     },
  //   ],
  //   ghi_chu: '',
  //   so_diem_tich_luy: 200,
  //   giam_gia: 10000,
  //   phi_van_chuyen: 15000,
  //   ma_trang_thai: 1,
  //   ten_trang_thai: 'Đang xử lý',
  //   ngay_cap_nhat: '2023-10-21T11:33:51.032Z',
  //   tong_san_pham: 10,
  //   thanh_tien: 880000,
  //   hinh_anh_danh_gia: [
  //     {
  //       ten_hinh_anh: 'abc.xyz',
  //       _id: '6533b749dd102a21406f967e',
  //     },
  //     {
  //       ten_hinh_anh: 'abc.xyz',
  //       _id: '6533b749dd102a21406f967f',
  //     },
  //   ],
  //   __v: 1,
  //   danh_gia: 'rất tuyệt vời ạ',
  //   email: '123',
  //   ngay_danh_gia: '2023-10-21T11:34:33.014Z',
  //   so_sao: 5,
  //   ten_user: '123',
  // };

  const dispatch = useDispatch();
  const route = useRoute();
  const {id_don_hang} = route.params;
  const navigation = useNavigation();

  const isLoading = useSelector(
    state => state.don_hang.isChiTietDonHangLoading,
  );
  const data = useSelector(state => state.don_hang.dataChiTietDonHang);

  useEffect(() => {
    navigation.setOptions({
      title: 'Chi tiết đơn hàng',
      headerTitleStyle: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600',
      },
      headerStyle: {
        backgroundColor: '#fff',
      },
    });

    const fetchChiTietDonHang = () => {
      dispatch(getChiTietDonHangRequest({id_don_hang: id_don_hang}));
    };

    const re_checkTrangThai = () => {
      dispatch(re_checkTrangThaiDonHangRequest({id_don_hang: id_don_hang}));
    };

    fetchChiTietDonHang();
    re_checkTrangThai();
  }, []);

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

  const [currentIndex, setCurrentIndex] = React.useState(null);
  const handleAnimation = React.useCallback(index => {
    LayoutAnimation.configureNext(transition);
    setCurrentIndex(index === currentIndex ? null : index);
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={BACKGROUND_BUTTON_COLOR} />
        </View>
      ) : (
        <>
          {!data ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={style_text_khong_co_du_lieu}>Không có dữ liệu</Text>
            </View>
          ) : (
            <ScrollView style={styles.container}>
              <View style={styles.theoDoiDonHangContainer}>
                <TheoDoiDonHang
                  maTrangThai={data?.ma_trang_thai}
                  thoiGianDatHang={data?.ngay_cap_nhat_1}
                  thoiGianXacNhan={data?.ngay_cap_nhat_2}
                  thoiGianDangGiao={data?.ngay_cap_nhat_3}
                  thoiGianHoanThanh={data?.ngay_cap_nhat_4}
                />
              </View>

              {/* separate line */}
              <View style={styles.separateLine} />

              {/* Dia chi giao hang */}
              <View style={styles.thongTinDiaChiContainer}>
                <Text style={styles.textThongTinDiaChi}>
                  Thông tin - địa chỉ giao hàng
                </Text>
                {/* Nguoi nhan container */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Icon
                    name="user"
                    size={15}
                    color={BACKGROUND_BUTTON_COLOR}
                    solid
                    style={{paddingHorizontal: 5}}
                  />
                  <Text style={[styles.textThongTin]}>
                    Người nhận: {data?.dia_chi?.nguoi_nhan}
                  </Text>
                </View>

                {/* sdt container */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="phone"
                    size={15}
                    color={BACKGROUND_BUTTON_COLOR}
                    solid
                    style={{paddingHorizontal: 5}}
                  />
                  <Text style={styles.textThongTin}>
                    Số điện thoại: {data?.dia_chi?.so_dien_thoai}
                  </Text>
                </View>

                {/* Dia chi container */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="location-dot"
                    size={15}
                    color={BACKGROUND_BUTTON_COLOR}
                    solid
                    style={{paddingHorizontal: 5}}
                  />

                  <Text
                    style={[styles.textThongTin,]}
                    numberOfLines={2}
                    width="90%"
                    ellipsizeMode="tail">
                    Địa chỉ: {data?.dia_chi?.ten_dia_chi}
                  </Text>
                </View>
              </View>

              {/* separate line */}
              <View style={styles.separateLine} />

              {/* Don hang */}
              <View style={{paddingLeft: 5}}>
                <Text style={styles.textDonHang}>Đơn hàng</Text>
                <FlatList
                  marginTop={10}
                  scrollEnabled={false}
                  data={data?.san_pham}
                  renderItem={({item, index}) => (
                    <RenderOrderItem
                      item={item}
                      index={index}
                      isSelected={index === currentIndex}
                      onPress={handleAnimation}
                    />
                  )}
                  keyExtractor={item => item._id}
                />
                <Text style={[styles.textTongSanPham, {marginTop: 10}]}>
                  Tổng sản phẩm: {data?.tong_san_pham}
                </Text>
              </View>

              {/* separate line */}
              <View style={styles.separateLine} />

              {/* chi phi giao hang */}
              <View>
                {/* phi giao hang container */}
                <View style={styles.phiGiaoHangContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="truck-fast"
                      size={15}
                      color={BACKGROUND_BUTTON_COLOR}
                      solid
                      style={{paddingHorizontal: 5}}
                    />
                    <Text style={styles.textPhiGiaoHang}>Phí giao hàng</Text>
                  </View>
                  <Text style={styles.textPhiGiaoHang}>
                    {formatCurrency(data?.phi_van_chuyen)}
                  </Text>
                </View>

                {/* phi giam gia container */}
                <View style={[styles.phiGiaoHangContainer, {marginTop: 5}]}>
                <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <Icon name="circle-dollar-to-slot" size={15} color={BACKGROUND_BUTTON_COLOR} solid style={{paddingHorizontal: 5}}/>
                  <Text style={styles.textPhiGiaoHang}>Giảm giá</Text>
                    </View>
                  <Text style={styles.textPhiGiaoHang}>
                    -{formatCurrency(data?.giam_gia)}
                  </Text>
                </View>
              </View>

              {/* separate line */}
              <View style={styles.separateLine} />

              {/* tong tien container */}
              <View style={styles.tongTienContainer}>
                <Text style={styles.textTongTien}>Tổng</Text>
                <Text style={styles.textTongTien}>
                  {formatCurrency(data?.thanh_tien)}
                </Text>
              </View>

              {/* Hinh thuc thanh toan */}
              <View>
                <Text style={styles.textThanhToanKhiNhanHang}>
                  {data?.thanh_toan?.trang_thai ==
                  trang_thai_thanh_toan.chua_thanh_toan
                    ? '(Thanh toán khi nhận hàng)'
                    : '(Đã thanh toán)'}
                </Text>
              </View>

              {/* separate line */}
              <View style={styles.separateLine} />

              {/* chu thich */}
              <View>
                <Text style={styles.textChuThich}>Chú thích</Text>
                {/* chu thich view */}
                <View style={styles.chuThichContainer}>
                  <Text style={styles.textLoiNhan}>{data?.ghi_chu}</Text>
                </View>
              </View>
            </ScrollView>
          )}
        </>
      )}
    </>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    paddingHorizontal: 7,
    marginBottom: 10,
  },
  thongTinDiaChiContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 5,
  },
  textThongTinDiaChi: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  textDonHang: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  textTongSanPham: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  textThongTin: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    paddingVertical: 7,
  },
  separateLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  textPhiGiaoHang: {
    fontSize: 14,
    color: '#404040',
    fontWeight: '400',
  },
  textLoiNhan: {
    fontSize: 14,
    color: '#404040',
    fontWeight: '400',
    marginHorizontal: 10,
    marginTop: 10,
  },
  phiGiaoHangContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textTongTien: {
    fontSize: 17,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: '600',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  tongTienContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textChuThich: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  chuThichContainer: {
    width: '95%',
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#FAD89B',
    borderWidth: 0.7,
    alignSelf: 'center',
    marginBottom: 10,
  },
  theoDoiDonHangContainer: {
    width: '100%',
    // height: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textThanhToanKhiNhanHang: {
    fontSize: 14,
    color: 'gray',
    fontStyle: 'italic',
    fontWeight: '400',
    marginHorizontal: 10,
    marginBottom: 5,
  },
});
