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
import {getNotificationRequest} from '../../../redux/reducers/slices/userSlice';

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

  const navigateToSpecificScreen = ({title, type, id_product}) => {
    console.log('TITLE: ', type);
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
            title: item.title,
            type: item.type,
            id_product: item.id_product,
          })
        }>
        <View style={styles.vtit}>
          <Image source={{uri: item.image}} style={styles.imgit} />

          <View style={styles.contentContainer}>
            <Text style={styles.textTitle}>{isIdOrder}</Text>
            <Text style={styles.t}>{item.message}</Text>
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
          <ActivityIndicator size="large" color="red" />
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
