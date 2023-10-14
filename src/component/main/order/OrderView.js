import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChoXacNhanItem from './ChoXacNhanItem';
import ChoLayHangItem from './ChoLayHangItem';
import ChoGiaoHangView from './ChoGiaoHangView';
import DaGiaoItem from './DaGiaoItem';
import DaHuyItem from './DaHuyItem';
import DanhGiaItem from './DanhGiaItem';

const OrderView = () => {
  const dataChoXacNhan = [
    {
      id: 1,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
    {
      id: 2,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
    {
      id: 3,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
    {
      id: 4,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
    {
      id: 5,
      name: 'Nguyen Minh Trong',
      size: 'S',
      location: 'So nha 1, duong 1, phuuong2',
      price: 100000,
      sale: 90000,
      quantity: 2,
      total: 180000,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginVertical: 10}}
        data={dataChoXacNhan}
        renderItem={ChoXacNhanItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
    </View>
  );
};

export default OrderView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf9f6',
  },
});
