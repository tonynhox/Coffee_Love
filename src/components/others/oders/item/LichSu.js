import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const LichSu = () => {

  const navigation = useNavigation();

  const dataChoXacNhan = [
    {
      id: 1,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
    {
      id: 2,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
    {
      id: 3,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
    {
      id: 4,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
    {
      id: 5,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
  ];
  const DaGiaoItem = ({item, id}) => {
    return (
      <TouchableOpacity 
        onPress={() => navigation.navigate('OrderDetail', {item: item})}
        style={styles.itemContainer}>
        {/* Hinh anh, ten, so luong, size, dia chi */}
        <View style={styles.imageAndDescribeContainer}>
          <Image
            source={require('../../../../assets/images/americano.png')}
            style={styles.imageProduct}
          />

          {/* Ten, size, dia chi */}
          <View style={styles.sanPhamContainer}>
            <View style={styles.tenVaSizeContainer}>
              <Text style={styles.textName}>{item.name}</Text>
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
          <Text style={styles.textSanPham}>5 sản phẩm</Text>
          <View style={styles.thanhTienContainer}>
            <Text style={styles.textThanhTien}>Thành tiền: </Text>
            <Text style={styles.textTien}>{item.total}VND</Text>
          </View>
        </View>

        {/* Don hang dang cho xac nhan */}
        <View style={styles.donHangChoContainer}>
          <Text style={styles.textDonHangDangChoXacNhan}>Đơn hàng của bạn đã được giao thành công</Text>
          <Icon name="angle-right" size={20} color={'#424141'} />
        </View>

        {/* Neu co sai sot */}
        <View style={styles.saiSotContainer}>
          <Text style={styles.textSaiSot}>
            Xin hãy đánh giá để chúng tôi có thêm động lực và cải thiện sản phẩm
          </Text>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text style={styles.textHuyDon}>Đánh giá</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginVertical: 10}}
        data={dataChoXacNhan}
        renderItem={DaGiaoItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
    </View>
  );
};

export default LichSu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer:{
    padding: 10,
    marginHorizontal: 10,
    paddingBottom: 10,
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
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
});