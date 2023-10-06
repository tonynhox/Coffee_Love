import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListPayment = () => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Image style={styles.img} source={require('../../../assets/images/img_cafe.png')} />
            <Text style={styles.txt} >MC . . . . . . . 5598</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.img} source={require('../../../assets/images/img_cafe.png')} />
            <Text style={styles.txt} >Thanh toán khi nhận hàng</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.img} source={require('../../../assets/images/img_cafe.png')} />
            <Text style={styles.txt} >Ví momo</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.img} source={require('../../../assets/images/img_cafe.png')} />
            <Text style={styles.txt} >ZaloPay</Text>
        </View>
    </View>
  )
}

export default ListPayment