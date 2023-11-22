import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  BACKGROUND_BUTTON_COLOR,
  color_don_hang,
} from '../../../../utils/contanst';
import {getDonHangRequest} from '../../../../redux/reducers/slices/donHangSlice';

const DanhGia = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const data = useSelector(state => state.don_hang.dataDanhGia);
  const isLoading = useSelector(state => state.don_hang.isLoading);
  const id_user = useSelector(state => state.users.user.id_user);

  const dataRateStar = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  const [start, setStart] = useState(4);

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

  const [listHeight, setListHeight] = useState(null); // State to store the height of the FlatList

  const calculateListHeight = event => {
    setListHeight(event.nativeEvent.layout.height);
  };

  const RateStar = ({item, index, sao}) => {
    const selected = sao >= item.id ? true : false;
    return (
      <View style={styles.startContainer} onPress={() => setStart(item.id)}>
        <Icon solid={selected} name="star" size={20} color="#E98001" />
      </View>
    );
  };

  const DanhGiaItem = ({item, id}) => {
    const so_sao = item.so_sao;
    const isDanhGia = item.ma_trang_thai === 4;
    return (
      <View style={styles.itemContainer}>
        {/* Hinh anh, ten, so luong, size, dia chi */}
        <View style={styles.imageAndDescribeContainer}>
          <Image
            source={{
              uri:
                item.san_pham[0].hinh_anh_sp ||
                'https://i.stack.imgur.com/y9DpT.jpg',
            }}
            style={styles.imageProduct}
          />

          {/* Ten, size, dia chi */}
          <View style={styles.sanPhamContainer}>
            <View style={styles.tenVaSizeContainer}>
              <Text style={styles.textName}>{item.dia_chi.nguoi_nhan}</Text>

              {/* <Text style={styles.textSoLuong}>Đánh giá</Text> */}
              <View onLayout={calculateListHeight}>
                <FlatList
                  horizontal={true}
                  data={dataRateStar}
                  renderItem={({item, index}) => (
                    <RateStar item={item} index={index} sao={so_sao} />
                  )}
                  keyExtractor={(item, index) => item.id.toString()}
                />
              </View>
            </View>
            <View>
              <Text style={styles.textLocation}>
                SL: {item.tong_san_pham}
                {'   '}Size: {item.san_pham[0].size} {'  '}{' '}
                {item.dia_chi.so_nha}{' '}
              </Text>
            </View>
          </View>
        </View>

        {/* Gia tien va so luong */}

        {isDanhGia ? (
          <>
          <View style={[styles.thanhTienContainer, {justifyContent:'space-between'}]}>
              <Text style={styles.textDanhGia}>Bạn vẫn chưa đánh giá đơn hàng này </Text>
              <TouchableOpacity
              style={styles.btnDanhGia}
              >
              <Text style={styles.textBtnDanhGia}>Đánh giá</Text>
              </TouchableOpacity>
            </View></>
        ) : (
          <>
            {/* Thanh tien */}
            <View style={styles.thanhTienContainer}>
              <Text style={styles.textDanhGia}>Đánh giá: </Text>
              <Text style={styles.textNoiDung}>{item.danh_gia}</Text>
            </View>
            {/* Thanh tien */}
            <View style={[styles.thanhTienContainer, {paddingBottom: 5}]}>
              <Text style={styles.textDanhGia}>Phản hồi: </Text>
              <Text style={styles.textNoiDung}>
                Cảm ơn bạn đã sử dụng và phản hồi dịch vụ của Coffee.Love
              </Text>
            </View>
          </>
        )}

        {/* Neu co sai sot */}
        {/* <View style={styles.saiSotContainer}>
          <Text style={styles.textSaiSot}>Mua lại sản phẩm?</Text>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text style={styles.textHuyDon}>Mua lại</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={BACKGROUND_BUTTON_COLOR} />
      ) : (
        <>
          {data.length === 0 ? (
            <Text style={styles.textKhongCoDuLieu}>Không có đánh giá</Text>
          ) : (
            <FlatList
              style={{marginVertical: 3}}
              data={data}
              renderItem={DanhGiaItem}
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

export default DanhGia;

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
    flex: 1,
  },
  tenVaSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flex: 1,
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
    color: '#292828',
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
  textDanhGia: {
    fontWeight: '600',
    fontSize: 15,
    color: '#EA5015',
  },
  textBtnDanhGia:{
      fontWeight: '500',
      fontSize: 14,
      color: 'white',
  },
  textNoiDung: {
    fontWeight: '500',
    fontSize: 14,
    color: '#454444',
    width: '85%',
  },
  textHuyDon: {
    fontWeight: '400',
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
    fontWeight: '500',
    fontSize: 15,
    color: 'red',
  },
  textSaiSot: {
    fontWeight: '400',
    fontSize: 15,
    color: '#575656',
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
    fontWeight: '500',
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10,
    flex: 1,
  },
  buttonCancel: {
    backgroundColor: '#EA5015',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0.5,
    borderColor: '#FC1903',
  },
  soLuongContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
  },
  giaTienVaGiaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  fiveStars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textKhongCoDuLieu: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 15,
    color: BACKGROUND_BUTTON_COLOR,
    marginTop: 20,
  },
  startContainer: {
    paddingVertical: 5,
    paddingHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDanhGia: {
    backgroundColor: '#D97700',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
});
