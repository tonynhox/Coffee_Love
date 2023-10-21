import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import React, {useState, useCallback} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {formatCurrency} from '../../../../utils/formatCurrency';
import {useDispatch, useSelector} from 'react-redux';
import {
  BACKGROUND_BUTTON_COLOR,
  color_don_hang,
} from '../../../../utils/contanst';
import {getDonHangRequest} from '../../../../redux/reducers/slices/donHangSlice';

const LichSu = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(state => state.don_hang.dataLichSu);
  const isLoading = useSelector(state => state.don_hang.isLoading);
  const id_user = useSelector(state => state.users.user.id_user);

  const fetchDonHang = () => {
    dispatch(getDonHangRequest({id_user: id_user}));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchDonHang();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const DaGiaoItem = ({item, id}) => {
    return (
      <View style={styles.itemContainer}>
        {/* Hinh anh, ten, so luong, size, dia chi */}
        <View style={styles.imageAndDescribeContainer}>
          <Image
            source={require('../../../../assets/images/americano.png')}
            style={styles.imageProduct}
          />

          {/* Ten, size, dia chi */}
          <View style={styles.sanPhamContainer}>
            <View style={styles.tenVaSizeContainer}>
              <Text style={styles.textName}>{item.dia_chi.nguoi_nhan}</Text>
              <Text style={styles.textLocation}>
                SL: 1{'   '}Size: L {'  '} 113 Quang Trung{' '}
              </Text>
            </View>
            <View>
              <Text style={styles.textHoanThanh}>Hoàn thành</Text>
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
          onPress={() => navigation.navigate('OrderDetail', {item: item._id})}>
          <Text style={styles.textDonHangDangChoXacNhan}>
            Đơn hàng của bạn đã được giao thành công
          </Text>
          <Icon name="angle-right" size={20} color={'#424141'} />
        </TouchableOpacity>

        {/* Neu co sai sot */}
        <View style={styles.saiSotContainer}>
          <Text style={styles.textSaiSot}>
            Xin hãy đánh giá để chúng tôi có thêm động lực và cải thiện sản phẩm
          </Text>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text style={styles.textHuyDon}>Đánh giá</Text>
          </TouchableOpacity>
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
              Không có lịch sử đơn hàng
            </Text>
          ) : (
            <FlatList
              style={{marginVertical: 3}}
              data={data}
              renderItem={DaGiaoItem}
              keyExtractor={(item, index) => index.toString()}
              // ItemSeparatorComponent={() => <View style={{height: 10}} />}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          )}
        </>
      )}
    </View>
  );
};

export default LichSu;

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
    backgroundColor: '#D97700',
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
});
