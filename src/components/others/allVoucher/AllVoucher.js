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

const AllVoucher = () => {
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
          <Text style={styles.txtTitleFL}>Miễn phí giao hàng</Text>
          <Text style={styles.txt}>Sử dụng cho đơn từ 100K</Text>
          <Text style={styles.txt}>Sử dụng đến 11/10/2023</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={RenderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default AllVoucher;
var data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
