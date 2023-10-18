import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

import {Provider} from 'react-redux';
import AppNavigation from './src/components/navigations/AppNavigation';
import {store} from './src/redux/store';
import ModalCartOrder from './src/utils/Modals/ModalCartOrder';
import OrderDetail from './src/components/others/orderDetail/OrderDetail';
import ProductDetail from './src/components/others/product/ProductDetail';

const App = () => {
  return (

    <Provider store={store}>
      {/* <ModalCartOrder/> */}
      {/* <Demo/> */}
      <ProductDetail />
      {/* <Otp/> */}
      {/* <QR/> */}
      {/* <DanhGia/> */}
      {/* <ToRate/> */}
      {/* <ProductDetail/> */}
    </Provider>

  );
};

// const App = () => {
//   return (
//     <View style={{flex:1}}>
//         {/* <MyAddress/> */}
//         {/* <AddAddress/>   */}

//         {/* <Payment/>  */}

//         {/* <EditProfile/> */}
        
//         {/* <Detail/> */}
//         <ProductDetail/>
//     </View>
//   );
// };

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
