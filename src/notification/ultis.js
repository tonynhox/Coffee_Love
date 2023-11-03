import messaging from '@react-native-firebase/messaging';
import {setDeviceToken} from '../redux/reducers/slices/deviceTokenSlice';


export const getToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log('Token:================ ', token);
  return token;
};

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};
