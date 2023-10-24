import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import AppNavigation from './src/components/navigations/AppNavigation';
import {store} from './src/redux/store';
import ModalCartOrder from './src/utils/Modals/ModalCartOrder';
import Storage from './src/utils/Storage';
import ManHinhCHao from './src/components/navigations/ManHinhChao';
import {NavigationContainer} from '@react-navigation/native';
import {createNavigationContainerRef} from '@react-navigation/native';
import Map from './src/components/others/map4D/Map';

export const navigationRef = createNavigationContainerRef();


const App = () => {
  return (
    <Provider store={store}>

      <NavigationContainer ref={navigationRef}>
        <ManHinhCHao/>

      </NavigationContainer>

    </Provider>
  );
};


export default App;

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: 'black',
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
  },
});
