import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../main/home/Home';
import Categories from '../main/categories/Categories';
import ListVoucher from '../main/voucher/ListVoucher';
import Profile from '../main/profile/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if (route.name == 'Home') {
            if (!focused) {
              return (
                <Icon name="home-outline" size={25} color="#6f4506" />

              );
            } else {
              return (
                  <Icon name="home-outline" size={25} color="#000" />
              );
            }
          } else if (route.name == 'Categories') {

            if (!focused) {
              return (
                <Icon name="home-outline" size={25} color="#000" />

              );
            } else {
              return (
                <Icon name="home-outline" size={25} color="#000" />

              );
            }
          } else if (route.name == 'Voucher') {
            if (!focused) {
              return (
                <Icon name="home-outline" size={25} color="#000" />

              );
            } else {
              return (
                <Icon name="home-outline" size={25} color="#000" />

              );
            }
          } else if (route.name == 'Profile') {
            if (!focused) {
              return (
                <Icon name="home-outline" size={25} color="#000" />

              );
            } else {
              return (
                <Icon name="home-outline" size={25} color="#000" />

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
  );
};

const ExtraView = () => (
  <Pressable
    style={{
      flex: 1,
      zIndex: 99,
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
      width: '86%',
      borderRadius: 20,
      padding: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

    }}>
      <View style={{justifyContent:'center'}}>
        {/* <Text>Giao đến</Text> */}
        <Text>184/88 tô ký, quận 12, TPHCM</Text>
      </View>
      <Pressable
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '34%',
          padding: 4,
          borderRadius: 40,
          backgroundColor:'#df7a00'
        }}
      >
        <View
          style={{
              backgroundColor: '#fff6e7',
              borderRadius: 40,
              width: 24,
              height: 24,
              justifyContent: 'center',
          }}
        >
          <Text style={{fontSize:12,alignSelf:'center',color:'#df7a00',fontWeight:'600'}}>2</Text>
        </View>
        <Text style={{color:'#fff',fontSize:15,fontWeight:'500'}} >30.000đ</Text>
        <Text style={{fontSize:14,color:'#fff'}} >{'\>'}</Text>
      </Pressable>

  </Pressable>
);

const HomeWithExtraView = () => (
  <View style={{ flex: 1 }}>
    <Home />
    <ExtraView />
  </View>
);

const CategoriesWithExtraView = () => (
  <View style={{ flex: 1 }}>
    <Categories />
    <ExtraView />
  </View>
);

export default MainNavigation;
