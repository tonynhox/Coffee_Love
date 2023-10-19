import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {myAddressStyle} from './myAddressStyle';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Header from '../../../utils/Header';
import { useNavigation } from '@react-navigation/native';
import { BACKGROUND_BUTTON_COLOR } from '../../../utils/contanst';

const MyAddress = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: 'Nguyen Minh Trong',
      phone: '013346+799',
      address1: 'So nha 1, duong 1',
      address2: 'phuong 2, quan, 1, TP SAIGON',
    },
    {
      id: 2,
      name: 'Nguyen Minh Trong',
      phone: '013346+799',
      address1: 'So nha 1, duong 1',
      address2: 'phuong 2, quan, 1, TP SAIGON',
    },
    {
      id: 3,
      name: 'Nguyen Minh Trong',
      phone: '013346+799',
      address1: 'So nha 1, duong 1',
      address2: 'phuong 2, quan, 1, TP SAIGON',
    },
    {
      id: 4,
      name: 'Nguyen Minh Trong',
      phone: '013346+799',
      address1: 'So nha 1, duong 1',
      address2: 'phuong 2, quan, 1, TP SAIGON',
    },
  ];

  const renderItemAddress = ({item, index}) => {
    return (
      <View style={myAddressStyle.containerItem}>
        {/* buttn mac dinh, view cua dia chi, button sua */}
        <View style={myAddressStyle.containerButtonChecked}>
          {/* Button mac dinh */}
          <View style={myAddressStyle.checkedButtonContainer}>
            <Icon name="circle-dot" size={20} color={BACKGROUND_BUTTON_COLOR} />
          </View>
        </View>

        {/* View cua dia chi */}
        <TouchableOpacity style={myAddressStyle.containerAddress}>
          {/* View ten va sdt */}
          <View style={myAddressStyle.nameAndPhoneContainer}>
            <Text style={myAddressStyle.textName}>{item.name}</Text>
            <Text style={myAddressStyle.textPhone}>{item.phone}</Text>
            <View />
            <View />
          </View>
          {/* View so nha va ten duong */}
          <View>
            <Text style={myAddressStyle.textAddress}>{item.address1}</Text>
          </View>
          {/* View phuong va quan */}
          <View>
            <Text style={myAddressStyle.textAddress}>{item.address2}</Text>
          </View>

          {/* View mac dinh */}
          <View style={myAddressStyle.defaultContainer}>
            <Text style={myAddressStyle.textDefault}>Mặc định</Text>
          </View>
        </TouchableOpacity>

        {/* View button sua */}
        <View style={myAddressStyle.containerButtonChange}>
          <TouchableOpacity style={myAddressStyle.changeButtonContainer}>
            <Text style={myAddressStyle.textChange}>Sửa</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={myAddressStyle.container}>
      <View style={{width:'100%'}}>
        <Header
          headerText="Địa chỉ của tôi"
          rightComponent={true}
        />
      </View>
      <FlatList
        style={{width: '100%'}}
        data={data}
        renderItem={renderItemAddress}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* Them dia chi */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('AddAddress')}
        style={myAddressStyle.addAddressContainer}>
        <Icon name="circle-plus" size={20} color={BACKGROUND_BUTTON_COLOR} />
        <View />
        <Text style={myAddressStyle.textAddAddress}>Thêm địa chỉ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({});
