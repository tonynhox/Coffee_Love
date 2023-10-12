import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import OrderView from '../OrderView';
import History from '../History';

const Tab = createMaterialTopTabNavigator();


const OrderNavigation = () => {
  return (
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
          name="OrderView" 
          component={OrderView} 
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text style={[styles.text]}>Đang đến</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="ShipRoute" 
          component={History} 
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text style={[styles.text]}>Lịch sử</Text>
            ),
          }}
          />
                  <Tab.Screen 
          name="History" 
          component={History} 
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text style={[styles.text]}>Đánh giá</Text>
            ),
          }}
          />
      </Tab.Navigator>

  );
}

export default OrderNavigation;


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
