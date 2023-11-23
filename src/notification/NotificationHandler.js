import {StyleSheet, Text, View, Alert, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {getToken} from './ultis';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCurrentDeviceToken,
  setDeviceToken,
} from '../redux/reducers/slices/deviceTokenSlice';
import ModalNotification from './ModalNotification';
import OnScreenNotification from './OnScreenNotification';
import ModalDanhGiaNotification from './notificationDanhGiaSanPham/ModalDanhGiaNotification';
import {getIncreaseCountNotificationByRemote} from '../redux/reducers/slices/userSlice';

const NotificationHandler = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Home');
  const [remoteMessage, setRemoteMessage] = useState('');

  const waitingForToken = async () => {
    const token = await getToken();
    dispatch(setCurrentDeviceToken(token));
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      setRemoteMessage(remoteMessage);
      dispatch(getIncreaseCountNotificationByRemote());
      // console.log('TYPE==============', type);
      // if (type === 'ProductDetail' || type === 'OrderDelivering') {
      //   console.log('RUN DELIVERING =================');
      //   return <OnScreenNotification value={remoteMessage} />;
      // }
      // if (type === 'OrderArrived') {
      //   console.log('RUN ARRIVED =================');

      //   return <ModalDanhGiaNotification value={remoteMessage} user={user} />;
      // }
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    waitingForToken();
  }, []);

  // useEffect(() => {
  //   // Assume a message-notification contains a "type" property in the data payload of the screen to open
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //     navigation.navigate(remoteMessage.data.type);
  //   });

  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //         setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
  //       }
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    // Subscribe to the 'new_product' topic
    const subscribeToTopic = async () => {
      try {
        await messaging().subscribeToTopic('new_product');
        console.log('Subscribed to the new_product topic');
      } catch (error) {
        console.error('Error subscribing to the new_product topic', error);
      }
    };

    subscribeToTopic();

    // Rest of your code...
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      {remoteMessage?.data?.type === 'ProductDetail' ||
      remoteMessage?.data?.type === 'OrderDelivering' ? (
        <OnScreenNotification value={remoteMessage} />
      ) : (
        <>
          {remoteMessage?.data?.type === 'OrderArrived' && (
            <ModalDanhGiaNotification value={remoteMessage} />
          )}
        </>
      )}
    </>
  );
};

export default NotificationHandler;

const styles = StyleSheet.create({});
