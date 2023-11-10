import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {appReducer} from '../../../redux/reducers/rootReducer';
import Storage from '../../../utils/Storage';
import {LoginSuccess} from '../../../redux/reducers/slices/userSlice';
import {clearFavorite} from '../../../redux/reducers/slices/favoriteSlice';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);
  return (
    <>
      <Header headerText="Tài khoản" leftComponent={true} />
      <ScrollView style={styles.container}>
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
            <TouchableOpacity style={styles.cardExtention}>
              <Icon
                name="clipboard-file-outline"
                style={[styles.icon, {color: 'green', fontSize: 26}]}
              />
              <Text style={styles.txtExtention}>Chính sách</Text>
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
                    onPress: () => {
                      dispatch(LoginSuccess(''));
                      dispatch(clearFavorite());
                      Storage.removeToken();
                      Storage.removeItem('id_user');
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
      </ScrollView>
    </>
  );
};

export default Profile;
