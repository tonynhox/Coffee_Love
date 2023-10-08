import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'
import Header from '../../../utils/Header'

const Newpassword = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>Mật Khẩu Mới </Text>
                <View></View>
            </View> */}
            <Header
                headerText={'Mật Khẩu Mới'}
                headerStyle={{ fontSize: 28, fontWeight: 'bold' }}
                rightComponent={
                    <Text></Text>
                }
                />

            <View>
                <Text style={styles.t1}>Mật Khẩu Mới </Text>
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

export default Newpassword