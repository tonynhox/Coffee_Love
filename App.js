import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Detail from './src/component/main/product/Detail';
import EditProfile from './src/component/main/profile/EditProfile';
import MyAddress from './src/component/main/profile/MyAddress';
import AddAddress from './src/component/main/profile/AddAddress';
import ChoXacNhanItem from './src/component/main/order/ChoXacNhanItem';
import OrderView from './src/component/main/order/OrderView';
import Payment from './src/component/main/home/card/Payment';

const App = () => {
  return (
    <View style={styles.container}>
      <OrderView />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
