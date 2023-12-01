import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../../utils/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopOrder from './item/TopOrder';
import Menu from './item/Menu';
import {ScrollView} from 'react-native-virtualized-view';
import CardUser from './item/CardUser';
import Extention from './item/Extention';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {getDeviceTokenRequest} from '../../../redux/reducers/slices/deviceTokenSlice';
import {getNotificationRequest} from '../../../redux/reducers/slices/userSlice';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  const dispatch = useDispatch();
  const [scrollY] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const user = useSelector(state => state.users?.user);
  const countNotification = useSelector(
    state => state.users?.countNotification,
  );

  const device_token = useSelector(state => state.device_token?.deviceToken);

  useEffect(() => {
    console.log('DEVICE TOKEN IS NONE: ', device_token);
    if (device_token !== user?.device_token && device_token !== 'none') {
      console.log('UPLOADING DEVICE TOKEN', user);
      if (user != null) {
        console.log('USER00000000000:', user);
        dispatch(
          getDeviceTokenRequest({
            id_user: user?.id_user,
            ho_ten: user?.ho_ten,
            avatar: user?.avatar,
            email: user?.email,
            so_dien_thoai: user?.so_dien_thoai,
            device_token: device_token,
          }),
        );
      }
    }
  }, [device_token]);

  useEffect(() => {
    if (user) {
      dispatch(getNotificationRequest({id_user: user.id_user}));
    }
  }, [user]);

  const HeaderName = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 30, color: 'red'}}>♨</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 3}}>
          <Text style={{fontSize: 18, color: 'black'}}>Hi, </Text>
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
            {user?.ho_ten || 'Khách'}
          </Text>
        </View>
      </View>
    );
  };

  const HeaderSearch = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 6,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={{}}>
          <Icon name="magnify" style={{fontSize: 26, color: 'black'}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 8,
          }}
          onPress={() => {
            user
                ? navigation.navigate('Notification')
                : navigation.navigate('UserNavigation', {screen: 'Login'})
          }}>
          <Icon name="bell-outline" style={[{fontSize: 25, color: 'black'}]} />
          <View
            style={{
              position: 'absolute',
              top: -7,
              right: -9,
              height: 'auto',
              width: 'auto',
              paddingHorizontal: 4,
              paddingVertical: 2,
              borderRadius: 70,
              backgroundColor: '#F66634',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>
              {countNotification}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const opacity = scrollY.interpolate({
    inputRange: [0, 300], // Khi cuộn từ 0px đến 100px
    outputRange: [1, 0], // Giá trị opacity từ 1 (không mờ) đến 0 (mờ hoàn toàn)
    extrapolate: 'clamp', // Giữ giá trị trong khoảng inputRange
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: '100%',
            opacity, // Apply opacity
          },
        ]}>
        <LinearGradient
          style={{height: windowHeight * 0.45}}
          colors={['#fffce4', '#fffef0', '#f1f1f1']}
        />
      </Animated.View>
      <Header
        customComponent={HeaderName()}
        containerStyle={{
          // height: 60,
          paddingHorizontal: 16,
          backgroundColor: 'transparent',
        }}
        leftComponent={<></>}
        rightComponent={HeaderSearch()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false}, // Sử dụng driver không dựa vào native (không sử dụng bằng true)
        )}
        contentContainerStyle={{
          paddingBottom: 60,
        }}
        style={styles.container}>
        <CardUser user={user} />
        <Extention />
        <TopOrder />
        <Menu />
      </ScrollView>
    </View>
  ); //aaaaaaaaaaaaaaaaaaaa
};

export default React.memo(Home);
