import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconSolid from 'react-native-vector-icons/FontAwesome';

const DanhGiaItem = ({item, id}) => {
  return (
    <SafeAreaView style={styles.container}>
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
        {/* <View style={styles.giaTienVaGiaContainer}>
          <Text style={styles.textGiaTien}>Giá tiền</Text>
          <View style={styles.giaTienVaSoLuongContainer}>
            <View style={styles.donGiaContainer}>
              <Text style={[styles.textGiaGoc, styles.amount]}>
                {item.price}₫
              </Text>
              <Text style={styles.textGiaBan}>{item.sale}₫</Text>
            </View>
          </View>
        </View> */}
        {/* So luong */}
        <View style={styles.soLuongContainer}>
          {/* <Text style={styles.textSoLuong}>Đánh giá</Text> */}
          <View style={styles.fiveStars}>
            <Icon name="star" solid size={20} color={'#FF8E00'} />
            <Icon name="star" solid size={20} color={'#FF8E00'} />
            <Icon name="star" solid size={20} color={'#FF8E00'} />
            <Icon name="star" solid size={20} color={'#FF8E00'} />
            <Icon name="star" solid size={20} color={'#FF8E00'} />
          </View>
        </View>
      </View>

      {/* Thanh tien */}
      <View style={styles.thanhTienContainer}>
        <Text style={styles.textThanhTien}>Đánh giá:</Text>
        <Text style={styles.textTien}>Ngon vãi luôn bạn ơi</Text>
      </View>
      {/* Thanh tien */}
      <View style={[styles.thanhTienContainer, {paddingBottom: 5}]}>
        <Text style={styles.textThanhTien}>Phản hồi:</Text>
        <Text style={styles.textTien}>Ngon vãi luôn bạn ơi</Text>
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

export default DanhGiaItem;

const styles = StyleSheet.create({
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
    fontWeight: '500',
    fontSize: 15,
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
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '80%',
  },
});
