import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {setMyLocation} from '../../../redux/reducers/slices/locationMapSlice';
import {setListAddress} from '../../../redux/reducers/slices/utilSlice';
const ListAddress = ({isCart, isEdit}) => {
  const navigation = useNavigation();
  const data = useSelector(state => state.utils?.listAddress);
  const dispatch = useDispatch();

  const renderOItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          //nếu có edit thì chuyển sang trang edit, không thì chuyển sang check biến giỏ hàng(toán tử 3 ngôi 2 cấp)
          isEdit
            ? navigation.navigate('EditAddress', {item: item})
            : isCart
            ? (dispatch(
                setMyLocation({
                  latitude: item?.location?.lat,
                  longitude: item?.location?.lng,
                  so_dien_thoai: item.so_dien_thoai,
                  nguoi_nhan: item.ho_ten,
                }),
              ),
              navigation.navigate('Home'))
            : navigation.navigate('AddAddress', {item: item})
        }
        style={styles.container}>
        <View style={{padding: 10}}>
          <Icon name="map-marker-outline" size={20} color={'gray'} />
        </View>
        <View style={{width: '90%'}}>
          <Text style={styles.text}>{item?.name}</Text>
          <Text style={styles.textItem}>{item?.address}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderOItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 0.6,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textItem: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
});
