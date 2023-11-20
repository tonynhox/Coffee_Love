import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import { getNotificationRequest } from '../../../redux/reducers/slices/userSlice';

const Notification = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.users.notifications);
  const isLoading = useSelector(state => state.users.isNotificationLoading);

  useEffect(() => {
    const fetchNotification = () => {
      dispatch(getNotificationRequest({id_user: '651e8c5baa3c5378de775821'}));
    };

    fetchNotification();
  }, []);

  const renderNotification = ({item}) => {
    const isIdOrder =
      item.type === 'NewProduct' ? item.title : `#${item.title}`;
    return (
      <TouchableOpacity style={styles.itemContainer} activeOpacity={0.9}>
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
      />

      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderNotification}
          keyExtractor={(item, index) => index.toString()}
          // style={{flex: 1}}
        />
      )}
    </View>
  );
};

export default Notification;
