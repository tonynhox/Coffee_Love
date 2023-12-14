import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../../../utils/Header';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useDispatch, useSelector} from 'react-redux';
import {
  getChangeFavoriteRequest,
  getFavoriteRequest,
} from '../../../../redux/reducers/slices/favoriteSlice';
import Loading from '../../../../utils/Loading';
import { useIsFocused } from '@react-navigation/native';

const Favorite = ({navigation}) => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.favorite.dataFavorite);
  const user = useSelector(state => state.users.user);
  const isLoading = useSelector(state => state.favorite.isLoading);

  // const fetchFavorite = () => {
  //   dispatch(getFavoriteRequest({id_user: user?.id_user}));
  // };

  // useEffect(() => {
  //   fetchFavorite();
  // }, []);


  const changeTrangThaiYeuThich = ({id_user, id_san_pham}) => {
    dispatch(getChangeFavoriteRequest({id_user, id_san_pham}));
  };

  const navigateToProductDetail = ({id}) => {
    navigation.navigate('ProductDetail', {id: id});
  };

  const renderFavorite = ({item, index}) => {
    const isOrange = index % 2 === 0;

    return (
      <TouchableOpacity
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingLeft: 10,
            paddingRight: 15,
            marginVertical: 5,
            paddingVertical: 10,
            borderRadius: 20,
            marginHorizontal: 10,
            elevation: 3,
          },
          {backgroundColor: isOrange ? 'white' : '#FCEEE2'},
        ]}
        onPress={() => navigateToProductDetail({id: item._id})}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.hinh_anh_sp[0].hinh_anh_sp}}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              resizeMode: 'cover',
            }}
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              color: 'black',
              marginLeft: 15,
            }}>
            {item.ten_san_pham}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            changeTrangThaiYeuThich({
              id_user: user?.id_user,
              id_san_pham: item._id,
            });
            
          }}>
          <Icon name="heart" solid={item.isLike} size={30} color="#E95300" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Header
        containerStyle={{
          // paddingHorizontal: -10,
          marginHorizontal: -10,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
        headerText="Yêu thích"
        rightComponent={true}></Header>

      <>
        {isLoading ? <Loading/> : (
          <>
            {data.length == 0 ? (
              <View
                style={{
                  marginTop: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                  }}>
                  Không có sản phẩm yêu thích
                </Text>

                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    backgroundColor: '#E3850C',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 10,
                    elevation: 3,
                  }}
                  onPress={() => navigation.navigate('Home')}>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: 'white'}}>
                    Khám phá
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
                <FlatList
                  data={data}
                  renderItem={renderFavorite}
                  keyExtractor={item => item._id}
                />
            )}
          </>
        )}
      </>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
