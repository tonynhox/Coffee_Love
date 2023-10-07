import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

const Changepassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>Đổi Mật Khẩu </Text>
                <View></View>
            </View>

            <View>
                <Text style={styles.t1}>Mật Hiện Tại </Text>
                <View style={styles.vp}>
                    <TextInput placeholder='Nhập mật khẩu hiện tại của bạn'
                        style={styles.tip1} />
                    <Icon name='lock-outline' style={styles.icon} />
                </View>

                <Text style={styles.t2}>Mật Khẩu Mới </Text>
                <View style={styles.vp}>
                    <TextInput placeholder='Nhập mật khẩu mới của bạn'
                        style={styles.tip1} />
                    <Icon name='lock-outline' style={styles.icon} />
                </View>

                <Text style={styles.t2}>Nhập Lại Mật Khẩu </Text>
                <View style={styles.vp}>
                    <TextInput placeholder='Nhập lại mật khẩu của bạn'
                        style={styles.tip1} />
                    <Icon name='lock-outline' style={styles.icon} />
                </View>
            </View>

            <Pressable style={styles.btn1} >
                <Text style={styles.txtbtn1} >
                    Đổi Mật Khẩu  </Text>
            </Pressable>
        </View>
    )
}

export default Changepassword