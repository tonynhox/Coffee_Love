import React, {useState, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import DangGiao from './item/DangGiao';
import LichSu from './item/LichSu';
import DanhGia from './item/DanhGia';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import {getDonHangRequest} from '../../../redux/reducers/slices/donHangSlice';
import OrderLoadingPlaceholder from '../loading/OrderLoadingPlaceholder';

const Tab = createMaterialTopTabNavigator();

const Orders = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.don_hang.isLoading);
  // console.log('isLoading', isLoading);
  const id_user = useSelector(state => state.users.user.id_user);
  useEffect(() => {
    const fetchDonHang = () => {
      dispatch(getDonHangRequest({id_user: id_user}));
    };
    fetchDonHang();
    return () => {};
  }, [id_user]);

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <OrderLoadingPlaceholder/>
        </View>
      ) : (
        <>
          <View style={{width: '100%'}}>
            <Header
              containerStyle={{backgroundColor: '#fff',height:70}}
              rightComponent={true}
              headerText="Chi tiết đơn mua"
            />
          </View>

          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {},
              tabBarIndicatorStyle: {
                backgroundColor: 'red',
                // width: '50%',
              },
              // tabBarIndicatorContainerStyle: { marginHorizontal: 40, paddingHorizontal: 80 }
            }}>
            <Tab.Screen
              name="DangGiao"
              component={DangGiao}
              options={{
                tabBarLabel: ({focused, color}) => (
                  <Text style={[styles.text]}>Đang đến</Text>
                ),
              }}></Tab.Screen>

            <Tab.Screen
              name="LichSu"
              component={LichSu}
              options={{
                tabBarLabel: ({focused, color}) => (
                  <Text style={[styles.text]}>Lịch sử</Text>
                ),
              }}
            />
            <Tab.Screen
              name="DanhGia"
              component={DanhGia}
              options={{
                tabBarLabel: ({focused, color}) => (
                  <Text style={[styles.text]}>Đánh giá</Text>
                ),
              }}
            />
          </Tab.Navigator>
        </>
      )}
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
