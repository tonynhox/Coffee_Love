import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from '../styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardUser = () => {
  return (
    <View style={styles.cardUser}>
        <Text style={styles.txtTitle} >Đăng nhập</Text>
        <Text style={[styles.txtCategory,{fontWeight:'400',textAlign:'center'}]} >Sử dụng app để tích điểm và đổi những ưu đãi dành riêng cho thành viên bạn nhé.</Text>
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={[styles.txtTitle,{color:'#fff'}]}>Đăng nhập</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CardUser
