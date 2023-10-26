import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {Text, View} from 'react-native';
import AppNavigation from './AppNavigation';
import Storage from '../../utils/Storage';
import {navigationRef} from '../../../App';
import {useDispatch} from 'react-redux';
import {getCategoryFetch} from '../../redux/reducers/slices/categoriesSlice';
import {getTopOrderFetch} from '../../redux/reducers/slices/topOrderSlice';
import {getProductAllFetch} from '../../redux/reducers/slices/productSlice';
import {
  LoginSuccess,
  getOneUserFetch,
} from '../../redux/reducers/slices/userSlice';
import {getVoucherFetch} from '../../redux/reducers/slices/voucherSlide';
import {getScoreFetch} from '../../redux/reducers/slices/scoreSlide';
import { getLocationStoreFetch } from '../../redux/reducers/slices/locationMapSlice';
const Stack = createNativeStackNavigator();

const ManHinh = () => {
  //check vao app lan dau
  const getDataUserLocal = async () => {
    if (navigationRef.isReady()) {
      const data = await Storage.getItem('init');
      //nếu null thì chuyển sang user rồi lưu vô local
      //ko null thì sang main
      if (data === null) {
        Storage.setItem('init', 'true');
        navigationRef.navigate('AppNavigation', {screen: 'UserNavigation'});
      } else {
        navigationRef.navigate('AppNavigation', {screen: 'MainNavigation'});
      }
    }
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
    }
  };

  useEffect(() => {
    callAPI().then(() => {
      //call api xong thì chuyển màn hình
      getDataUserLocal();
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
