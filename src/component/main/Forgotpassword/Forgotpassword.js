import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

const Forgotpassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>Forgot Pasword</Text>
                <View></View>
            </View>

            <Text style={styles.tem}>Nhập Email</Text>
            <TextInput placeholder='maihoa03@gmail.com'
                style={styles.tip} />

            <Text style={styles.t}>Trở lại đăng Ký </Text>

            <Pressable style={styles.btn1} >
                <Text style={styles.txtbtn1} >
                Nhập OT </Text>
            </Pressable>

            <Text style={styles.tor}>Hoặc</Text>

        <View style={styles.vic}>
          <Icon name='google' style={styles.icongg} />
          <Icon name='apple' style={styles.iconap} />
          <Icon name='facebook' style={styles.iconfb} />
        </View>

        <Text style={styles.t}>Bạn đã có tài khoản </Text>

        <Pressable style={styles.btn1} >
                <Text style={styles.txtbtn1} >
                Đăng Nhập </Text>
            </Pressable>

        </View>
    )
}

export default Forgotpassword
