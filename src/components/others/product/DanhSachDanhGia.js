import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import moment from 'moment';

const DanhSachDanhGia = () => {
  const dataDanhGia = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  const dataHinhAnhDanhGia = [{id: 1}, {id: 2}, {id: 3}];

  const dataChiTietDanhGia = [
    {
      id: 1,
      name: 'MustFapToLive',
      content:
        'Sản phẩm tốt, giá hợp lý, quản lý thì xinh, nhân viên nhiệt tình, thằng code cái giao diện này thì đẹp trai, người đâu mà vừa đẹp trai vừa thông mình vừa giỏi giang, không có người yêu đúng là quá phí, phải tôi tôi húp vội',
    },
    {id: 2, name: 'ChaosTakeTheWorld', content: 'Uống ngon, giá hợp lý'},
    {id: 3, name: 'MustFapToLive', content: 'Sản phẩm tốt, giá hợp lý'},

  ];

  const renderHinhAnhDanhGia = ({item}) => {
    return (
      <View>
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={styles.imageDanhGia}
        />
      </View>
    );
  };

  const RenderChiTietDanhGia = ({item}) => {
    return (
      /* avatar & content */
      <View style={styles.chiTietDanGiaContainer}>
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={styles.avatar}
        />
        {/* ten, so sao, noi dung, hinh anh */}
        <View>
          <Text style={styles.textName}>{item.name}</Text>
          <View style={[styles.danhGiaSaoContainer, {marginVertical: 7}]}>
            <FlatList
              data={dataDanhGia}
              renderItem={renderSaoDanhGia}
              horizontal={true}
              keyExtractor={item => item.id}
            />
          </View>
          <Text style={styles.textNoiDung}>{item.content}</Text>
          {/* hinh anh danh gia */}
          <View style={{marginVertical: 15}}>
            <FlatList
              data={dataHinhAnhDanhGia}
              renderItem={renderHinhAnhDanhGia}
              horizontal={true}
              keyExtractor={item => item.id}
            />
          </View>
          {/* thoi gian danh gia */}
          <Text style={styles.textThoiGianDanhGia}>
            {moment().format('DD-MM-YYYY HH:mm')}
          </Text>
          {/* separate line */}
          <View style={styles.separateLine} />
        </View>
      </View>
    );
  };
  const renderSaoDanhGia = () => {
    return (
      <View>
        <Icon
          name="star"
          solid
          size={16}
          color={'#FC9702'}
          style={{paddingRight: 5, paddingLeft: 2}}
        />
      </View>
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
                <FlatList
                  data={dataDanhGia}
                  renderItem={renderSaoDanhGia}
                  horizontal={true}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <Text style={styles.textSao}>4.5/5 (127)</Text>
            </View>
          </View>
          {/* tat ca danh gia, arrow */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textTatCaDanhGia}>Tất cả đánh giá</Text>
            <Icon
              name="angle-right"
              size={20}
              color={BACKGROUND_BUTTON_COLOR}
            />
          </View>
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
      {dataChiTietDanhGia.map(item => {
        return <RenderChiTietDanhGia item={item} />;
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
