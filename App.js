import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Detail from './src/component/main/product/Detail';
import EditProfile from './src/component/main/profile/EditProfile';

const App = () => {
  return (
    <View style={styles.container}>
      <EditProfile />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
