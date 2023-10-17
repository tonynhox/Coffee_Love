import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import DangGiao from './item/DangGiao';
import LichSu from './item/LichSu';
import DanhGia from './item/DanhGia';
import Header from '../../../utils/Header';

const Tab = createMaterialTopTabNavigator();


const Orders = () => {

  return (<>
    <View style={{width:'100%'}}>
      <Header
        containerStyle={{ backgroundColor: '#fff', height: 50 }}
        rightComponent={true}
        headerText="Chi tiết đơn mua" />
    </View>

      <Tab.Navigator 

      screenOptions={{
        tabBarStyle: {

        },
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
          // width: '50%',
        }, 
        // tabBarIndicatorContainerStyle: { marginHorizontal: 40, paddingHorizontal: 80 }

      }}
      >
        <Tab.Screen 
          name="DangGiao" 
          component={DangGiao} 
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text style={[styles.text]}>Đang đến</Text>
            ),
          }}
        ></Tab.Screen>
        
        <Tab.Screen 
          name="LichSu" 
          component={LichSu} 
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text style={[styles.text]}>Lịch sử</Text>
            ),
          }}
          />
        <Tab.Screen 
          name="DanhGia" 
          component={DanhGia} 
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text style={[styles.text]}>Đánh giá</Text>
            ),
          }}
          />
      </Tab.Navigator>
      </>

  );
}

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