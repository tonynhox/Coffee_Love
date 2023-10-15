import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemIn4Payment = () => {
  return (
    <View style={styles.container}>
        <Text style={[styles.txtTitle,{marginBottom:16,fontWeight:'400'}]}>Phương thức thanh Toán</Text>
        <View style={styles.card}>
            <View style={[styles.itemRow,{justifyContent:'flex-start'}]}>
                <Icon name="credit-card-marker-outline" size={34} color="#000" />
                <Text style={[styles.txtTitle,{marginLeft:12,fontWeight:'400'}]}>Thanh Toán Khi Nhận Hàng </Text>
            </View>
        </View>


    </View>
  )
}

export default ItemIn4Payment
