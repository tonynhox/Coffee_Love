import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { getFavoriteRequest } from '../../../../redux/reducers/slices/favoriteSlice';

const Extention = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.cardExtention}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Categories')}
        style={styles.itemExtention}>
        <Icon name="moped-electric" size={32} color="#D89543" />
        <Text style={styles.txtItem}>Tận nhà</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          user
            ? navigation.navigate('AllScore')
            : navigation.navigate('UserNavigation', {screen: 'Login'})
        }
        style={styles.itemExtention}>
        <Icon name="diamond-stone" size={32} color="#D89543" />
        <Text style={styles.txtItem}>Đổi điểm</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          user
            ? navigation.navigate('Orders')
            : navigation.navigate('UserNavigation', {screen: 'Login'})
        }
        style={styles.itemExtention}>
        <Icon name="text-box-outline" size={32} color="#D89543" />
        <Text style={styles.txtItem}>Đơn hàng </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemExtention}
        onPress={() => {

          if(user){
            dispatch(getFavoriteRequest({id_user: user?.id_user}));
            navigation.navigate('Favorite');
          }else{
            navigation.navigate('UserNavigation', {screen: 'Login'});
          }
        }}>
        <Icon name="heart" size={32} color="#D89543" />
        <Text style={styles.txtItem}>Yêu thích </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Extention;
