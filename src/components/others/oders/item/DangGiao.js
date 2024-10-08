import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {formatCurrency} from '../../../../utils/formatCurrency';
import {useDispatch, useSelector} from 'react-redux';
import {
  BACKGROUND_BUTTON_COLOR,
  color_don_hang,
  trang_thai_don_hang,
} from '../../../../utils/contanst';
import {
  getDonHangRequest,
  thayDoiTrangThaiDonHangRequest,
} from '../../../../redux/reducers/slices/donHangSlice';
import ModalHuyDonHang from './ModalHuyDonHang';

const DangGiao = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const data = useSelector(state => state.don_hang.dataDangGiao);
  const isLoading = useSelector(state => state.don_hang.isLoading);
  const isThayDoiTrangThaiDonHangLoading = useSelector(
    state => state.don_hang.isThayDoiTrangThaiDonHangLoading,
  );
  const id_user = useSelector(state => state.users.user.id_user);

  // useEffect(() => {

  //   }, [isThayDoiTrangThaiDonHangLoading]);

  const fetchDonHang = () => {
    dispatch(getDonHangRequest({id_user: id_user}));
  };

  const [isVisible, setIsVisible] = React.useState({isVisible: false, id: ''});
  const handleShowModalHuyDon = id => {
    setIsVisible({isVisible: !isVisible.isVisible, id: id});
  };

  const handelComfirmCancel = id_don_hang => {
    setIsVisible({isVisible: !isVisible.isVisible, id: id_don_hang});
    dispatch(
      thayDoiTrangThaiDonHangRequest({
        id_don_hang: id_don_hang,
        ma_trang_thai: trang_thai_don_hang.da_huy,
      }),
    );
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      fetchDonHang();
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleMaTrangThai = ma_trang_thai => {
    switch (ma_trang_thai) {
      case 0:
        return 'Đã hủy';
      case 1:
        return 'Đang chờ xác nhận';
      case 2:
        return 'Đã xác nhận';
      case 3:
        return 'Đang giao hàng';
      case 4:
        return 'Đã giao hàng';
      case 5:
        return 'Đã đánh giá';
      default:
        return 'Đang xử lý';
    }
  };

  const handleTextTrangThai = ma_trang_thai => {
    switch (ma_trang_thai) {
      case 0:
        return 'Bạn có thể hủy đơn hàng vào lúc này';
      case 1:
        return 'Đơn hàng của bạn đang chờ xác nhận';
      case 2:
        return 'Đơn hàng đang được chuẩn bị';
      case 3:
        return 'Đơn hàng đang được giao đến bạn';
      default:
        return 'Đang xử lý';
    }
  };

  const DangGiaoItem = ({item, id}) => {
    // check có thể hủy đơn hàng hay không
    const isEnableCancel =
      item.ma_trang_thai == trang_thai_don_hang.da_xac_nhan ||
      item.ma_trang_thai == trang_thai_don_hang.dang_giao ||
      item.ma_trang_thai == trang_thai_don_hang.da_huy;

    // check đã hủy hàng hay chưa
    const isCanceled = item.ma_trang_thai == trang_thai_don_hang.da_huy;

    return (
      <View
        style={
          isCanceled ? styles.itemCanceledContainer : styles.itemContainer
        }>
        {/* Hinh anh, ten, so luong, size, dia chi */}
        <View style={styles.imageAndDescribeContainer}>
          <Image
            source={{uri: item.san_pham[0].hinh_anh_sp||'https://i.stack.imgur.com/y9DpT.jpg'}}
            style={styles.imageProduct}
          />

          {/* Ten, size, dia chi */}
          <View style={styles.sanPhamContainer}>
            <View style={styles.tenVaSizeContainer}>
              <Text style={styles.textName}>{item.dia_chi.nguoi_nhan}</Text>
              <Text style={styles.textLocation}>{item.dia_chi.so_nha} </Text>
            </View>
            <View>
              <Text style={styles.textHoanThanh}>
                {handleMaTrangThai(item.ma_trang_thai)}
              </Text>
            </View>
          </View>
        </View>

        {/* Thanh tien va so luong */}
        <View style={styles.thanhTienVaSoLuongContainer}>
          <Text style={styles.textSanPham}>{item.tong_san_pham} sản phẩm</Text>
          <View style={styles.thanhTienContainer}>
            <Text style={styles.textThanhTien}>Thành tiền: </Text>
            <Text style={styles.textTien}>
              {formatCurrency(item.thanh_tien)}
            </Text>
          </View>
        </View>

        {/* Don hang dang cho xac nhan */}
        <TouchableOpacity
          style={styles.donHangChoContainer}
          onPress={() =>
            navigation.navigate('OrderDetail', {id_don_hang: item._id})
          }>
          <Text style={styles.textDonHangDangChoXacNhan}>
            {handleTextTrangThai(item.ma_trang_thai)}{' '}
          </Text>
          <Icon name="angle-right" size={18} color={'#424141'} />
        </TouchableOpacity>

        {/* Neu co sai sot */}
        <View style={styles.saiSotContainer}>
          {isEnableCancel || (
            <>
              <Text style={styles.textSaiSot}>
                Nếu có sai sót bạn có thể hủy ngay bước này
              </Text>
              <TouchableOpacity
                style={styles.buttonCancel}
                disabled={isEnableCancel}
                onPress={() => handleShowModalHuyDon(item._id)}>
                <Text style={styles.textHuyDon}>Huỷ đơn</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={BACKGROUND_BUTTON_COLOR} />
      ) : (
        <>
          {data.length == 0 ? (
            <Text style={styles.textKhongCoDuLieu}>
              Không có đơn hàng đang giao
            </Text>
          ) : (
            <>
              <FlatList
                style={{marginVertical: 3}}
                data={data}
                renderItem={DangGiaoItem}
                keyExtractor={(item, index) => index.toString()}
                // ItemSeparatorComponent={() => <View style={{height: 10}} />}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              />
              {isThayDoiTrangThaiDonHangLoading && (
                <View style={styles.thayDoiLoading}>
                  <ActivityIndicator
                    size="large"
                    color={BACKGROUND_BUTTON_COLOR}
                  />
                </View>
              )}
              <ModalHuyDonHang
                isVisible={isVisible}
                toggleModal={handleShowModalHuyDon}
                onConfirm={idProduct => handelComfirmCancel(idProduct)}
              />
            </>
          )}
        </>
      )}
    </View>
  );
};

export default React.memo(DangGiao);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    marginHorizontal: 5,
    elevation: 10,
    backgroundColor: color_don_hang.cho_xac_nhan,
    borderRadius: 10,
    marginVertical: 3,
  },
  itemCanceledContainer: {
    padding: 10,
    marginHorizontal: 8,
    elevation: 10,
    backgroundColor: color_don_hang.da_huy,
    borderRadius: 10,
    marginVertical: 5,
  },
  imageProduct: {
    width: 50,
    height: 50,

    borderRadius: 10,
  },
  imageAndDescribeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  tenVaSizeContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    height: 40,
  },
  textName: {
    fontWeight: '600',
    fontSize: 17,
    color: 'black',
    marginBottom: 5,
  },
  textSize: {
    fontWeight: '500',
    fontSize: 15,
    color: '#E71D18',
  },
  textHoanThanh: {
    fontWeight: '400',
    fontSize: 16,
    color: '#E71D18',
  },
  textLocation: {
    fontWeight: '500',
    fontSize: 14,
    color: '#424141',
  },
  textGiaGoc: {
    fontWeight: '400',
    fontSize: 15,
    color: '#575656',
  },
  textGiaTien: {
    fontWeight: '400',
    fontSize: 15,
    color: 'black',
  },
  textThanhTien: {
    fontWeight: '400',
    fontSize: 15,
    color: '#575656',
  },
  textTien: {
    fontWeight: '400',
    fontSize: 16,
    color: '#EA5015',
  },
  textHuyDon: {
    fontWeight: '500',
    fontSize: 14,
    color: 'white',
  },
  strikethrough: {
    textDecorationColor: 'red', // You can change the color of the line
    textDecorationStyle: 'solid', // You can use 'dotted' or 'dashed' for different styles
  },
  amount: {
    textDecorationLine: 'line-through', // Add a line-through text decoration
  },
  textDonHangDangChoXacNhan: {
    fontWeight: '400',
    fontSize: 15,
    color: '#424141',
  },
  textSaiSot: {
    fontWeight: '400',
    fontSize: 13,
    color: '#2F2E2E',
    width: '80%',
  },
  textGiaBan: {
    fontWeight: '400',
    fontSize: 15,
    color: '#EA5015',
    marginLeft: 10,
  },
  textSoLuong: {
    fontWeight: '400',
    fontSize: 15,
    color: 'black',
  },
  textSoLuongSo: {
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
  },
  giaTienContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 7,
  },
  donGiaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  giaTienVaSoLuongContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  thanhTienContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  thanhTienVaSoLuongContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.2,
    marginTop: 10,
    paddingTop: 10,
  },
  donHangChoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.2,
    marginTop: 10,
    paddingVertical: 10,
  },
  saiSotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.2,
    paddingTop: 5,
  },
  sanPhamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,

    flex: 1,
  },
  buttonCancel: {
    backgroundColor: color_don_hang.huy_don,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  buttonDisableCancel: {
    backgroundColor: color_don_hang.da_huy_don_hang,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  soLuongContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  giaTienVaGiaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textSanPham: {
    fontWeight: '400',
    fontSize: 15,
    color: 'black',
  },
  textKhongCoDuLieu: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 15,
    color: BACKGROUND_BUTTON_COLOR,
    marginTop: 20,
  },
  thayDoiLoading: {
    position: 'absolute',
    top: '35%',
    left: 0,
    bottom: 0,
    right: 0,
  },
});
