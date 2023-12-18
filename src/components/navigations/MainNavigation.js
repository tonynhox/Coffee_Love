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
  getLocationStoreFetch,
  getLocationStoreSuccess,
  setMyLocation,
} from '../../redux/reducers/slices/locationMapSlice';
import {getVoucherFetch} from '../../redux/reducers/slices/voucherSlide';
import {getScoreFetch} from '../../redux/reducers/slices/scoreSlide';
import ListStore from '../main/listStore/ListStore';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomMuaSanPhamCategories from '../main/categories/BottomMuaSanPhamCategories';
import {setIsVisibleModalCart} from '../../redux/reducers/slices/utilSlice';
import {formatCurrency} from '../../utils/formatCurrency';
import {getHistoryScoreFetch} from '../../redux/reducers/slices/historyScoreSlide';
import {findNearestCoordinate, sortStore} from '../others/map4D/tinhKhoangCach';
import {getDeviceTokenRequest} from '../../redux/reducers/slices/deviceTokenSlice';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Favorite from '../main/profile/item/Favorite';

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
            {
              forceLocationManager: false
            }
          // {enableHighAccuracy: true,}
        );
      }
    }
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (position?.longitude && position?.latitude) {
      dispatch(
        getLocationMapFetch({
          lng: position?.longitude,
          lat: position?.latitude,
        }),
      );

      //hên xui
      dispatch(getLocationStoreFetch());
    }
  }, [position]);
  // end vị trí hiện tại

  //sort map
  // const data = useSelector(state => state.locationMap.toaDoCuaHang);
  // useEffect(() => {
  //   if(data?.length>0&&position?.longitude&&position?.latitude){
  //     const sortStoreTemp = sortStore(
  //       (origin = {
  //         latitude: position.latitude,
  //         longitude: position.longitude,
  //       }),
  //       data
  //     )
  //     dispatch(getLocationStoreSuccess(sortStoreTemp));
  //   }
  // }, [position]);

  const dispatch = useDispatch();
  // const id_user =  Storage.getItem('id_user');
  const id_user = useSelector(state => state.users?.user?.id_user);
  useEffect(() => {
    if (id_user) {
      dispatch(getCartPaymentFetch({id_user: id_user}));
      dispatch(getVoucherFetch({id_user: id_user}));
      dispatch(getScoreFetch());
    }
  }, [id_user]);

  const isOpenBottomMuaHang = useSelector(state => state.utils.openBottomSheet);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, zIndex: -1}}>
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
                  return (
                    <Icon name="coffee-outline" size={25} color="#FF8C00" />
                  );
                }
              } else if (route.name == 'ListStore') {
                if (!focused) {
                  return (
                    <Icon name="store-search-outline" size={25} color="#000" />
                  );
                } else {
                  return (
                    <Icon
                      name="store-search-outline"
                      size={25}
                      color="#FF8C00"
                    />
                  );
                }
              } else if (route.name == 'Voucher') {
                if (!focused) {
                  return (
                    <Icon
                      name="ticket-percent-outline"
                      size={25}
                      color="#000"
                    />
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
                    <Icon
                      name="account-circle-outline"
                      size={25}
                      color="#000"
                    />
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
              tabBarLabel: 'Trang chủ',
            }}
          />
          <Tab.Screen
            name="Categories"
            component={CategoriesWithExtraView}
            options={{
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
              tabBarLabel: 'Danh mục',
            }}
          />
          <Tab.Screen
            name="ListStore"
            component={ListStore}
            options={{
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
              tabBarLabel: 'Cửa hàng',
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
              tabBarLabel: 'Bạn',
            }}
          />
        
        </Tab.Navigator>
      </View>

      {isOpenBottomMuaHang && <BottomMuaSanPhamCategories />}
    </GestureHandlerRootView>
  );
};

const ExtraView = ({setModalVisible}) => {
  const nameLocation = useSelector(state => state.locationMap.data.address);
  const cart = useSelector(state => state.cartPayment.cart);
  const dispatch = useDispatch();
  const dataCart = useSelector(state => state.cartPayment.data);
  return (
    <Pressable
      style={{
        // flex: 1,
        zIndex: 99,
        position: 'absolute',
        bottom: 10,
        width: '84%',
        borderRadius: 16,
        // padding: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        alignSelf: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <View style={{width:'100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        {/* <Text>Giao đến</Text> */}
        <Text
          style={{flex:1,color: 'black', fontSize: 13,fontWeight:'500',paddingVertical:4}}
          numberOfLines={1}
          ellipsizeMode="tail">
          {nameLocation}
        </Text>
        {dataCart?.length > 0 && (
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
              {cart?.quantity || 0}
            </Text>
          </View>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>
            {formatCurrency(cart?.price || 0)}
          </Text>
          <Text style={{fontSize: 14, color: '#fff'}}>{'>'}</Text>
        </Pressable>)}
      </View>
    </Pressable>
  );
};

const HomeWithExtraView = () => {
  return (
    <>
      <Home />
      <ExtraView />
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
