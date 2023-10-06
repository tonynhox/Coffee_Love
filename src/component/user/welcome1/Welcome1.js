import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

const Welcome1 = () => {
    return (
        <View style={[styles.container]}>
            <View style={styles.container2}>
                <View style={styles.kip}>
                    <Text style={styles.txt1}>Bỏ qua</Text>
                    <Icon name='chevron-right' style={styles.icon} />
                </View>

                <Text style={styles.t2}>Bắt Đầu Nào!</Text>

                <Image source={require('../../../assets/images/lgimg.png')}
                    style={styles.img} />

                <Pressable style={styles.btn} >
                    <Text style={styles.txtbtn} >
                        Đăng Ký </Text>
                </Pressable>

                <View style={styles.txtlg} >
                    <Text style={styles.t3} >Bạn đã có tài khoản? </Text>
                    <Pressable>
                        <Text style={styles.tlg} > Đăng nhập</Text>
                    </Pressable>
                </View>
            </View>


        </View>
    )
}

export default Welcome1
