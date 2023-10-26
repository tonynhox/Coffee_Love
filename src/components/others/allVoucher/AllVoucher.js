import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import moment from 'moment';

const AllVoucher = () => {
  const allVoucher = useSelector(state => state.vouchers.voucher.VoucherHieuLuc);
  // console.log('all voucher: ', allVoucher);
  const date = (item) =>{
    const Date = item.ngay_ket_thuc;
    const isValid = moment(Date).format('MMMM Do YYYY, h:mm:ss a');
    return isValid;
  }
  const RenderItem = ({item}) => {
    return (
      <View style={styles.cardFL}>
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
          <Text style={styles.txt}>{item.mo_ta}</Text>
          <Text style={styles.txt}>Sử dụng đến: {date(item)}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={allVoucher}
      renderItem={RenderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default AllVoucher;
var data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
