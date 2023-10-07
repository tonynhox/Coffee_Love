import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Detail from './src/component/main/product/Detail';
import EditProfile from './src/component/main/profile/EditProfile';
import MyAddress from './src/component/main/profile/MyAddress';

const App = () => {
  return (
    <View style={styles.container}>
      <MyAddress />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
