import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import WheelOfFortune from './src/component/main/wheelOfFortune/WheelOfFortune';
import Cart from './src/component/main/Cart/Cart';
import Changepassword from './src/component/main/Changepassword/Changepassword';
import Favourite from './src/component/main/Favourite/Favourite';
import Forgotpassword from './src/component/main/Forgotpassword/Forgotpassword';
import Home from './src/component/main/home/Home';
import Payment from './src/component/main/home/card/Payment';
import ListPayment from './src/component/main/listPayment/ListPayment';
import Newpassword from './src/component/main/Newpassword/Newpassword';
import Notification from './src/component/main/Notification/Notification';
import OrderView from './src/component/main/order/OrderView';

import Otp from './src/component/main/Otp/Otp';
import Profile from './src/component/main/profile/Profile';
import AddAddress from './src/component/main/profile/AddAddress';
import MyAddress from './src/component/main/profile/MyAddress';
import EditProfile from './src/component/main/profile/EditProfile';
import ToRate from './src/component/main/toRate/ToRate';
import Detail from './src/component/main/product/Detail';
import Header from './src/utils/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Provider} from 'react-redux';
import AppNavigation from './src/component/navigations/AppNavigation';
import {store} from './src/redux/store';
import SignUp from './src/component/user/SignUp/SignUp';
import Login from './src/component/user/login/Login';
import ChoGiaoHangView from './src/component/main/order/ChoGiaoHangView';
import DaGiaoItem from './src/component/main/order/DaGiaoItem';
import ProductDetail from './src/component/main/newProduct/ProductDetail';

// const App = () => {
//   return (

//     <Provider store={store}>
//       <AppNavigation />
//       {/* <Profile/> */}
//     </Provider>

//     // <WheelOfFortune/>
//   );
// };

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Cart/> */}
      {/* <Changepassword/> */}
      {/* <Favourite/> */}
      {/* <Payment/> */}
      {/* <ListPayment/> */}
      {/* <Newpassword/> */}
      {/* <Notification/> */}
      {/* <OrderView/> */}
      {/* <ProductDetail/> */}
      {/* <AddAddress/> */}
      {/* <MyAddress/> */}
      {/* <EditProfile/> */}
      {/* <ToRate/> */}

      {/* <ChoGiaoHangView/> */}
      {/* <DaGiaoItem/> */}
    </View>
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
