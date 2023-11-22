import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  getChangeStatusReadNotification,
  getNotificationRequest,
} from '../../../redux/reducers/slices/userSlice';
import {useIsFocused} from '@react-navigation/native';
import NotificationLoadingPlaceholder from '../loading/NotificationLoadingPlaceholder';

const Notification = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users);
  const isLoading = useSelector(state => state.users.isNotificationLoading);

  useEffect(() => {
    const fetchNotification = () => {
      dispatch(getNotificationRequest({id_user: user.user.id_user}));
    };

    fetchNotification();
  }, []);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const fetchNotification = () => {
        dispatch(getNotificationRequest({id_user: user.user.id_user}));
      };

      fetchNotification();
    }
  }, [isFocused]);

  const navigateToSpecificScreen = ({_id, type, id_product}) => {
    dispatch(
      getChangeStatusReadNotification({
        id_user: user.user.id_user,
        id_notification: _id,
      }),
    );

    if (type === 'NewProduct') {
      navigation.navigate('ProductDetail', {id: id_product});
    }
    if (type === 'Delivering' || type === 'Delivered') {
      navigation.navigate('OrderDetail', {id_don_hang: id_product});
    }
  };

  const renderNotification = ({item}) => {
    const isIdOrder =
      item.type === 'NewProduct' ? item.title : `#${item.title}`;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        activeOpacity={0.9}
        onPress={() =>
          navigateToSpecificScreen({
            _id: item._id,
            type: item.type,
            id_product: item.id_product,
          })
        }>
        <View style={styles.vtit}>
          <Image source={{uri: item.image}} style={styles.imgit} />

          <View style={styles.contentContainer}>
            <Text
              style={!item.isRead ? styles.textTitle : styles.textTitleRead}>
              {isIdOrder}
            </Text>
            <Text style={!item.isRead ? styles.t : styles.tRead}>
              {item.message}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.navhd}>
                <Text style={styles.thd}>Thông Báo</Text>
                <Icon name='bell-outline' style={styles.iconhd} />
            </View> */}

      <Header
        headerText="Thông Báo"
        styleIconhdRight={{fontSize: 25, color: 'black'}}
        rightComponent={true}
        style={{
          elevation: 5,
          borderBottomWidth: 1,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      />

      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <NotificationLoadingPlaceholder />
        </View>
      ) : (
        <>
          {user.notifications.length === 0 ? (
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '500',
                  alignSelf: 'center',
                  marginTop: Dimensions.get('window').width / 2,
                }}>
                Không có thông báo
              </Text>
            </View>
          ) : (
            <FlatList
              data={user.notifications}
              renderItem={renderNotification}
              keyExtractor={(item, index) => index.toString()}
              // style={{flex: 1}}
            />
          )}
        </>
      )}
    </View>
  );
};

export default Notification;
