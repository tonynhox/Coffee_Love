import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {styles} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import BarcodeGenerator from './barcode/BarcodeGenerator';
import LinearGradient from 'react-native-linear-gradient';

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
        colorCard: ['#ffda5d', '#ffdc64', '#eeb700','#eeb700','#fdc400', '#d2a200'],
        colorBtn: ['#b37600', '#422600'],
      };
    default:
      return {
        colorCard: ['#616161', '#525252', '#444444', '#0a0800'],
        colorBtn: ['#edac5f', '#2f2313'],
      };
  }
};

const CardUser = ({user}) => {
  const navigation = useNavigation();
  // const islogin = user?.id_user;
    const [islogin, setIslogin] = React.useState(false);
  useEffect(() => {
    if (user?.id_user) {
      setIslogin(true);
    } else {
      setIslogin(false);
    }
  }
  , [user]);
  return !islogin? (
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
    </View>
  ) : (
    <LinearGradient
      style={[
        {
          height: 150,
        },
        styles.cardUser,
      ]}
      start={{x: 0, y: 0}}
      end={{x: 0.7, y: 1}}
      colors={colorCartTV(user.diem_thanh_vien).colorCard}>
      {/* <View style={styles.cardUser}> */}
      <View style={{marginBottom: 10}}>
        <Text style={styles.txtName}>{user.ho_ten}</Text>
        <Text style={[styles.txtName, {fontWeight: 400, fontSize: 14}]}>
          {user.hang_thanh_vien}
        </Text>
      </View>
      <BarcodeGenerator ma_khach_hang={user.ma_khach_hang} />
      <LinearGradient
        colors={colorCartTV(user.diem_thanh_vien).colorBtn}
        end={{x: 1, y: 0}}
        start={{x: 0, y: 0}}
        style={{
          position: 'absolute',
          top: 12,
          right: 0,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            color: 'white',
            paddingVertical: 6,
            paddingHorizontal: 14,
          }}>
          Đổi {user.tich_diem} Điểm
        </Text>
      </LinearGradient>
    </LinearGradient>
  );
};

export default React.memo(CardUser);

// const styles = StyleSheet.create({

// })
