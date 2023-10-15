import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

import {Provider} from 'react-redux';
import AppNavigation from './src/components/navigations/AppNavigation';
import {store} from './src/redux/store';
import AddAddress from './src/components/others/addAddress/AddAddress';
import Payment from './src/components/others/payment/Payment';
import EditProfile from './src/components/others/editProfile/EditProfile';
import MyAddress from './src/components/others/myAdddress/MyAddress';
import ProductDetail from './src/components/others/product/ProductDetail';
import QR from './src/components/others/qrCode/QR';
import History from './src/backup(camdung)/main/order/History';
import ToRate from './src/backup(camdung)/main/toRate/ToRate';
import DanhGia from './src/backup(camdung)/main/order/DanhGia';
import Otp from './src/components/user/otp/Otp';
const App = () => {
  return (

    <Provider store={store}>
      {/* <Demo/> */}
      <AppNavigation />
      {/* <Otp/> */}
      {/* <QR/> */}
      {/* <DanhGia/> */}
      {/* <ToRate/> */}
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
