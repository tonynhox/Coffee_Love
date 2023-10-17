import {StyleSheet, Text, View, FlatList,ScrollView} from 'react-native';
import React from 'react';
import RenderOrderItem from './RenderOrderItem';
import TheoDoiDonHang from './TheoDoiDonHang';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
// import { ScrollView } from 'react-native-virtualized-view';

const OrderDetail = () => {
  const donhang = [
    {id: 1, tensanpham: 'Americano', soluong: 1, size: 'S', gia: 100000},
    {id: 2, tensanpham: 'Americano', soluong: 1, size: 'S', gia: 100000},
    {id: 3, tensanpham: 'Americano', soluong: 1, size: 'S', gia: 100000},
    {id: 10, tensanpham: 'Americano', soluong: 1, size: 'S', gia: 100000},
    {id: 20, tensanpham: 'Americano', soluong: 1, size: 'S', gia: 100000},
    {id: 33, tensanpham: 'Americano', soluong: 1, size: 'S', gia: 100000},
  ];
  return (

    <ScrollView style={styles.container}>
      <View style={styles.theoDoiDonHangContainer}>
        <TheoDoiDonHang />
      </View>

      {/* separate line */}
      <View style={styles.separateLine} />

      {/* Dia chi giao hang */}
      <View style={styles.thongTinDiaChiContainer}>
        <Text style={styles.textThongTinDiaChi}>
          Thông tin - địa chỉ giao hàng
        </Text>
        <Text style={styles.textThongTin}>Nguyễn Văn A</Text>
        <Text style={styles.textThongTin}>0123456789</Text>
        <Text
          style={styles.textThongTin}
          numberOfLines={2}
          ellipsizeMode="tail">
          Địa chỉ: 123 Nguyễn Văn A, phường Bình Thọ, quận Thủ Đức, TP.HCM
        </Text>
      </View>

      {/* separate line */}
      <View style={styles.separateLine} />

      {/* Don hang */}
      <View>
        <Text style={styles.textDonHang}>Đơn hàng</Text>
        <FlatList
          // height={210}
          scrollEnabled={false} 
          data={donhang}
          renderItem={({item}) => <RenderOrderItem item={item} />}
          keyExtractor={item => item.id}
        />
        <Text style={[styles.textTongSanPham, {marginTop: 10}]}>
          Tổng sản phẩm: 3
        </Text>
      </View>

      {/* separate line */}
      <View style={styles.separateLine} />

      {/* chi phi giao hang */}
      <View>
        {/* phi giao hang container */}
        <View style={styles.phiGiaoHangContainer}>
          <Text style={styles.textPhiGiaoHang}>Phí giao hàng</Text>
          <Text style={styles.textPhiGiaoHang}>15.000₫</Text>
        </View>

        {/* phi giam gia container */}
        <View style={[styles.phiGiaoHangContainer, {marginTop: 5}]}>
          <Text style={styles.textPhiGiaoHang}>Giảm giá</Text>
          <Text style={styles.textPhiGiaoHang}>-10.000₫</Text>
        </View>
      </View>

      {/* separate line */}
      <View style={styles.separateLine} />

      {/* tong tien container */}
      <View style={styles.tongTienContainer}>
        <Text style={styles.textTongTien}>Tổng</Text>
        <Text style={styles.textTongTien}>100.100₫</Text>
      </View>

      {/* Hinh thuc thanh toan */}
      <View>
        <Text style={styles.textThanhToanKhiNhanHang}>
          (Thanh toán khi nhận hàng)
        </Text>
      </View>

      {/* separate line */}
      <View style={styles.separateLine} />

      {/* chu thich */}
      <View>
        <Text style={styles.textChuThich}>Chú thích</Text>
        {/* chu thich view */}
        <View style={styles.chuThichContainer}>
          <Text style={styles.textLoiNhan}>Lời nhắn của khách hàng</Text>
        </View>
      </View>
    </ScrollView>

  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    paddingHorizontal: 12,
  },
  thongTinDiaChiContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    color: '#404040',
    paddingVertical: 2,
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
