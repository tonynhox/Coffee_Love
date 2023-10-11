import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

const Otp = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>OTP</Text>
                <View></View>
            </View> */}

            <Text style={styles.tem}>Nhập OTP </Text>
            <View style={styles.containernum}>
                <TextInput 
                    style={styles.numOtp} />

                <TextInput 
                    style={styles.numOtp} />

                <TextInput 
                    style={styles.numOtp} />

                <TextInput 
                    style={styles.numOtp} />
            </View>


            <View style={styles.t}>
                <Text style={styles.task}>Bạn chưa nhận được OTP?</Text>
                <Text style={styles.tre}> Gửi lại</Text>
            </View>


            <Pressable style={styles.btn1} >
                <Text style={styles.txtbtn1} >
                    Nhập OTP  </Text>
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

export default Otp