import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text, View} from 'react-native';
import AppNavigation from './AppNavigation';
import Storage from '../../utils/Storage';
// import {navigationRef} from '../../../App';
import {useDispatch} from 'react-redux';
import {getCategoryFetch} from '../../redux/reducers/slices/categoriesSlice';
import {getTopOrderFetch} from '../../redux/reducers/slices/topOrderSlice';
import {getProductAllFetch} from '../../redux/reducers/slices/productSlice';
import {
  LoginSuccess,
  getNotificationRequest,
  getOneUserFetch,
} from '../../redux/reducers/slices/userSlice';
import {getVoucherFetch} from '../../redux/reducers/slices/voucherSlide';
import {getScoreFetch} from '../../redux/reducers/slices/scoreSlide';
import {getLocationStoreFetch} from '../../redux/reducers/slices/locationMapSlice';
import {getFavoriteRequest} from '../../redux/reducers/slices/favoriteSlice';
import {getDataToppingRequest} from '../../redux/reducers/slices/toppingSlice';
import {StatusBar} from 'react-native';
import {setCurrentDeviceToken} from '../../redux/reducers/slices/deviceTokenSlice';
import {useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
const Stack = createNativeStackNavigator();

const ManHinh = () => {
  const navigation = useNavigation();
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setBarStyle('dark-content');
  //check vao app lan dau
  const getDataUserLocal = async () => {
    // if (navigationRef.isReady()) {
    const data = await Storage.getItem('init');
    //nếu null thì chuyển sang user rồi lưu vô local
    //ko null thì sang main
    if (data === null) {
      Storage.setItem('init', 'true');
      navigation.navigate('AppNavigation', {screen: 'UserNavigation'});
    } else {
      navigation.navigate('AppNavigation', {screen: 'MainNavigation'});
    }
    // }
  };

  //call api
  const dispatch = useDispatch();

  //gọi api trước khi vào main
  const callAPI = () =>
    Promise.all([
      dispatch(getCategoryFetch()),
      dispatch(getTopOrderFetch()),
      dispatch(getProductAllFetch()),
      dispatch(getLocationStoreFetch()),
      dispatch(getDataToppingRequest()),
      checkLogin(),
    ]);

  //check login
  const checkLogin = async () => {
    const token = await Storage.getItem('token');
    const user = await Storage.getItem('id_user');
    if (token !== null && user !== null) {
      console.log('token nè', user);
      dispatch(LoginSuccess({data: {token: token, id_user: user}}));
      dispatch(getOneUserFetch({id_user: user}));
      // dispatch(getVoucherFetch({id_user:user}));
      // dispatch(getScoreFetch());
      dispatch(getFavoriteRequest({id_user: user}));
    }
  };

  useEffect(() => {
    callAPI().then(() => {
      //call api xong thì chuyển màn hình
      getDataUserLocal();
    });
  }, []);

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );

      if (remoteMessage.data.type === 'ProductDetail') {
        navigation.navigate('AppNavigation', {
          screen: 'ProductDetail',
          params: {id: remoteMessage.data.id},
        });
      }
      if (
        remoteMessage.data.type === 'OrderDelivering' ||
        remoteMessage.data.type === 'OrderArrived'
      ) {
        navigation.navigate('AppNavigation', {
          screen: 'OrderDetail',
          params: {id_don_hang: remoteMessage.data.id},
        });
      }
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        // setLoading(false);
      });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 60, fontWeight: '700'}}>
        COFFE {'\n'} LOVE
      </Text>
    </View>
  );
};

const ManHinhCHao = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ManHinh"
        component={ManHinh}
        options={{
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="AppNavigation"
        component={AppNavigation}
        options={{
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default ManHinhCHao;
