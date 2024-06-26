import React, {useCallback, useMemo, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {BACKGROUND_BUTTON_COLOR, statusBarHeight} from '../../../utils/contanst';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';
import moment from 'moment';
import {useSelector} from 'react-redux';
import Image from 'react-native-fast-image';
import ImageProgress from 'react-native-image-progress';
import {CircleSnail} from 'react-native-progress';

const {width, height} = Dimensions.get('window');

const BottomDanhGia = ({isVisible, onClose}) => {
  const data = useSelector(state => state.chi_tiet_san_pham.data.danh_gia);

  useEffect(() => {
    if (isVisible) {
      bottomSheetDanhGiaRef.current?.expand();
    } else {
      bottomSheetDanhGiaRef.current?.close();
    }
  }, [isVisible]);

  // ref
  const bottomSheetDanhGiaRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => [height- statusBarHeight], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    if (index === -1) {
      onClose();
    }
  }, []);

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
            <BottomSheetFlatList
              data={item.hinh_anh_danh_gia}
              renderItem={renderHinhAnhDanhGia}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              //   contentContainerStyle={{ width: '100%' }}
            />
          </View>
          {/* thoi gian danh gia */}
          <Text style={styles.textThoiGianDanhGia}>
            {moment(item.ngay_danh_gia).utc().format('DD-MM-YYYY HH:mm')}
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

  // renders
  return (
    // <GestureHandlerRootView style={styles.container}>
    <BottomSheet
      ref={bottomSheetDanhGiaRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      backgroundStyle={{backgroundColor: '#f1f1f1'}}>
      <View style={styles.contentContainer}>
        <Text style={styles.textTatCaDanhGia}>Tất cả đánh giá</Text>
        {data.length === 0 ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.textChuaCoDanhGia}>Chưa có đánh giá nào</Text>
          </View>
        ) : (
          <BottomSheetFlatList
            data={[...data].reverse()}
            renderItem={RenderChiTietDanhGia}
            keyExtractor={item => item._id.toString()}
          />
        )}
      </View>
    </BottomSheet>
    //  </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
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
    marginVertical: 3,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
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
  textTatCaDanhGia: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginRight: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textChuaCoDanhGia: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default BottomDanhGia;
