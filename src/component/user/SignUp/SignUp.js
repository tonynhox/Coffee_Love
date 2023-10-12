import { View, Text, Image, Pressable, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'
import Header from '../../../utils/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFetch } from '../../../redux/reducers/slices/userSlice'

const SignUp = () => {

  const [tai_khoan, setTai_khoan] = useState('');
  const [mat_khau, setMat_khau] = useState('');
  const [ho_ten, setHo_ten] = useState('')

  const isLoading = useSelector((state) => state.users.isLoading);

  const dispatch = useDispatch();

  const handleSignUp = () => {

    dispatch(getUserFetch({ tai_khoan, mat_khau, ho_ten }));
  }


  const [showPassword, setShowPassword] = React.useState(false)


  return (
    <View style={styles.container}>

      {/* <View style={styles.container2}> */}
      <Header
        headerText={'Đăng ký'}
        headerStyle={{ fontSize: 28, fontWeight: 'bold' }}
        rightComponent={
          <Text></Text>
        }

      />
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
          <TextInput
            onChangeText={text => setHo_ten(text)}
            value={ho_ten}
            style={styles.tip1} />
        </View>

        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Tên Đăng Nhập</Text>
          <TextInput
            onChangeText={text => setTai_khoan(text)}
            value={tai_khoan}
            style={styles.tip1} />
        </View>

        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Mật Khẩu </Text>
          <View style={styles.vp}>
            <TextInput
              onChangeText={text => setMat_khau(text)}
              value={mat_khau}
              secureTextEntry={!showPassword}
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
          onPress={() => { handleSignUp() }}
          style={styles.btn} >
          <Text style={styles.txtbtn} >
            Đăng Ký </Text>
        </TouchableOpacity>

        <Text style={styles.t4}>Hoặc</Text>

        <View style={styles.vic}>
          <Icon name='google' style={[styles.icon, { color: 'red' }]} />
          <Icon name='apple' style={[styles.icon, { color: '#000' }]} />
          <Icon name='facebook' style={[styles.icon, { color: 'blue' }]} />
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