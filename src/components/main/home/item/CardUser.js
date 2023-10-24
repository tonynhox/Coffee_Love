import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {styles} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import BarcodeGenerator from './barcode/BarcodeGenerator';
import {useSelector} from 'react-redux';

const CardUser = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.users.user);
  const islogin = user.id_user;

  console.log('islogin', islogin);
  return (
islogin===''?
      <View style={styles.cardNotUser}>
      <Text style={styles.txtTitle}>Đăng nhập</Text>
      <Text
        style={[styles.txtCategory, {fontWeight: '400', textAlign: 'center'}]}>
        Sử dụng app để tích điểm và đổi những ưu đãi dành riêng cho thành viên
        bạn nhé.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserNavigation', {screen: 'Login'})}
        style={styles.btnLogin}>
        <Text style={[styles.txtTitle, {color: '#fff'}]}>Đăng nhập</Text>
      </TouchableOpacity>
    </View> :
        <View style={styles.cardUser}>
        <View style={{marginBottom:10}}>
          <Text style={styles.txtName} >{user.ho_ten}</Text>
          <Text style={styles.txtName}>Mới</Text>
        </View>
        <BarcodeGenerator ma_khach_hang={user.ma_khach_hang}/>
        </View>
        
  );
};

export default React.memo(CardUser);

// const styles = StyleSheet.create({

// })
