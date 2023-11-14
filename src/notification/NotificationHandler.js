import {StyleSheet, Text, View, Alert, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {getToken} from './ultis';
import {useDispatch} from 'react-redux';
import {setDeviceToken} from '../redux/reducers/slices/deviceTokenSlice';
import ModalNotification from './ModalNotification';
import OnScreenNotification from './OnScreenNotification';

const NotificationHandler = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Home');

  const waitingForToken = async () => {
    const token = await getToken();
    dispatch(setDeviceToken(token));
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      const type = remoteMessage.data.type;
      if (type === 'ProductDetail') {
        return <OnScreenNotification value={remoteMessage} />;
      }
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

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      navigation.navigate(remoteMessage.data.type);
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
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });
  }, []);

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
      {/* {isVisible.isVisible && (
        <ModalNotification
          value={isVisible.value}
          onCancel={() => setIsVisible({isVisible: false, value: ''})}
        />
      )} */}
    </>
  );
};

export default NotificationHandler;

const styles = StyleSheet.create({});
