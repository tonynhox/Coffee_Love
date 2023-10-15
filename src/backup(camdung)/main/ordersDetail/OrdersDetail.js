import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ItemIn4Product from './item/ItemIn4Product'
import ItemIn4Payment from './item/ItemIn4Payment'
import ItemNote from './item/ItemNote'

const OrdersDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <ItemIn4Product/>
      <View style={styles.borderView}></View>
      <ItemIn4Payment/>
      <View style={styles.borderView}></View>
      <ItemNote/>
    </ScrollView>
  )
}

export default OrdersDetail
