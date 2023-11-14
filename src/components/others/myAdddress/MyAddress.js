import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {myAddressStyle} from './myAddressStyle';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Header from '../../../utils/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import {useDispatch, useSelector} from 'react-redux';
import {setMyLocation} from '../../../redux/reducers/slices/locationMapSlice';

const MyAddress = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const isCart = route.params?.isCart || false;
  const diachi = useSelector(state => state.users?.user?.dia_chi);
  const dispatch = useDispatch();
  const renderItemAddress = ({item, index}) => {
    console.log('item', item);
    return (
      <TouchableOpacity
        onPress={() => {
          if (isCart) {
            dispatch(
              setMyLocation({
                latitude: Number(item.latitude),
                longitude: Number(item.longitude),
                so_dien_thoai: item.so_dien_thoai,
                nguoi_nhan: item.nguoi_nhan,
              }),
            ),
              navigation.goBack();
          }
        }}
        style={myAddressStyle.containerItem}>
        {/* buttn mac dinh, view cua dia chi, button sua */}
        <View style={myAddressStyle.containerButtonChecked}>
          {/* Button mac dinh */}
          <View style={myAddressStyle.checkedButxtonContainer}>
            <Icon name="house-user" size={18} color={BACKGROUND_BUTTON_COLOR} />
          </View>
        </View>

        {/* View cua dia chi */}
        <View style={myAddressStyle.containerAddress}>
          {/* View ten va sdt */}
          <View style={myAddressStyle.nameAndPhoneContainer}>
            <Text style={myAddressStyle.textName}>{item?.nguoi_nhan}</Text>
          </View>
          {/* View so nha va ten duong */}
          {/* View phuong va quan */}
          <View>
            <Text style={myAddressStyle.textAddress}>
              {item?.so_dien_thoai}
            </Text>
          </View>

          <View>
            <Text style={myAddressStyle.textAddress}>
              Địa chỉ: {item?.ten_dia_chi}
            </Text>
          </View>

          {/* View mac dinh */}
          {/* {item.mac_dinh?

          <View style={myAddressStyle?.defaultContainer}>
            <Text style={myAddressStyle?.textDefault}>
              Mặc định
            </Text>
          </View>
          : null } */}
        </View>

        {/* View button sua */}
        <View style={myAddressStyle.containerButtonChange}>
          <TouchableOpacity style={myAddressStyle.changeButtonContainer}>
            <Text style={myAddressStyle.textChange}>Sửa</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  // useEffect(() => {
  //   // Cấu hình header và truyền giá trị data cho CustomRightHeader
  //   navigation.setOptions({
  //     headerRight: () => {

  //     {/* Them dia chi */}
  //     return
  //     }
  //   });
  // }, []);

  return (
    <View style={myAddressStyle.container}>
      <View style={{width: '100%'}}>
        <Header
          headerText="Địa chỉ của tôi"
          containerStyle={{
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
          rightComponent={
            <TouchableOpacity
              onPress={() => navigation.navigate('AddAddress')}
              style={{marginRight: 16}}
              >
              <Icon
                name="circle-plus"
                size={25}
                color={BACKGROUND_BUTTON_COLOR}
              />
            </TouchableOpacity>
          }
        />
      </View>
      {/* cart choose */}
      {isCart && (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('MapAddAddress', {isCart: true})}
            style={[
              myAddressStyle.containerItem,
              {justifyContent: 'flex-start', padding: 12},
            ]}>
            <Icon name="map" size={20} color={BACKGROUND_BUTTON_COLOR} />
            <Text
              style={{
                fontWeight: '400',
                fontSize: 15,
                color: 'black',
                // padding: 4
                paddingLeft: 10,
              }}>
              Chọn địa chỉ trên bản đồ
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                color: 'black',
                // padding: 4
              }}>
              Địa chỉ đã lưu
            </Text>
          </View>
        </>
      )}

      {/* List dia chi */}
      <FlatList
        style={{width: '100%'}}
        data={diachi}
        renderItem={renderItemAddress}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({});
