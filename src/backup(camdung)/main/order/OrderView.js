import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import ChoXacNhanItem from './ChoXacNhanItem';
// import ChoLayHangItem from './ChoLayHangItem';
// import ChoGiaoHangView from './ChoGiaoHangView';
// import DaGiaoItem from './DaGiaoItem';
// import DaHuyItem from './DaHuyItem';
// import DanhGiaItem from './DanhGiaItem';
// import RenderOrderItem from '../newOrderDetail/RenderOrderItem';
// import OrderDetail from '../newOrderDetail/OrderDetail';
import Icon from 'react-native-vector-icons/FontAwesome6';

const OrderView = ({navigation}) => {
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
  const ChoXacNhanItem = ({item, id,}) => {
    // const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('OrderDetail')}
        style={styles.container}>
        {/* Hinh anh, ten, so luong, size, dia chi */}
        <View style={styles.imageAndDescribeContainer}>
          <Image
            source={require('../../../assets/images/americano.png')}
            style={styles.imageProduct}
          />
  
          {/* Ten, size, dia chi */}
          <View style={styles.sanPhamContainer}>
            <View style={styles.tenVaSizeContainer}>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textSize}>Size: {item.size}</Text>
            </View>
            <View>
              <Text style={styles.textLocation}>{item.location}</Text>
            </View>
          </View>
        </View>
  
        {/* Gia tien va so luong */}
  
        <View style={styles.giaTienContainer}>
          <View style={styles.giaTienVaGiaContainer}>
            <Text style={styles.textGiaTien}>Giá tiền</Text>
            <View style={styles.giaTienVaSoLuongContainer}>
              <View style={styles.donGiaContainer}>
                <Text style={[styles.textGiaGoc, styles.amount]}>
                  {item.price}₫
                </Text>
                <Text style={styles.textGiaBan}>{item.sale}₫</Text>
              </View>
            </View>
          </View>
          {/* So luong */}
          <View style={styles.soLuongContainer}>
            <Text style={styles.textSoLuong}>Số lượng</Text>
            <Text style={styles.textSoLuongSo}>x{item.quantity}</Text>
          </View>
        </View>
  
        {/* Thanh tien */}
        <View style={styles.thanhTienContainer}>
          <Text style={styles.textThanhTien}>Thành tiền</Text>
          <Text style={styles.textTien}>{item.total}₫</Text>
        </View>
  
        {/* Don hang dang cho xac nhan */}
        <View style={styles.donHangChoContainer}>
          <Text style={styles.textDonHangDangChoXacNhan}>
            Đơn hàng đang chờ xác nhận
          </Text>
          <Icon name="angle-right" size={20} color={'#9F580A'} />
        </View>
  
        {/* Neu co sai sot */}
        <View style={styles.saiSotContainer}>
          <Text style={styles.textSaiSot}>
            Nếu có sai sót, bạn có thể hủy lúc này
          </Text>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text style={styles.textHuyDon}>Hủy đơn</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container1}>
      <FlatList
        style={{marginVertical: 10, paddingHorizontal: 6}}
        data={dataChoXacNhan}
        renderItem={ChoXacNhanItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
    </View>
  );
};

export default OrderView;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fcf9f6',
  },
  
    container: {
      flex: 1,
      padding: 10,
      elevation: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 10,
    },
    imageProduct: {
      width: 60,
      height: 60,
      width: '20%',
      borderRadius: 10,
    },
    imageAndDescribeContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
    },
    tenVaSizeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
    },
    textName: {
      fontWeight: '600',
      fontSize: 16,
      color: 'black',
    },
    textSize: {
      fontWeight: '500',
      fontSize: 15,
      color: '#292828',
    },
    textLocation: {
      fontWeight: '400',
      fontSize: 14,
      color: '#575656',
    },
    textLocation: {
      fontWeight: '400',
      fontSize: 14,
      color: '#575656',
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
      fontWeight: '600',
      fontSize: 15,
      color: '#575656',
    },
    textTien: {
      fontWeight: '600',
      fontSize: 16,
      color: '#EA5015',
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
      color: 'black',
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
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 10,
      width: '80%',
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
  
});
