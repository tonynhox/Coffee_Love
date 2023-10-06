import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToRate from './src/component/main/toRate/ToRate'
import ItemIn4Product from './src/component/main/ordersDetail/item/ItemIn4Product'
import ItemIn4Payment from './src/component/main/ordersDetail/item/ItemIn4Payment'
import ItemNote from './src/component/main/ordersDetail/item/ItemNote'
import OrdersDetail from './src/component/main/ordersDetail/OrdersDetail'
import ListPayment from './src/component/main/listPayment/ListPayment'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <OrdersDetail/> */}
      <ListPayment/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
 container:{
  flex:1
 }
})