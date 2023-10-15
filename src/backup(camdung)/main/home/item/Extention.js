import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Extention = () => {
  return (
    <View style={styles.cardExtention}>
      <View style={styles.itemExtention}>
        <Icon name="qrcode-scan" size={30} color="#D89543" />
        <Text style={styles.txtItem}>Tại bàn</Text>
      </View>
      <View style={styles.itemExtention}>
        <Icon name="moped-electric" size={30} color="#D89543" />
        <Text style={styles.txtItem} >Tận nhà</Text>
      </View>
      <View style={styles.itemExtention}>
        <Icon name="diamond-stone" size={30} color="#D89543" />
        <Text style={styles.txtItem}>Đổi điểm</Text>
      </View>
    </View>
  )
}

export default Extention
