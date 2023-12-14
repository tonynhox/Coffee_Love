import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const MY_CHANNEL_ID = 'newest';
const MY_CHANNEL_NAME = 'My channel name';

const OnScreenNotification = ({value}) => {
  useEffect(() => {
    pushNotification();
  }, [value]);

  // "data":{
  //   "body":"Cà phê trứng muối",
  //   "header":"Coffee.Love vừa cho ra sản phẩm mới đó",
  //   "image":"https://firebasestorage.googleapis.com/v0/b/login-143c8.appspot.com/o/product%2Fproduct-1.jpg?alt=media&token=0a8d3d4b-3b6e-4a4f-9a6e-1b6e1e1b0b2a",
  //   "type":"new_product",
  //username: 'Trong',

  const pushNotification = () => {
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: MY_CHANNEL_ID, // (required) channelId, if the channel doesn't exist, notification will not trigger.
      ticker: 'My Notification Ticker', // (optional)
      //   showWhen: true, // (optional) default: true
      //   autoCancel: true, // (optional) default: true
      largeIcon: 'ic_notification', // (optional) default: "ic_launcher". Use "" for no large icon.
      largeIconUrl: value.data.image, // (optional) default: undefined
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
      bigText: value.data.bigText, // abc là sản phẩm mới nhất đó, thử ngay nhé
      subText: 'mới', // (optional) default: none
      // bigPictureUrl: value.data.image, // (optional) default: undefined
      //   bigLargeIcon: 'ic_launcher', // (optional) default: undefined
      // bigLargeIconUrl: value.notification.android.imageUrl, // (optional) default: undefined
      color: '#F6CA6C', // (optional) default: system default
      //   vibrate: true, // (optional) default: true
      //   vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      //   tag: 'some_tag', // (optional) add tag to message
      //   group: 'group', // (optional) add group to message
      //   groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      //   ongoing: false, // (optional) set whether this is an "ongoing" notification
      //   priority: 'high', // (optional) set notification priority, default: high
      //   visibility: 'private', // (optional) set notification visibility, default: private
      ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
      //   shortcutId: 'shortcut-id', // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
      //   onlyAlertOnce: false, // (optional) alert will open only once with sound and notify, default: false

      //   when: null, // (optional) Add a timestamp (Unix timestamp value in milliseconds) pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      //   usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      //   timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

      //   messageId: 'google:message_id', // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module.
      data: {
        id: value.data?.idDonHang,
        screen: value.data?.type,
      },
      //   actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      /* iOS only properties */
      //   category: '', // (optional) default: empty string
      //   subtitle: 'My Notification Subtitle', // (optional) smaller title below notification title

      /* iOS and Android properties */
      //   id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: value.data.title, // (optional)
      message: value.data.message, // Coffee.Love vừa cho ra sản phẩm mới
      // userInfo: {name: 'Trong Dep trai'}, // (optional) default: {} (using null throws a JSON value '<null>' error)
      //   playSound: false, // (optional) default: true
      //   soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      //   number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
      //   repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    });
  };

  // init notification
  PushNotification.popInitialNotification(notification => {
    console.log('Initial Notification', notification);
  });

  // create channel
  PushNotification.createChannel(
    {
      channelId: MY_CHANNEL_ID, // (required)
      channelName: MY_CHANNEL_NAME, // (required)
      //   channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      //   playSound: false, // (optional) default: true
      //   soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      //   importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      //   vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );

  PushNotification.configure({
    largeIcon: 'ic_notification',
    smallIcon: 'ic_notification',
  });

  return <></>;
};

export default OnScreenNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
