import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  BACKGROUND_BUTTON_COLOR,
  vietnamTimeZone,
} from '../../../utils/contanst';
import {lamTronSo} from '../../../utils/lamTronSo';
import {useSelector} from 'react-redux';
import moment from 'moment';
import ImageProgress from 'react-native-image-progress';
import {CircleSnail} from 'react-native-progress';
import Image from 'react-native-fast-image';

const DanhSachDanhGia = ({onOpenDanhGia}) => {
  const data = useSelector(state => state.chi_tiet_san_pham.data);

  const renderHinhAnhDanhGia = ({item}) => {
    return (
      <View style={{paddingRight: 7}}>
        <ImageProgress
          source={{uri: item.ten_hinh_anh}}
          style={styles.imageDanhGia}
          indicator={CircleSnail}
          indicatorProps={{
            size: 20,
            color: 'rgba(255, 165, 0, 1)',
            unfilledColor: 'rgba(200, 200, 200, 0.2)',
          }}
        />
      </View>
    );
  };

  const RenderChiTietDanhGia = ({item}) => {
    return (
      /* avatar & content */
      <View style={styles.chiTietDanGiaContainer}>
        <Image
          source={{
            uri:
              item.hinh_anh_user ||
              'https://public-coffeelove.s3.ap-southeast-1.amazonaws.com/public/blank-profile-picture-973460_1280.png',
          }}
          style={styles.avatar}
        />
        {/* ten, so sao, noi dung, hinh anh */}
        <View>
          {/* tên user đánh giá api chưa có */}
          <Text style={styles.textName}>{item.ten_user}</Text>
          <View style={[styles.danhGiaSaoContainer, {marginVertical: 7}]}>
            <RenderSaoDanhGia number={item.so_sao} />
          </View>
          <Text style={styles.textNoiDung}>{item.danh_gia}</Text>
          {/* hinh anh danh gia */}
          <View
            style={{
              marginVertical: 15,
              width: Dimensions.get('window').width - 115,
            }}>
            <FlatList
              data={item.hinh_anh_danh_gia}
              renderItem={renderHinhAnhDanhGia}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              //   contentContainerStyle={{ width: '100%' }}
            />
          </View>
          {/* thoi gian danh gia */}
          <Text style={styles.textThoiGianDanhGia}>
            {moment(item.ngay_danh_gia).utc().format('DD/MM/YYYY HH:mm')}
          </Text>
          {/* separate line */}
          <View style={styles.separateLine} />
        </View>
      </View>
    );
  };

  const RenderSaoDanhGia = ({number}) => {
    const itemsArray = Array.from({length: 5}, (v, i) => i + 1);
    return (
      <>
        {itemsArray.map((item, index) => {
          return (
            <Icon
              key={index}
              name="star"
              solid={item <= number ? true : false}
              size={16}
              color={'#FC9702'}
              style={{paddingRight: 5, paddingLeft: 2}}
            />
          );
        })}
      </>
    );
  };

  return (
    <View>
      <View style={styles.danhGiaSanPhamContainer}>
        {/* danh gia, sao, vote, xem tat ca */}
        <View style={styles.danhGiaXemTatCaContainer}>
          {/* danh gia, so sao */}
          <View>
            <Text style={styles.textDanhGia}>Đánh giá</Text>
            {/* danh gia sao */}
            <View style={styles.danhGiaSaoContainer}>
              <View style={{width: 'auto'}}>
                {/* <FlatList
                  data={dataDanhGia}
                  renderItem={renderSaoDanhGia}
                  horizontal={true}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                /> */}
              </View>
              <Text style={styles.textSao}>{lamTronSo(data.tong_sao)}/5</Text>
              <Icon name="star" solid size={20} color={'#FC9702'} />
              <Text style={styles.textSao}> ({data.so_luong_danh_gia})</Text>
            </View>
          </View>
          {/* tat ca danh gia, arrow */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => onOpenDanhGia()}>
            <Text style={styles.textTatCaDanhGia}>Tất cả đánh giá</Text>
            <Icon
              name="angle-right"
              size={20}
              color={BACKGROUND_BUTTON_COLOR}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* separate line */}
      <View style={styles.separateLine} />

      {/* danh sach danh gia */}
      {/* <FlatList
        data={dataChiTietDanhGia}
        renderItem={renderChiTietDanhGia}
        keyExtractor={item => item.id}
      /> */}
      {[...data.danh_gia]
        .reverse()
        .slice(0, 3)
        .map(item => {
          return (
            <View key={item._id}>
              <RenderChiTietDanhGia item={item} />
            </View>
          );
        })}
    </View>
  );
};

export default DanhSachDanhGia;

const styles = StyleSheet.create({
  danhGiaSanPhamContainer: {
    marginTop: 30,
  },
  danhGiaSaoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textSao: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginLeft: 5,
    marginRight: 3,
  },
  textDanhGia: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',

    marginBottom: 5,
  },
  textTatCaDanhGia: {
    fontSize: 15,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: '500',
    marginRight: 5,
  },
  danhGiaXemTatCaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 20,
  },
  separateLine: {
    height: 1,
    width: '95%',
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 10,
  },
  imageDanhGia: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderColor: 'gray',
    borderWidth: 0.2,
  },
  chiTietDanGiaContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 12,
  },
  textName: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  textNoiDung: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    width: 310,
  },
  textThoiGianDanhGia: {
    fontSize: 13,
    color: 'black',
    fontWeight: '400',
  },
});
