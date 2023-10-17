import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome6';

const DanhGia = () => {
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
  const DanhGiaItem = ({item, id}) => {
    return (
      <SafeAreaView style={styles.itemContainer}>
        {/* Hinh anh, ten, so luong, size, dia chi */}
        <View style={styles.imageAndDescribeContainer}>
          <Image
            source={require('../../assets/images/americano.png')}
            style={styles.imageProduct}
          />

          {/* Ten, size, dia chi */}
          <View style={styles.sanPhamContainer}>
            <View style={styles.tenVaSizeContainer}>
              <Text style={styles.textName}>{item.name}</Text>

              {/* <Text style={styles.textSoLuong}>Đánh giá</Text> */}
              <View style={styles.fiveStars}>
                <Icon name="star" solid size={20} color={'#FF8E00'} />
                <Icon name="star" solid size={20} color={'#FF8E00'} />
                <Icon name="star" solid size={20} color={'#FF8E00'} />
                <Icon name="star" solid size={20} color={'#FF8E00'} />
                <Icon name="star" solid size={20} color={'#FF8E00'} />
              </View>
            </View>
            <View>
              <Text style={styles.textLocation}>
                SL: 1{'   '}Size: L {'  '} 113 Quang Trung{' '}
              </Text>
            </View>
          </View>
        </View>

        {/* Gia tien va so luong */}

        {/* Thanh tien */}
        <View style={styles.thanhTienContainer}>
          <Text style={styles.textDanhGia}>Đánh giá: </Text>
          <Text style={styles.textNoiDung}>Ngon vãi luôn bạn ơi </Text>
        </View>
        {/* Thanh tien */}
        <View style={[styles.thanhTienContainer, {paddingBottom: 5}]}>
          <Text style={styles.textDanhGia}>Phản hồi: </Text>
          <Text style={styles.textNoiDung}>Cảm ơn bạn đã sử dụng và phản hồi dịch vụ của Coffee.Love</Text>
        </View>

        {/* Neu co sai sot */}
        {/* <View style={styles.saiSotContainer}>
          <Text style={styles.textSaiSot}>Mua lại sản phẩm?</Text>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text style={styles.textHuyDon}>Mua lại</Text>
          </TouchableOpacity>
        </View> */}
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginVertical: 10}}
        data={dataChoXacNhan}
        renderItem={DanhGiaItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
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
    flex: 1,
  },
  tenVaSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
});
