import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import BarcodeGenerator from '../home/item/barcode/BarcodeGenerator';

const ListVoucher = () => {
  const user = useSelector(state => state.users?.user);

  const navigation = useNavigation();
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

  const RenderItem2 = ({item2}) => {
    return (
      <View style={styles.cardFL}>
        <View>
          <Image
            style={styles.img}
            source={require('../../../assets/images/mochi.jpg')}
          />
          <Text style={styles.centeredText}>Coffee{'\n'}Love</Text>
        </View>
        <View style={styles.imgView}>
          <Text style={styles.txtTitleFL}>Bánh mochi</Text>
          <Text style={styles.txtB}>Miễn phí 1 bánh mochi bất kỳ </Text>
          <View style={styles.bean}>
            <Text style={styles.txtB2}> 200</Text>
            <Text style={styles.txt}>Điểm</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.fistCard}>
        <Text style={[styles.txtfc, {fontSize: 20, fontWeight: '600'}]}>
          Ưu đãi
        </Text>
        <Text
          style={[
            styles.txtfc,
            {marginVertical: 10, fontSize: 28, fontWeight: '700'},
          ]}>
          Mới
        </Text>
        <View style={styles.txtfc2}>
          <Text style={[styles.txtfc, {fontSize: 15}]}>
            {user?.tich_diem} Điểm
          </Text>
          <View style={styles.btnvc}>
            <Icon
              name="ticket-percent-outline"
              style={[{color: '#FF4500', fontSize: 20}]}
            />
            <Text style={styles.txtfc3}>Voucher của tôi</Text>
          </View>
        </View>
        <View style={styles.cardRowfc}>
          <BarcodeGenerator height={60} ma_khach_hang={user?.ma_khach_hang} />
          {/* <Icon name="barcode" style={styles.barcode} />
          <Text style={styles.txtfc4}>1234565</Text> */}
        </View>
        <Text style={[styles.txtfc, {fontSize: 12, marginTop: 10}]}>
          Còn 100 điểm nữa bạn sẻ thăng hạng
        </Text>
        <Text style={[styles.txtfc, {fontSize: 12}]}>
          Đổi quà không ảnh hưởng tới việc thăng hạng của bạn
        </Text>
        <Text style={[styles.txtfc, {fontSize: 12}]}>
          Hãy dùng điểm để đổi ưu đãi nhé
        </Text>
      </View>

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
          <TouchableOpacity style={styles.cardExtention}>
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
            onPress={() => navigation.navigate('ScoreHistory')}>
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
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
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
        data={data}
        renderItem={RenderItem2}
        keyExtractor={item2 => item2.id}
      />
    </ScrollView>
  );
};

export default ListVoucher;

var data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
