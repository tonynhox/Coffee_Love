import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

import {Provider} from 'react-redux';
import AppNavigation from './src/components/navigations/AppNavigation';
import {store} from './src/redux/store';
import ModalCartOrder from './src/utils/Modals/ModalCartOrder';
import AllVoucher from './src/components/others/allVoucher/AllVoucher';
import AllCore from './src/components/others/allCore/AllCore';


const App = () => {
  return (

    <AllCore/>

    // <Provider store={store}>
    //   {/* <ModalCartOrder/> */}
    //   {/* <Demo/> */}
    //   <AppNavigation />
    //   {/* <Otp/> */}
    //   {/* <QR/> */}
    //   {/* <DanhGia/> */}
    //   {/* <ToRate/> */}
    // </Provider>

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
