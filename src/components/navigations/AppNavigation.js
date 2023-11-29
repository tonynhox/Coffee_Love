import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';

import MainNavigation from './MainNavigation';
import UserNavigation from './UserNavigation';
import ProductDetail from '../others/product/ProductDetail';
import Search from '../others/search/Search';
import SearchSuccess from '../others/search/SearchSuccess';
import Notification from '../others/notification/Notification';
import Orders from '../others/oders/Orders';
import WheelOfFortune from '../others/wheelOfFortune/WheelOfFortune';
import OrderDetail from '../others/orderDetail/OrderDetail';
import EditProfile from '../others/editProfile/EditProfile';
import AddAddress from '../others/addAddress/AddAddress';
import MyAddress from '../others/myAdddress/MyAddress';
import ToRate from '../others/toRate/ToRate';
import Changepassword from '../others/changepassword/Changepassword';
import AllVoucher from '../others/allVoucher/AllVoucher';
import AllScore from '../others/allScore/AllScore';
import ScoreHistory from '../others/scoreHistory/ScoreHistory';
import VoucherCart from '../others/cartPayment/VoucherCart';
import StoreCoffee from '../others/storeCoffee/StoreCoffee';
import MapAddAddress from '../others/addAddress/MapAddAddress';
import VisionCamera from '../others/oders/item/VisionCamera';
import NotificationHandler from '../../notification/NotificationHandler';

import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging from '@react-native-firebase/messaging';
import Favorite from '../main/profile/item/Favorite';

// add other navigation functions that you need and export them
const Stack = createNativeStackNavigator();

const AppNavigation = props => {
  const navigation = props.navigation;
  // const dispatch = useDispatch();

  //get api khi vào app
  PushNotification.configure({
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);

      if (notification.userInteraction) {
        if (notification.data.screen === 'ProductDetail') {
          navigation.navigate('ProductDetail', {id: notification.data.id});
        }
        if (notification.data.screen === 'OrderDelivering') {
          navigation.navigate('OrderDetail', {
            id_don_hang: notification.data.id,
          });
        }
      }

      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // ... other configurations
  });

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );

      if (remoteMessage.data.type === 'ProductDetail') {
        navigation.navigate('ProductDetail', {id: remoteMessage.data.id});
      }
      if (
        remoteMessage.data.type === 'OrderDelivering' ||
        remoteMessage.data.type === 'OrderArrived'
      ) {
        navigation.navigate('OrderDetail', {
          id_don_hang: remoteMessage.data.id,
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
    <>
      <NotificationHandler />

      <Stack.Navigator
        useNativeDriver={true}
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'MainNavigation'}>
        <Stack.Screen
          name="UserNavigation"
          component={UserNavigation}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="MainNavigation"
          component={MainNavigation}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="SearchSuccess"
          component={SearchSuccess}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />

        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />

        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={{
            headerShown: true,
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />

        <Stack.Screen
          name="WheelOfFortune"
          component={WheelOfFortune}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="Changepassword"
          component={Changepassword}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="MyAddress"
          component={MyAddress}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="ToRate"
          component={ToRate}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="AllVoucher"
          component={AllVoucher}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="AllScore"
          component={AllScore}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="ScoreHistory"
          component={ScoreHistory}
          options={{
            presentation: 'modal',
            // animationTypeForReplace: 'push',
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="VoucherCart"
          component={VoucherCart}
          options={{
            presentation: 'modal',
            headerShown: true,
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="StoreCoffee"
          component={StoreCoffee}
          options={{
            presentation: 'modal',
            headerShown: true,
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="MapAddAddress"
          component={MapAddAddress}
          options={{
            title: 'Chọn địa chỉ',
            headerShown: true,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            // animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          // options={{
          //   title: 'Chọn địa chỉ',
          //   headerShown: true,
          //   presentation: 'modal',
          //   animationTypeForReplace: 'push',
          //   // animation: 'slide_from_right',
          // }}
        />
        
      </Stack.Navigator>
    </>
  );
};

export default AppNavigation;
