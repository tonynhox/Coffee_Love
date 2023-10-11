import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'
import Header from '../../../utils/Header'
const Login = ({navigation}) => {

  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <View style={styles.container}>

      <View >

        {/* <View style={styles.hd}>
          <Icon name='chevron-left' style={styles.icon} />
          <Text style={styles.thd}>Đăng Nhập</Text>
          <View></View>
        </View> */}
        <Header
          headerText={'Đăng Nhập'}
          headerStyle={{fontSize:28,fontWeight:'bold'}}
          rightComponent={
            <Text></Text>
          }
        
        />

        <Image source={require('../../../assets/images/lgimg.png')}
          style={styles.img} />

      </View>

      <View style={styles.v3}>
        <View>
          <Text style={styles.t1}>Số Điện Thoại</Text>
          <TextInput placeholder='0783800000'
            style={styles.tip1} />
        </View>

        <View>
          <Text style={styles.t1}>Mật Khẩu </Text>
          <View style={styles.vp}>
            <TextInput placeholder='.............'
              style={styles.tip1} />
            <TouchableOpacity 
                style={styles.iconEyes}
                onPress={() => setShowPassword(!showPassword)}>
                <Icon 
                name={showPassword ? 'eye' : 'eye-off'} 
                style={styles.icon2} />
              </TouchableOpacity>
          </View>
        </View>

          <TouchableOpacity
            onPress={() => {navigation.navigate('ForgotPassword')}}
          >
            <Text style={styles.t3}>Quên mật khẩu ?</Text>
          </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => {navigation.navigate('MainNavigation')}}
          style={styles.btn} >
          <Text style={styles.txtbtn} >
            Đăng Nhập </Text>
        </TouchableOpacity>

        <Text style={styles.t4}>Hoặc</Text>

        <View style={styles.vic}>
          <Icon name='google' style={[styles.icon,{color:'red'}]} />
          <Icon name='apple' style={[styles.icon,{color:'#000'}]} />
          <Icon name='facebook' style={[styles.icon,{color:'blue'}]} />
        </View>

        <View style={styles.txtlg} >
                    <Text style={styles.t5} >Bạn chưa có tài khoản? </Text>
                    <Pressable>
                        <Text style={styles.tlg} > Đăng ký</Text>
                    </Pressable>
                </View>

      </View>

    </View>
  )
}

export default Login