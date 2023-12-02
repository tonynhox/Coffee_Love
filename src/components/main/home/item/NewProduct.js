import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setIDSanPham,
  setOpenBottomSheet,
} from '../../../../redux/reducers/slices/utilSlice';
import SearchLoadingPlaceholder from '../../../others/loading/SearchLoadingPlaceholder';
import {formatCurrency} from '../../../../utils/formatCurrency';
import CountDown from './CountDown';
const NewProduct = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const data = useSelector(state => state.products.data);
  const data = useSelector(state => state.newProducts.data);
  const isLoading = useSelector(state => state.newProducts.isLoading);
  const user = useSelector(state => state.users.user?.id_user);
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
            source={{uri: hinh_anh_sp[0]?.hinh_anh_sp}}
          />
        </View>
        <View style={styles.cardBottom}>
          <View style={styles.CardItemMid}>
            <Text style={styles.txtTitle}>{ten_san_pham}</Text>
            <Text style={styles.txtCategory}>
              {' '}
              {size[1]?.ten_size} ,{loai_san_pham[0]?.ten_loai_san_pham}{' '}
            </Text>
          </View>
          <View style={styles.cardItemBottom}>
            <View>
              {size[1]?.giam_gia != 0 ? (
                <Text
                  style={[
                    styles.txtTitle,
                    {
                      fontStyle: 'italic',
                      textDecorationLine: 'line-through',
                      color: 'gray',
                    },
                  ]}>
                  {formatCurrency(size[1]?.gia)}
                </Text>
              ) : null}
              <Text style={styles.txtTitle}>
                {formatCurrency(size[1]?.gia_da_giam)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (user) {
                  dispatch(setIDSanPham(item.item._id));
                  dispatch(setOpenBottomSheet(true));
                } else {
                  navigation.navigate('UserNavigation', {screen: 'Login'});
                }
              }}
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

  return isLoading ? (
    <SearchLoadingPlaceholder />
  ) : data?.length > 0 ? (<View>
      <Text
        style={{color: '#000', fontSize: 22, fontWeight: '700', marginTop: 20}}>
        Sản phẩm mới
      </Text>
      <FlatList
        data={data}
        columnWrapperStyle={{justifyContent: 'space-between', flex: 1}}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
      />
    </View>):null
  
};

export default NewProduct;
