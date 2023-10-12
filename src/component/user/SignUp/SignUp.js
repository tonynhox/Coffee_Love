import { View, Text, Image, Pressable, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'
import Header from '../../../utils/Header'

const SignUp = () => {

  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <View style={styles.container}>

      {/* <View style={styles.container2}> */}
      {/* <Header
          headerText={'Đăng ký'}
          headerStyle={{fontSize:28,fontWeight:'bold'}}
          rightComponent={
            <Text></Text>
          }
        
        /> */}
        {/* <View style={styles.hd}>
          <Icon name='chevron-left' style={styles.icon} />
          <Text style={styles.thd}>Đăng Ký</Text>
          <View></View>
        </View> */}
      {/* </View> */}
        <Image source={require('../../../assets/images/lgimg.png')}
          style={styles.img} />

      <View style={styles.v3}>

        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Họ Tên</Text>
          <TextInput placeholder='Jane Cooper'
            style={styles.tip1} />
        </View>

        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Số Điện Thoại</Text>
          <TextInput placeholder='0783800000'
            style={styles.tip1} />
        </View>

        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Mật Khẩu </Text>
          <View style={styles.vp}>
            <TextInput 
              secureTextEntry={!showPassword}
              placeholder='.............'
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


        <TouchableOpacity style={styles.btn} >
          <Text style={styles.txtbtn} >
            Đăng Ký </Text>
        </TouchableOpacity>

        <Text style={styles.t4}>Hoặc</Text>

        <View style={styles.vic}>
          <Icon name='google' style={[styles.icon,{color:'red'}]} />
          <Icon name='apple' style={[styles.icon,{color:'#000'}]} />
          <Icon name='facebook' style={[styles.icon,{color:'blue'}]} />
        </View>

        <View style={styles.txtlg} >
            <Text style={styles.t5} >Bạn đã có tài khoản? </Text>
            <TouchableOpacity>
                <Text style={styles.tlg} > Đăng nhập</Text>
            </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default SignUp