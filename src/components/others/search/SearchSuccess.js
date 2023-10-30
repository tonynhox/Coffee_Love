import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../utils/Header';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const SearchSuccess = () => {
  const navigation = useNavigation();
  const data = useSelector(state => state.searchs.search);
  console.log("dataS>>> ", data);

  const showAlert = () => {
    Alert.alert(
      'Xin lỗi',
      'Không tìm thấy sản phẩm, quay lại tìm kiếm?',
      [
        {
          text: 'Đồng ý',
          onPress: () => navigation.navigate('Search'),
        },
      ],
      {cancelable: false},
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetail', {id: item.item._id})
        }
        style={styles.cardProduct}>
        <View style={styles.cardImg}>
          <Image
            style={styles.imgProduct}
            source={{uri: item.hinh_anh_sp[0].hinh_anh_sp}}
          />
        </View>
        <View style={styles.cardBottom}>
          <View style={styles.CardItemMid}>
            <Text style={styles.txtTitle}>{item.ten_san_pham}</Text>
            <Text style={styles.txtCategory}>
              {' '}
              {item.size[1].ten_size} ,{item.loai_san_pham[0].ten_loai_san_pham}{' '}
            </Text>
          </View>
          <View style={styles.cardItemBottom}>
            <Text style={styles.txtTitle}>{item.size[1].gia}</Text>
            <TouchableOpacity
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
  
  
  return data.length == '' ? (
    showAlert()
  ) : (
    <>
      <LinearGradient
        colors={['#CC9F68', '#CC9F68']}
        style={styles.findAndArrowBackContainer}>
        <TouchableOpacity
          style={styles.arrowBack}
          onPress={() => navigation.navigate('Search')}>
          <Icon6 name={'arrow-left'} size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={'#CC9F68'}
            style={styles.input}
            color={'black'}
            placeholder="Tìm kiếm..."
            // value={search}
            // onChangeText={text => handleSearch(text)}
          />

          {/* Find */}
          <TouchableOpacity>
            <Icon6
              name={'magnifying-glass'}
              size={20}
              color="#CC9F68"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <FlatList
          data={data}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default SearchSuccess;
