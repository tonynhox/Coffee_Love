import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome6';
import {styles} from './styles';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {appReducer} from '../../../redux/reducers/rootReducer';
import Storage from '../../../utils/Storage';
import {
  LoginSuccess,
  clearNotificationCounter,
} from '../../../redux/reducers/slices/userSlice';
import {
  clearFavorite,
  getFavoriteRequest,
} from '../../../redux/reducers/slices/favoriteSlice';
import {
  getDeleteCartSuccess,
  setDataPayment,
} from '../../../redux/reducers/slices/cartPaymentSlice';
import {KEY_SEARCH_HISTORY, color_don_hang} from '../../../utils/contanst';
import {getDeviceTokenRequest} from '../../../redux/reducers/slices/deviceTokenSlice';
import RNRestart from 'react-native-restart';
import messaging from '@react-native-firebase/messaging';
import instance from '../../../axios/instance';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);
  const [isLoadingLogout, setIsLoadingLogout] = useState(false);

  const unsubscribeTopic = async () => {
    try {
      await messaging().unsubscribeFromTopic('new_product');
      console.log('UNSUBSCRIBE TOPIC SUCCESS');
    } catch (error) {
      console.log('ERROR UNSUBSCRIBE TOPIC', error);
    }
  };

  const logOut = async () => {
    console.log("LOGOUT ONGOING")
    try {
      const response = await instance.post('users/sua-user', {
        id_user: user.id_user,
        ho_ten: user.ho_ten,
        avatar: user.avatar,
        email: user.email,
        so_dien_thoai: user.so_dien_thoai,
        device_token: '',
      });

      if (response.status === 200) {
        console.log('LOGOUT SUCCESS');
        setIsLoadingLogout(false);
      } else {
        console.log('LOGOUT FAIL FROM ELSE');
        setIsLoadingLogout(false);
      }
    } catch (error) {
      console.log('ERROR LOGOUT FROM CATCHING', error);
      setIsLoadingLogout(false);
    }
  };

  return (
    <>
      <Header
        headerText="Khác"
        containerStyle={{
          // justifyContent: 'flex-start',
          backgroundColor: 'white',
          paddingBottom: -10,
        }}
        headerStyle={{
          fontSize: 19,
          color: 'black',
          paddingLeft: 12,
          fontWeight: '600',
        }}
        leftComponent={<></>}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.txtTitle}>Tiện ích</Text>
          <View style={styles.cardRow}>
            <TouchableOpacity
              onPress={() =>
                user
                  ? navigation.navigate('Orders')
                  : navigation.navigate('UserNavigation', {screen: 'Login'})
              }
              style={styles.cardExtention}>
              <Icon
                name="file-document-outline"
                style={[styles.icon, {color: 'orange', fontSize: 26}]}
              />
              <Text style={styles.txtExtention}>Lịch sử đơn hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardExtention}>
              <Icon
                name="file-search-outline"
                style={[styles.icon, {color: '#8000FF', fontSize: 26}]}
              />
              <Text style={styles.txtExtention}>Điều khoản</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardRow}>
            <TouchableOpacity
              style={styles.cardExtention}
              onPress={() => {
                if (user) {
                  dispatch(getFavoriteRequest({id_user: user?.id_user}));
                  navigation.navigate('Favorite');
                } else {
                  navigation.navigate('UserNavigation', {screen: 'Login'});
                }
              }}>
              <IconF
                name="heart"
                style={[styles.icon, {color: 'red', fontSize: 26}]}
              />
              <Text style={styles.txtExtention}>Yêu thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardExtention}>
              <Icon
                name="file-search-outline"
                style={[styles.icon, {color: '#8000FF', fontSize: 26}]}
              />
              <Text style={styles.txtExtention}>Điều khoản VNPAY</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.txtTitle}>Hỗ trợ</Text>
          <TouchableOpacity style={[styles.line, {borderTopLeftRadius: 8}]}>
            <View
              style={[
                styles.CardSupport,
                {
                  // borderRadius: 10,
                },
              ]}>
              <Icon name="star-outline" style={styles.icon} />
              <Text style={styles.txtItem}>Đánh giá đơn hàng</Text>
            </View>
            <Icon name="chevron-right" style={[styles.icon, styles.icLeft]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.line}>
            <View style={styles.CardSupport}>
              <Icon
                name="message-outline"
                style={[styles.icon, {fontSize: 17, marginLeft: 3}]}
              />
              <Text style={styles.txtItem}>Liên hệ góp ý</Text>
            </View>
            <Icon name="chevron-right" style={[styles.icon, styles.icLeft]} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.line, {borderBottomLeftRadius: 8}]}>
            <View style={[styles.CardSupport, {borderBottomWidth: 0}]}>
              <Icon name="file-document-outline" style={[styles.icon]} />
              <Text style={styles.txtItem}>Hướng dẫn xuất hoá đơn</Text>
            </View>
            <Icon name="chevron-right" style={[styles.icon, styles.icLeft]} />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.txtTitle}>Tài khoản</Text>
          <TouchableOpacity
            onPress={() =>
              user
                ? navigation.navigate('EditProfile')
                : navigation.navigate('UserNavigation', {screen: 'Login'})
            }
            style={[styles.line, {borderTopLeftRadius: 8}]}>
            <View style={styles.CardSupport}>
              <Icon name="account-outline" style={[styles.icon]} />
              <Text style={styles.txtItem}>Thông tin cá nhân</Text>
            </View>
            <Icon name="chevron-right" style={[styles.icon, styles.icLeft]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.line}
            onPress={() =>
              user
                ? navigation.navigate('Changepassword')
                : navigation.navigate('UserNavigation', {screen: 'Login'})
            }>
            <View style={styles.CardSupport}>
              <Icon name="lock-outline" style={[styles.icon]} />
              <Text style={styles.txtItem}>Đổi mật khẩu</Text>
            </View>
            <Icon name="chevron-right" style={[styles.icon, styles.icLeft]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              user
                ? navigation.navigate('MyAddress')
                : navigation.navigate('UserNavigation', {screen: 'Login'})
            }
            style={styles.line}>
            <View style={styles.CardSupport}>
              <Icon name="map-marker-multiple-outline" style={[styles.icon]} />
              <Text style={styles.txtItem}>Địa chỉ đã lưu</Text>
            </View>
            <Icon name="chevron-right" style={[styles.icon, styles.icLeft]} />
          </TouchableOpacity>

          {user ? (
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Thông báo', 'Bạn có muốn đăng xuất không?', [
                  {
                    text: 'Huỷ',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'Xác nhận',
                    onPress: async () => {
                      setIsLoadingLogout(true);
                      await unsubscribeTopic();
                      await logOut();
                      Storage.removeToken();
                      Storage.removeItem('id_user');
                      Storage.removeItem(KEY_SEARCH_HISTORY);
                      RNRestart.restart();
                      // dispatch(LoginSuccess(''));
                      // dispatch(clearFavorite());
                      // dispatch(getDeleteCartSuccess());
                      // dispatch(
                      //   getDeviceTokenRequest({
                      //     id_user: user.id_user,
                      //     ho_ten: user.ho_ten,
                      //     avatar: user.avatar,
                      //     email: user.email,
                      //     so_dien_thoai: user.so_dien_thoai,
                      //     device_token: '',
                      //   }),
                      // );
                      dispatch(clearNotificationCounter());
                    },
                  },
                ]);
              }}
              style={[styles.line, {borderBottomLeftRadius: 8}]}>
              <View style={[styles.CardSupport, {borderBottomWidth: 0}]}>
                <Icon name="logout" style={[styles.icon]} />
                <Text style={styles.txtItem}>Đăng xuất</Text>
              </View>
              <Icon name="chevron-right" style={[styles.icon, styles.icLeft]} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserNavigation', {screen: 'Login'});
              }}
              style={[styles.line, {borderBottomLeftRadius: 8}]}>
              <View style={[styles.CardSupport, {borderBottomWidth: 0}]}>
                <Icon name="logout" style={[styles.icon]} />
                <Text style={styles.txtItem}>Đăng Nhập</Text>
              </View>
              <Icon name="chevron-right" style={[styles.icon, styles.icLeft]} />
            </TouchableOpacity>
          )}
        </View>

        {isLoadingLogout && (
          <View style={{position: 'absolute', top: '45%', left: '45%'}}>
            <ActivityIndicator size="large" color={'#E98001'} />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default Profile;
