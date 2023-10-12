import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home/Home';
import Categories from '../categories/Categories';
import ListVoucher from '../listVoucher/ListVoucher';
import Profile from '../profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

        <Tab.Screen name="Home" component={Home}           
          options={{
              presentation: 'modal',
                  animationTypeForReplace: 'push',
                  animation:'slide_from_right'
              }}
        />

        <Tab.Screen name="Categories" component={Categories}           
          options={{
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'slide_from_right'
              }}
        />
        <Tab.Screen name="Voucher" component={ListVoucher}           
          options={{
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'slide_from_right'
              }}
        />
        <Tab.Screen name="Profile" component={Profile}           
          options={{
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'slide_from_right'
              }}
        />
        

    </Tab.Navigator>
  );
};

export default MainNavigation;
