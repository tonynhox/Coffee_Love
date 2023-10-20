import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';

//slide top order
const TopOrder = () => {
  const navigation = useNavigation();
  const data = useSelector(state => state.topOrders.data);
  return (
    <Swiper style={{height: 140}} showsPagination={false} autoplay={true}>
      {data.map((item, index) => {
      return <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail')}
      style={styles.cardTopOrder}>
      <View style={styles.cardItemLeft}>
        <View style={styles.rows}>
          <Icon name="star-face" style={{fontSize: 18, color: '#FFB800'}} />
          <Text style={{color: '#000', fontWeight: '500', fontSize: 14}}>
            {' '}
            {item.tong_sao}
          </Text>
        </View>
        <Text style={{color: '#000', fontWeight: '600', fontSize: 16}}>
          Top order
        </Text>
        <Text style={{color: '#000', fontWeight: '700', fontSize: 18}}>
          {item.ten_san_pham}{' '}
        </Text>
        <View style={[styles.rows, {}]}>
          <Text style={{color: '#F5A646', fontWeight: '500'}}>Mua ngay </Text>
          <Icon name="moped" style={{fontSize: 18, color: '#F5A646'}} />
        </View>
      </View>
      <Image
        style={styles.img}
        source={{uri: item.hinh_anh_sp[0].hinh_anh_sp}}
      />
    </TouchableOpacity>
      })}

      
    </Swiper>
  );
};

export default TopOrder;
