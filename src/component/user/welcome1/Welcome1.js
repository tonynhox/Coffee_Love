import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

const Welcome1 = () => {
  return (
    <View style ={[styles.container ]}>
        <View style={styles.kip}>
            <Text style={styles.txt1}>Bỏ qua</Text>
            <Icon name='chevron-right' style={styles.icon}/>
        </View>

        <Text style={styles.t2}>Bắt Đầu Nào!</Text>

        <Image source={require('../../../assets/images/lgimg.png')}
                style={styles.img} />

        <Pressable >
                <Text >
                        Đăng Ký </Text>
            </Pressable>

            <View >
                <Text >Bạn đã có tài khoản? </Text>
                <Pressable>
                    <Text > Đăng nhập</Text>
                </Pressable>
            </View>
      
    </View>
  )
}

export default Welcome1
