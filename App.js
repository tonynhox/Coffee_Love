import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/component/user/welcome/Welcome'
import Welcome1 from './src/component/user/welcome1/Welcome1'
import Login from './src/component/user/login/Login'
import SignUp from './src/component/user/SignUp/SignUp'
import Favourite from './src/component/main/Favourite/Favourite'
import Cart from './src/component/main/Cart/Cart'
import Notification from './src/component/main/Notification/Notification'
import Forgotpassword from './src/component/main/Forgotpassword/Forgotpassword'





const App = () => {
  return (
    <View>
      <Forgotpassword/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})