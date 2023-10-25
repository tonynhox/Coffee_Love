import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const Menu = ({openBottomMuaHang}) => {
  const navigation = useNavigation();
  const data = useSelector(state => state.products.data);
  const isLoading = useSelector(state => state.products.isLoading);

  const renderItem = item => {
    const {ten_san_pham, size, hinh_anh_sp, loai_san_pham} = item.item;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetail', {id: item.item._id})
        }
        style={styles.cardProduct}>
        <View style={styles.cardImg}>
          <Image
            style={styles.imgProduct}
            source={{uri: hinh_anh_sp[0].hinh_anh_sp}}
          />
        </View>
        <View style={styles.cardBottom}>
          <View style={styles.CardItemMid}>
            <Text style={styles.txtTitle}>{ten_san_pham}</Text>
            <Text style={styles.txtCategory}>
              {' '}
              {size[1].ten_size} ,{loai_san_pham[0].ten_loai_san_pham}{' '}
            </Text>
          </View>
          <View style={styles.cardItemBottom}>
            <Text style={styles.txtTitle}>{size[1].gia}</Text>
            <TouchableOpacity
              onPress={() => openBottomMuaHang({id: item.item._id})}
              style={{
                borderRadius: 100,
                backgroundColor: '#df7a00',
                padding: 5,
              }}>
              <Icon name="plus" style={{fontSize: 20, color: '#fff'}} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
//aaaaaaaaaaaaaaaaaaa
  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <View>
      <Text
        style={{color: '#000', fontSize: 20, fontWeight: '700', marginTop: 20}}>
        Menu
      </Text>
      <FlatList
        data={data}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
      />
    </View>
  );
};

export default Menu;
