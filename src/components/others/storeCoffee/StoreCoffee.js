import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {setLocationDefault} from '../../../redux/reducers/slices/locationMapSlice';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../utils/Header';
const StoreCoffee = () => {
  const data = useSelector(state => state.locationMap.toaDoCuaHang);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const renderItem = ({item, index}) => {
    if (index == 0) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setLocationDefault(item));
          navigation.goBack();
        }}
        style={styles.cart}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../../../assets/images/coffeeWelcom.png')}
        />
        <View style={styles.cartText}>
          <Text style={styles.text}>{item.ten_chi_nhanh}</Text>
          <Text numberOfLines={2} style={styles.text}>
            {item.dia_chi}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Header
        headerText="Danh sách cửa hàng"
        containerStyle={{
          // justifyContent: 'flex-start',
          backgroundColor: 'white',
          paddingBottom: -10,
          borderBottomWidth: 0.4,
          borderBottomColor: '#b3b3b3',
        }}
        rightComponent={true}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Gần nhất</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(setLocationDefault(data[0]));
            navigation.goBack();
          }}
          style={styles.cart}>
          <Image
            style={{width: 70, height: 70}}
            source={require('../../../assets/images/coffeeWelcom.png')}
          />
          <View style={styles.cartText}>
            <Text style={styles.text}>{data[0].ten_chi_nhanh}</Text>
            <Text style={styles.text}>{data[0].dia_chi}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Các cửa hàng</Text>
        <FlatList key={item => item._id} data={data} renderItem={renderItem} />
      </View>
    </>
  );
};

export default StoreCoffee;
