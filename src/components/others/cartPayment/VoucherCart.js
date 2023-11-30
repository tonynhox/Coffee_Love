import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  ToastAndroid,
  StatusBar,
} from 'react-native';
import React from 'react';
import {styles} from './style/styleVoucherCart';

import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import vi from 'moment/locale/vi';
import {setUseVoucher} from '../../../redux/reducers/slices/voucherSlide';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../utils/Header';
moment.updateLocale('vi', vi);
const VoucherCart = () => {
  ;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allVoucher = useSelector(
    state => state.vouchers.voucher.VoucherHieuLuc,
  );

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert(item.ten_voucher, item.mo_ta, [
            {
              text: 'Huỷ',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Xác nhận',
              onPress: () => {
                dispatch(setUseVoucher(item));
                navigation.pop();
              },
            },
          ]);
        }}
        style={styles.cardFL}>
        <View>
          <Image
            style={styles.img}
            source={require('../../../assets/images/bg_voucher.png')}
          />
          <Text style={styles.centeredText}>Coffee{'\n'}Love</Text>
        </View>
        <View style={styles.imgView}>
          <Text style={styles.txtTitleFL}>{item.ten_voucher}</Text>
          {/* <Text style={styles.txt}>{item.ma_voucher}</Text> */}
          <Text numberOfLines={2} style={styles.txt}>{item.mo_ta}</Text>
          <Text style={styles.txt}>
            Sử dụng đến: {moment(item.ngay_ket_thuc).format('[ngày] LL')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header 
        headerText="Danh sách voucher" 
        containerStyle={{
          // justifyContent: 'flex-start',
          backgroundColor: 'white',
          paddingBottom: -10,
          borderBottomWidth: 0.4,
          borderBottomColor: '#b3b3b3',
        }}
        rightComponent={true}
      />
      <FlatList
        style={styles.container}
        data={allVoucher}
        renderItem={RenderItem}
        keyExtractor={item => item._id}
      />
    </>
  );
};

export default VoucherCart;
