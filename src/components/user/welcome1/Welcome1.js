import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

const Welcome1 = ({navigation}) => {
    return (
        <View style={[styles.container]}>
                <TouchableOpacity 
                onPress={() => {navigation.navigate('MainNavigation')}}
                    style={styles.kip}>
                    <Text style={styles.txt1}>Bỏ qua</Text>
                    <Icon name='chevron-right' style={styles.icon} />
                </TouchableOpacity>

                <Text style={styles.t2}>Bắt Đầu Nào!</Text>

                <Image source={require('../../../assets/images/lgimg.png')}
                    style={styles.img} />

                <TouchableOpacity style={styles.btn} 
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                >
                    <Text style={styles.txtbtn} >
                        Đăng Ký </Text>
                </TouchableOpacity>

                <View style={styles.txtlg} >
                    <Text style={styles.t3} >Bạn đã có tài khoản? </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                    >
                        <Text style={styles.tlg} > Đăng nhập</Text>
                    </TouchableOpacity>
                </View>


        </View>
    )
}

export default Welcome1
