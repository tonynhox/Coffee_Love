import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import BarcodeGenerator from '../home/item/barcode/BarcodeGenerator';
import LinearGradient from 'react-native-linear-gradient';
import ListVoucherNotLG from './ListVoucherNotLG';
import {getHistoryScoreFetch} from '../../../redux/reducers/slices/historyScoreSlide';
import moment from 'moment';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import {getChangeScoreFetch} from '../../../redux/reducers/slices/scoreSlide';
import {getVoucherFetch} from '../../../redux/reducers/slices/voucherSlide';
import {getOneUserFetch} from '../../../redux/reducers/slices/userSlice';
const colorCartTV = number => {
  switch (true) {
    case number < 200:
      return {
        colorCard: ['#ff8e36', '#ff9644', '#ff7102', '#e66500'],
        colorBtn: ['#ffaf51', '#5d3200'],
      };
    case number < 500:
      return {
        colorCard: ['#ffaf51', '#5d3200'],
        colorBtn: ['#f3a74e', '#4a3011'],
      };
    case number < 1000:
      return {
        colorCard: ['#b5ccd7', '#8fb0c3', '#7da3b9', '#4c768e'],
        colorBtn: ['#b37600', '#422600'],
      };
    case number < 2000:
      return {
        colorCard: [
          '#ffda5d',
          '#ffdc64',
          '#eeb700',
          '#eeb700',
          '#fdc400',
          '#d2a200',
        ],
        colorBtn: ['#b37600', '#422600'],
      };
    default:
      return {
        colorCard: ['#616161', '#525252', '#444444', '#0a0800'],
        colorBtn: ['#edac5f', '#2f2313'],
      };
  }
};

const scoreUp = number => {
  switch (true) {
    case number < 200:
      return 200 - number;
    case number < 500:
      return 500 - number;
    case number < 1000:
      return 1000 - number;
    case number < 2000:
      return 2000 - number;
    default:
      return 0;
  }
};

const ListVoucher = () => {
  const user = useSelector(state => state.users?.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const allVoucher = useSelector(
    state => state.vouchers?.voucher?.VoucherHieuLuc,
  )||[];
  const dataScore = useSelector(state => state?.scores?.score);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && user?.id_user) {
      dispatch(getVoucherFetch({id_user: user.id_user}));
    }
  }, [isFocused]);

  const RenderItem = ({item}) => {
    return (
      <View style={styles.cardFL}>
        <View style={{justifyContent: 'center'}}>
          <Icon6
            name="gifts"
            size={35}
            color={'#DA7825'}
            style={styles.giftIcon}
          />
          {/* <Text style={styles.centeredText}>Coffee{'\n'}Love</Text> */}
        </View>
        <View style={styles.imgView}>
          <Text style={styles.txtTitleFL}>{item.ten_voucher}</Text>
          {/* <Text style={styles.txt}>{item.ma_voucher}</Text> */}
          <Text
            style={[
              styles.txt,
              {
                paddingVertical: 4,
              },
            ]}>
            {item.mo_ta}
          </Text>
          <Text style={styles.txt}>
            Sử dụng đến: {moment(item.ngay_ket_thuc).format('LLLL')}
          </Text>
        </View>
      </View>
    );
  };

  const [refreshing, setRefreshing] = useState(false);

  const fetchDiem = () => {
    setRefreshing(true);
    Promise.all([
      dispatch(getVoucherFetch({id_user: user.id_user})),
      dispatch(getOneUserFetch({id_user: user.id_user})),
    ]).then(() => {
      setRefreshing(false);
    });
  };

  const handleChangeScore = item => {
    const {diem, _id, ten_voucher, gia_tri, ngay_ket_thuc} = item;
    dispatch(
      getChangeScoreFetch({
        id_user: user.id_user,
        so_diem: diem,
        id_voucher: _id,
        ten_voucher: ten_voucher,
        gia_tri: gia_tri,
        ngay_ket_thuc: ngay_ket_thuc,
      }),
    );
  };

  const RenderItem2 = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert(`${item.ten_voucher}`, `Bạn thật sự muốn đổi?`, [
            {text: 'Hủy'},
            {text: 'Đồng ý', onPress: () => handleChangeScore(item)},
          ]);
        }}
        style={styles.cardFL}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: 'https://public-coffeelove.s3.ap-southeast-1.amazonaws.com/public/Untitled+design+(1).png',
            }}
          />
          {/* <Text style={styles.centeredText}>Coffee{'\n'}Love</Text> */}
        </View>
        <View style={styles.imgView}>
          <Text style={styles.txtTitleFL}>{item.ten_voucher}</Text>
          <Text style={styles.txtB}>{item.mo_ta}</Text>
          <View style={styles.bean}>
            <Text style={styles.txtB2}> {item.diem}</Text>
            <Text style={styles.txt}>Điểm</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return !user ? (
    <ListVoucherNotLG />
  ) : (
    dataScore && allVoucher && (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchDiem()}
          />
        }
        style={styles.container}>
        <LinearGradient
          style={[styles.fistCard]}
          start={{x: 0, y: 0}}
          end={{x: 0.7, y: 1}}
          colors={colorCartTV(user?.diem_thanh_vien).colorCard}>
          {/* <View style={styles.fistCard}> */}

          <Text style={[styles.txtfc, {fontSize: 20, fontWeight: '600'}]}>
            Ưu đãi
          </Text>
          <Text
            style={[
              styles.txtfc,
              {marginVertical: 10, fontSize: 27, fontWeight: '700'},
            ]}>
            {user?.hang_thanh_vien}
          </Text>
          <View style={styles.txtfc2}>
            <Text style={[styles.txtfc, {fontSize: 15}]}>
              {user?.tich_diem} Điểm
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AllVoucher')}
              style={styles.btnvc}>
              <Icon
                name="ticket-percent-outline"
                style={[{color: '#e77300', fontSize: 20}]}
              />
              <Text style={styles.txtfc3}>Voucher của tôi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardRowfc}>
            <BarcodeGenerator height={60} ma_khach_hang={user?.ma_khach_hang} />
            {/* <Icon name="barcode" style={styles.barcode} />
          <Text style={styles.txtfc4}>1234565</Text> */}
          </View>
          <Text style={[styles.txtfc, {fontSize: 12, marginTop: 10}]}>
            Còn {scoreUp(user.diem_thanh_vien)} điểm nữa bạn sẻ thăng hạng
          </Text>
          <Text style={[styles.txtfc, {fontSize: 12}]}>
            Đổi quà không ảnh hưởng tới việc thăng hạng của bạn
          </Text>
          <Text style={[styles.txtfc, {fontSize: 12}]}>
            Hãy dùng điểm để đổi ưu đãi nhé
          </Text>
          {/* </View> */}
        </LinearGradient>

        <View style={styles.card}>
          <View style={styles.cardRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('WheelOfFortune')}
              style={styles.cardExtention}>
              <Icon
                name="crown-outline"
                style={[styles.icon, {color: 'orange', fontSize: 26}]}
              />
              <Text style={styles.txtExtention}>Vòng quay </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardExtention}
              onPress={() => navigation.navigate('AllScore')}>
              <Icon
                name="gift-outline"
                style={[styles.icon, {color: '#FF4500', fontSize: 26}]}
              />
              <Text style={styles.txtExtention}>Đổi điểm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardRow}>
            <TouchableOpacity
              style={styles.cardExtention}
              onPress={() => {
                dispatch(getHistoryScoreFetch({id_user: user.id_user}));
                navigation.navigate('ScoreHistory');
              }}>
              <Icon
                name="file-search-outline"
                style={[styles.icon, {color: '#FF8C00', fontSize: 26}]}
              />
              <Text style={styles.txtExtention}>Lịch sử điểm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardExtention}>
              <Icon
                name="shield-account-outline"
                style={[styles.icon, {color: '#1E90FF', fontSize: 26}]}
              />
              <Text style={styles.txtExtention}>Quyền Lợi của bạn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.txtfc2, {marginRight: 24}]}>
          <Text style={styles.txtTitle}>Voucher của bạn</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllVoucher')}>
            <Text style={styles.txtall}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          scrollEnabled={false}
          style={styles.flatList}
          data={[...allVoucher]?.slice(0, 4)}
          renderItem={RenderItem}
          keyExtractor={item => item._id}
        />

        <View style={[styles.txtfc2, {marginRight: 24}]}>
          <Text style={styles.txtTitle}>Đổi Điểm</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllScore')}>
            <Text style={styles.txtall}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          scrollEnabled={false}
          style={styles.flatList}
          data={[...dataScore]?.slice(0, 4)}
          renderItem={RenderItem2}
          keyExtractor={item => item._id}
        />
      </ScrollView>
    )
  );
};

export default ListVoucher;
