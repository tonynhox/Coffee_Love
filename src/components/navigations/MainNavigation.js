import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../main/home/Home';
import Categories from '../main/categories/Categories';
import ListVoucher from '../main/voucher/ListVoucher';
import Profile from '../main/profile/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalCartOrder from '../../utils/Modals/ModalCartOrder';
import {useDispatch, useSelector} from 'react-redux';
import {getCartPaymentFetch} from '../../redux/reducers/slices/cartPaymentSlice';

import CategoriesText from '../main/categories/CategoriesText';
import Geolocation from 'react-native-geolocation-service';
import {
  getLocationMapFetch,
  setMyLocation,
} from '../../redux/reducers/slices/locationMapSlice';
import {getVoucherFetch} from '../../redux/reducers/slices/voucherSlide';
import {getScoreFetch} from '../../redux/reducers/slices/scoreSlide';
import ListStore from '../main/listStore/ListStore';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomMuaSanPhamCategories from '../main/categories/BottomMuaSanPhamCategories';
import { setIsVisibleModalCart } from '../../redux/reducers/slices/utilSlice';
import { formatCurrency } from '../../utils/formatCurrency';
import { getHistoryScoreFetch } from '../../redux/reducers/slices/historyScoreSlide';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  // const [position, setPosition] = useState({});
  const position = useSelector(state => state.locationMap.myLocation);
  //vị trí hiện tại
  const getCurrentPosition = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          pos => {
            dispatch(setMyLocation(pos?.coords));
          },
          error =>
            Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
          // {enableHighAccuracy: true,}
        );
      }
    }
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (position) {
      dispatch(
        getLocationMapFetch({
          lng: position?.longitude,
          lat: position?.latitude,
        }),
      );
    }
  }, [position]);

  // end vị trí hiện tại

  const dispatch = useDispatch();
  // const id_user =  Storage.getItem('id_user');
  const id_user = useSelector(state => state.users?.user?.id_user);
  useEffect(() => {
    if (id_user) {
      dispatch(getCartPaymentFetch({id_user: id_user}));
      dispatch(getVoucherFetch({id_user: id_user}));
      dispatch(getScoreFetch());
      dispatch(getHistoryScoreFetch({id_user: id_user}));
      console.log('id_user', id_user);
    }
  }, [id_user]);

  const isOpenBottomMuaHang = useSelector(state => state.utils.openBottomSheet);
  
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex:1,zIndex:-1}} >
      <ModalCartOrder />
        
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#FF8C00',
          tabBarIcon: ({focused}) => {
            if (route.name == 'Home') {
              if (!focused) {
                return <Icon name="home-outline" size={25} color="#000" />;
              } else {
                return <Icon name="home-outline" size={25} color="#FF8C00" />;
              }
            } else if (route.name == 'Categories') {
              if (!focused) {
                return <Icon name="coffee-outline" size={25} color="#000" />;
              } else {
                return <Icon name="coffee-outline" size={25} color="#FF8C00" />;
              }
            } else if (route.name == 'ListStore') {
              if (!focused) {
                return (
                  <Icon name="store-search-outline" size={25} color="#000" />
                );
              } else {
                return (
                  <Icon name="store-search-outline" size={25} color="#FF8C00" />
                );
              }
            } else if (route.name == 'Voucher') {
              if (!focused) {
                return (
                  <Icon name="ticket-percent-outline" size={25} color="#000" />
                );
              } else {
                return (
                  <Icon
                    name="ticket-percent-outline"
                    size={25}
                    color="#FF8C00"
                  />
                );
              }
            } else if (route.name == 'Profile') {
              if (!focused) {
                return (
                  <Icon name="account-circle-outline" size={25} color="#000" />
                );
              } else {
                return (
                  <Icon
                    name="account-circle-outline"
                    size={25}
                    color="#FF8C00"
                  />
                );
              }
            }
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeWithExtraView}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesWithExtraView}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
            tabBarLabel: 'Categories',
          }}
        />
        <Tab.Screen
          name="ListStore"
          component={ListStore}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
            tabBarLabel: 'ListStore',
          }}
        />
        <Tab.Screen
          name="Voucher"
          component={ListVoucher}
          options={{
            tabBarLabel: 'Voucher',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
      </View>

          {isOpenBottomMuaHang &&
      <BottomMuaSanPhamCategories />}
    </GestureHandlerRootView>
  );
};

const ExtraView = ({setModalVisible}) => {
  const nameLocation = useSelector(state => state.locationMap.data.address);
  const cart = useSelector(state => state.cartPayment.cart);
  const dispatch = useDispatch();
  return (
    <Pressable
      style={{
        flex: 1,
        zIndex: 99,
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        width: '84%',
        borderRadius: 20,
        padding: 8,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <View style={{justifyContent: 'center'}}>
        {/* <Text>Giao đến</Text> */}
        <Text
          style={{maxWidth: 200, color: 'black', fontSize: 14}}
          numberOfLines={1}
          ellipsizeMode="tail"
          >
          {nameLocation}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          // setModalVisible(true);
          // dispatch(setIsVisibleModalCart(true));
          dispatch(setIsVisibleModalCart(true));


        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '34%',
          padding: 4,
          borderRadius: 40,
          backgroundColor: '#df7a00',
        }}>
        <View
          style={{
            backgroundColor: '#fff6e7',
            borderRadius: 40,
            width: 20,
            height: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              alignSelf: 'center',
              color: '#df7a00',
              fontWeight: '600',
            }}>
            {cart?.quantity||0}
          </Text>
        </View>
        <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>
          {formatCurrency(cart?.price||0)}
        </Text>
        <Text style={{fontSize: 14, color: '#fff'}}>{'>'}</Text>
      </Pressable>
    </Pressable>
  );
};

const HomeWithExtraView = () => {
  return (
    <>
      <Home />
      <ExtraView  />
      {/* <ModalCartOrder
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      /> */}
    </>
  );
};

const CategoriesWithExtraView = () => {
  return (
    <>
      <CategoriesText />
      <ExtraView />
      {/* <ModalCartOrder
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      /> */}
    </>
  );
};

export default MainNavigation;
