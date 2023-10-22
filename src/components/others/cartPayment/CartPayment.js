import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RenderOrderItem from './RenderOrderItem';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
// import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
const diachiArr = [
  {
    ten_dia_chi: 'yolo',
    so_dien_thoai: '090909090',
    so_nha: '20',
    tinh: 'dong nai',
    mac_dinh: 0,
    status: 1,
    _id: '65316033ab77492e0b68df1b',
    nguoi_nhan: 'cac',
  },
  {
    ten_dia_chi: 'lagi',
    so_dien_thoai: '142313123',
    so_nha: '20',
    tinh: 'binh thuan',
    mac_dinh: 1,
    status: 1,
    _id: '65316033ab77492e0b68df1b',
    nguoi_nhan: 'huy',
  },
];
const CartPayment = () => {

  const [diaChi, setDiaChi] = useState({});
  useEffect(() => {
    if (diachiArr.length > 0) {
      const defaultAddress = diachiArr.find(item => item.mac_dinh === 1);
      setDiaChi(defaultAddress);
    }
  }, []);

  //data giỏ hàng
  const data = useSelector(state => state.cartPayment.data);

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
          <Text style={styles.textThongTin}>{diaChi?.nguoi_nhan}</Text>
          <Text style={styles.textThongTin}>{diaChi?.so_dien_thoai}</Text>
          <Text
            style={[styles.textThongTin, {width: '86%'}]}
            numberOfLines={2}
            ellipsizeMode="tail">
            Địa chỉ: {diaChi?.so_nha}, {diaChi?.tinh}
          </Text>
        </View>
      </TouchableOpacity>

      {/* separate line */}
      <View
        style={[styles.separateLine, {marginLeft: -20, width: '110%', left: 0}]}
      />

      {/* Don hang */}
      <View>
        <Text style={styles.textDonHang}>Đơn hàng</Text>
        {/* <FlatList
          // height={210}
          scrollEnabled={false} 
          data={data}
          renderItem={RenderOrderItem}
          keyExtractor={item => item._id}
        /> */}
        {data.map((item, index) => {
          return <RenderOrderItem key={index} item={item} index={index} />;
        })}
        {/* <Text style={[styles.textTongSanPham, {marginTop: 10}]}>
          Tổng sản phẩm: 3
        </Text> */}
      </View>

      {/* separate line
      <View style={styles.separateLine} /> */}
      <View
        style={[styles.separateLine, {marginLeft: -20, width: '110%', left: 0}]}
      />

      {/* tong tien container */}
      {/* <View style={styles.tongTienContainer}>
        <Text style={styles.textTongTien}>Tổng</Text>
        <Text style={styles.textTongTien}>100.100₫</Text>
      </View> */}
      {/* <Text style={styles.textDonHang}>Tổng cộng</Text> */}

      {/* chi phi giao hang */}
      <View>
        <Text style={styles.textDonHang}>Tổng cộng</Text>

        <View style={styles.phiGiaoHangContainer}>
          <Text style={styles.textPhiGiaoHang}>Thành tiền</Text>
          <Text style={styles.textPhiGiaoHang}>15.000₫</Text>
        </View>

        {/* phi giao hang container */}
        <View style={styles.phiGiaoHangContainer}>
          <Text style={styles.textPhiGiaoHang}>Phí giao hàng</Text>
          <Text style={styles.textPhiGiaoHang}>15.000₫</Text>
        </View>

        {/* phi giam gia container */}
        <TouchableOpacity style={[styles.phiGiaoHangContainer, {marginTop: 5}]}>
          {/* <Text style={[styles.textPhiGiaoHang]}>Khuyến mãi</Text>
          <Text style={styles.textPhiGiaoHang}>-10.000₫</Text> */}
          <Text
            style={[
              styles.textPhiGiaoHang,
              {fontSize: 13.5, color: 'blue', fontWeight: '500'},
            ]}>
            Chọn khuyến mãi/đổi điểm
          </Text>
          <Icon name="chevron-right" size={18} color="blue" />
        </TouchableOpacity>
      </View>

      {/* separate line */}
      {/* <View style={styles.separateLine} /> */}

      {/* tong tien container */}
      <View style={styles.tongTienContainer}>
        <Text style={styles.textTongTien}>Tổng</Text>
        <Text style={styles.textTongTien}>100.100₫</Text>
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
};

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
