import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import RenderOrderItem from './RenderOrderItem';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
// import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {formatCurrency} from '../../../utils/formatCurrency';
import {findNearestCoordinate} from '../map4D/tinhKhoangCach';
import {
  getLocationRouteFetch,
  getRouteCartFetch,
} from '../../../redux/reducers/slices/locationMapSlice';
import {giaGiaoHang} from '../map4D/tinhGiaGiaoHang';
import {useNavigation} from '@react-navigation/native';
import {setUseVoucher} from '../../../redux/reducers/slices/voucherSlide';
import {getPaymentFetch} from '../../../redux/reducers/slices/cartPaymentSlice';

const CartPayment = forwardRef(({setPrice}, ref) => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.cartPayment.cart);
  const dispatch = useDispatch();
  const diaChi = useSelector(state => state.locationMap.data.address);
  const user = useSelector(state => state.users.user);
  const data = useSelector(state => state.cartPayment.data);
  //tổng giá sản phẩm
  const [tongSanPham, setTongSanPham] = useState(0);
  //voucher đã chọn sử dụng
  const sales = useSelector(state => state.vouchers.useVoucher);
  //giá sale voucher
  const [sale, setSale] = useState(0);
  //data cửa hàng
  const dataStore = useSelector(state => state.locationMap.toaDoCuaHang);
  //data vị trí hiện tại
  const myLocation = useSelector(state => state.locationMap.myLocation);
  const [tencuahang, setTenCuaHang] = useState(null);

  //tính khoảng cách gần nhất
  // let distance;
  const [locationGanNhat, setLocationGanNhat] = useState(null);
  useEffect(() => {
    setLocationGanNhat(
      findNearestCoordinate(
        (origin = {
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
        }),
        (coordinates = dataStore.map(item => {
          item.location.x = parseFloat(item.location.x);
          item.location.y = parseFloat(item.location.y);
          return item.location;
          // latitude: parseFloat(distance[0].coordinate.x),
          //       longitude: parseFloat(distance[0].coordinate.y),
        })),
      ),
    );
  }, []);

  const dispatchGiaoHang = async () => {
    dispatch(
      getRouteCartFetch({
        locationStart: {
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
        },
        locationEnd: {
          latitude: parseFloat(locationGanNhat[0].coordinate.x),
          longitude: parseFloat(locationGanNhat[0].coordinate.y),
        },
      }),
    );
    const tencuahangTemp = dataStore.filter(
      item => item.location.x == locationGanNhat[0].coordinate.x,
    );
    // setTenCuaHang(tencuahangTemp[0].ten_chi_nhanh+ ' \n'+tencuahangTemp[0].dia_chi);
    setTenCuaHang(tencuahangTemp[0]);
  };
  //chi tiết đường đi và khoảng cách của cửa hàng gần nhất
  const routeCart = useSelector(state => state.locationMap.routeCart);
  const [priceShip, setPriceShip] = useState(15000);
  useEffect(() => {
    if (routeCart) {
      const ham = async () => {
        const giane = await giaGiaoHang(
          routeCart?.result?.routes[0]?.legs[0]?.distance?.value,
        );

        setPriceShip(giane || 15000);
      };
      ham();
    }
  }, [routeCart]);

  //Đóng lại do tốn tiền quá
  useEffect(() => {
    if (locationGanNhat) dispatchGiaoHang();
  }, [locationGanNhat]);

  //tính giá` sale
  useEffect(() => {
    if (sales) {
      switch (sales.status) {
        case 1:
          setSale(priceShip * -1);
          break;
        case 2:
          setSale(sales.gia_tri * -1);
          break;
        case 3:
          setSale(cart?.price * (sales.giam_gia / 100) * -1);
          break;
        default:
          console.log('không có sale');
          setSale(0);
          break;
      }
    }
  }, [priceShip, sales]);

  // tính giá tiền tổng tất cả
  useEffect(() => {
    console.log('sale', sale);
    const price = (cart?.price || 0) + priceShip + sale;
    setTongSanPham(price);
    setPrice(price);
  }, [priceShip, cart?.price, sale]);

  // end
  //data giỏ hàng

  //onpress mua hàng
  const handlePayment = () => {
    dispatch(
      getPaymentFetch({
        id_user: user?.id_user,
        id_chi_nhanh: tencuahang?._id,
        loai_don_hang: 'order Online',
        dia_chi: {
          ten_dia_chi: diaChi,
          so_dien_thoai: user?.so_dien_thoai,
          so_nha: '',
          tinh: '',
          nguoi_nhan: user?.ho_ten,
        },
        san_pham: data.map(item => {
          return {
            id_san_pham: item.id_san_pham,
            ten_san_pham: item.ten_san_pham,
            size: item.size,
            so_luong: item.so_luong,
            gia: item.gia_da_giam,
            topping: item.topping,
          };
        }),
        ghi_chu: '',
        giam_gia: sale,
        phi_van_chuyen: priceShip,
        thanh_tien: tongSanPham,
        thanh_toan: {
          ten_thanh_toan: 'Thanh Toán Khi Nhận Hàng',
          ma_thanh_toan: '',
          trang_thai: 1,
        },
      }),
    );
  };

  useImperativeHandle(ref, () => ({
    open() {
      handlePayment();
      // console.log('componentBRef', {
      //   id_user: user?.id_user,
      //   id_chi_nhanh: tencuahang?._id,
      //   loai_don_hang: 'order Online',
      //   dia_chi: {
      //     ten_dia_chi: diaChi,
      //     so_dien_thoai: user?.so_dien_thoai,
      //     so_nha: '',
      //     tinh: '',
      //     nguoi_nhan: user?.ho_ten,
      //   },
      //   san_pham: data.map(item => {
      //     return {
      //       id_san_pham: item.id_san_pham,
      //       ten_san_pham: item.ten_san_pham,
      //       size: item.size,
      //       so_luong: item.so_luong,
      //       gia: item.gia_da_giam,
      //       topping: item.topping
      //     };
      //   }),
      //   ghi_chu: '',
      //   giam_gia: sale,
      //   phi_van_chuyen: priceShip,
      //   thanh_toan: {
      //     ten_thanh_toan: 'Thanh Toán Khi Nhận Hàng',
      //     ma_thanh_toan: '',
      //     trang_thai: 1,
      //   },
      // });
    },
  }));

  return (
    <View style={styles.container}>
      {/* separate line */}

      {/* Dia chi giao hang */}
      <TouchableOpacity style={styles.thongTinDiaChiContainer}>
        <View style={{position: 'absolute', top: 30, right: 0}}>
          {/* <Text style={styles.textDonHang}>Đổi</Text> */}
          <Icon name="chevron-right" size={30} color="black" />
        </View>
        <Text style={styles.textThongTinDiaChi}>
          Thông tin - địa chỉ giao hàng
        </Text>
        <View style={{marginLeft: 6}}>
          <Text style={styles.textThongTin}>
            {user?.ho_ten || 'Chưa có họ tên'}
          </Text>
          <Text style={styles.textThongTin}>
            {user?.so_dien_thoai || 'Chưa có số điện thoại'}
          </Text>
          <Text
            style={[styles.textThongTin, {width: '86%'}]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {/* Địa chỉ: {diaChi?.so_nha}, {diaChi?.tinh} */}
            {diaChi || 'Chưa có địa chỉ giao hàng'}
          </Text>
        </View>
      </TouchableOpacity>
      {/* separate line */}
      <View
        style={[styles.separateLine, {marginLeft: -20, width: '110%', left: 0}]}
      />
      {/* chi nhánh */}
      <TouchableOpacity style={styles.thongTinDiaChiContainer}>
        <View style={{position: 'absolute', top: 20, right: 0}}>
          {/* <Text style={styles.textDonHang}>Đổi</Text> */}
          <Icon name="chevron-right" size={30} color="black" />
        </View>
        <Text style={styles.textThongTinDiaChi}>Địa điểm chi nhánh</Text>
        <View style={{marginLeft: 6}}>
          <Text
            style={[styles.textThongTin, {width: '86%'}]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {/* Địa chỉ: {diaChi?.so_nha}, {diaChi?.tinh} */}

            {tencuahang?.ten_chi_nhanh + '\n' + tencuahang?.dia_chi ||
              'Chưa có địa chỉ cửa hàng'}
          </Text>
          {/* <Text style={styles.textThongTin}>
            {user?.so_dien_thoai || 'Chưa có số điện thoại'}
          </Text> */}
        </View>
      </TouchableOpacity>

      {/* separate line */}
      <View
        style={[styles.separateLine, {marginLeft: -20, width: '110%', left: 0}]}
      />

      {/* Don hang */}
      <View>
        <Text style={styles.textDonHang}>Đơn hàng</Text>

        {data.map((item, index) => {
          return <RenderOrderItem key={index} item={item} index={index} />;
        })}
      </View>

      <View
        style={[styles.separateLine, {marginLeft: -20, width: '110%', left: 0}]}
      />

      {/* chi phi giao hang */}
      <View>
        <Text style={styles.textDonHang}>Tổng cộng</Text>

        <View style={styles.phiGiaoHangContainer}>
          <Text style={styles.textPhiGiaoHang}>Thành tiền</Text>
          <Text style={styles.textPhiGiaoHang}>
            {formatCurrency(cart?.price || 0)}
          </Text>
        </View>

        {/* phi giao hang container */}
        <View style={styles.phiGiaoHangContainer}>
          <Text style={styles.textPhiGiaoHang}>Phí giao hàng</Text>
          <Text style={styles.textPhiGiaoHang}>
            {formatCurrency(priceShip)}
          </Text>
        </View>

        {/* phi giam gia container */}

        {sale != 0 && sales ? (
          <TouchableOpacity
            onPress={() => {
              Alert.alert(sales.ten_voucher, 'Bạn muốn sử dụng sau?', [
                {
                  text: 'Huỷ',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Xác nhận',
                  onPress: () => {
                    dispatch(setUseVoucher(null));
                    setSale(0);
                  },
                },
              ]);
            }}
            style={[styles.phiGiaoHangContainer, {marginTop: 5}]}>
            <Text
              style={[
                styles.textPhiGiaoHang,
                {fontSize: 13.5, color: 'blue', fontWeight: '500'},
              ]}>
              Khuyến mãi
            </Text>
            <Text
              style={[
                styles.textPhiGiaoHang,
                {fontSize: 13.5, color: 'blue', fontWeight: '500'},
              ]}>
              {formatCurrency(sale)}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.push('VoucherCart');
            }}
            style={[styles.phiGiaoHangContainer, {marginTop: 5}]}>
            <Text
              style={[
                styles.textPhiGiaoHang,
                {fontSize: 13.5, color: 'blue', fontWeight: '500'},
              ]}>
              Chọn khuyến mãi/đổi điểm
            </Text>

            <Icon name="chevron-right" size={18} color="blue" />
          </TouchableOpacity>
        )}
      </View>

      {/* separate line */}
      {/* <View style={styles.separateLine} /> */}

      {/* tong tien container */}
      <View style={styles.tongTienContainer}>
        <Text style={styles.textTongTien}>Tổng</Text>
        <Text style={styles.textTongTien}>{formatCurrency(tongSanPham)}</Text>
      </View>

      {/* separate line */}
      <View
        style={[styles.separateLine, {marginLeft: -20, width: '110%', left: 0}]}
      />

      {/* Hinh thuc hanh toan */}
      <View>
        <Text style={styles.textDonHang}>Hình thức thanh toán</Text>

        <TouchableOpacity style={styles.phiGiaoHangContainer}>
          {/* <Text style={styles.textPhiGiaoHang}>15.000₫</Text> */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="cash" size={20} color="green" />
            <Text style={styles.textPhiGiaoHang}> Tiền mặt</Text>
          </View>

          {/* <Text style={styles.textPhiGiaoHang}>15.000₫</Text> */}
          <Icon name="chevron-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {/* Hinh thuc thanh toan */}
      {/* <View>
        <Text style={styles.textThanhToanKhiNhanHang}>
          (Thanh toán khi nhận hàng)
        </Text>
      </View> */}

      {/* separate line */}
      <View
        style={[styles.separateLine, {marginLeft: -20, width: '110%', left: 0}]}
      />

      {/* chu thich */}
      <View>
        <Text style={styles.textDonHang}>Chú thích</Text>
        {/* chu thich view */}
        <View style={styles.chuThichContainer}>
          <TextInput
            placeholder="Ghi chú đơn hàng (không bắt buộc)"
            placeholderTextColor="#404040"
            // collapsable={true}
            // autoCorrect={true}
            multiline={true}
            style={styles.textLoiNhan}
          />
        </View>
      </View>
    </View>
  );
});

export default React.memo(CartPayment);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    padding: 12,
    // borderRadius:20,
    marginTop: 20,
  },
  thongTinDiaChiContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textThongTinDiaChi: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
  textDonHang: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    marginBottom: 6,
  },
  textTongSanPham: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  textThongTin: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    // paddingVertical: 2,
    paddingTop: 2,
  },
  separateLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 10,
    borderWidth: 0.1,
  },
  textPhiGiaoHang: {
    fontSize: 14,
    color: '#404040',
    fontWeight: '500',
    paddingVertical: 2,
  },
  textLoiNhan: {
    fontSize: 14,
    color: '#404040',
    fontWeight: '400',
    marginHorizontal: 8,
  },
  phiGiaoHangContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  textTongTien: {
    fontSize: 15,
    // color: BACKGROUND_BUTTON_COLOR,
    color: 'black',
    fontWeight: '600',
    marginHorizontal: 8,
    marginVertical: 2,
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
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#FAD89B',
  },
  theoDoiDonHangContainer: {
    width: '100%',
    height: 100,
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
