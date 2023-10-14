import { StyleSheet, Text, View, TextInput, Pressable ,TouchableOpacity,ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'
import Header from '../../../utils/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getOtp } from '../../../redux/reducers/slices/userSlice'
import { useNavigation } from '@react-navigation/native'

const Forgotpassword = () => {
    const [email, setEmail] = useState('');
  const navigation = useNavigation();
    const isLoading = useSelector((state) => state.users.isLoading);
  
    const dispatch = useDispatch();
  
    const handleSendOtp = () => {
  
      dispatch(getOtp({ email }));
    //   navigation.navigate('Otp')
    }

    return (
        isLoading ? 
  <ActivityIndicator size="large" color="#0000ff" /> 
  :
        <View style={styles.container}>
            {/* <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>Forgot Pasword</Text>
                <View></View>
            </View> */}
            <Header
                headerText={'Forgot Pasword'}
                headerStyle={{ fontSize: 28, fontWeight: 'bold' }}
                rightComponent={
                    <Text></Text>
                }
                />
            <Text style={styles.tem}>Nhập Email</Text>
            <TextInput 
                onChangeText={(text) => setEmail(text) }
                value={email}
                style={styles.tip} />

            <TouchableOpacity>
                <Text style={styles.t}>Trở lại đăng Ký </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => {handleSendOtp()}}
                style={styles.btn1} >
                <Text style={styles.txtbtn1} >
                Xác nhận </Text>
            </TouchableOpacity>

            <Text style={styles.tor}>Hoặc</Text>

        <View style={styles.vic}>
          <Icon name='google' style={styles.icongg} />
          <Icon name='apple' style={styles.iconap} />
          <Icon name='facebook' style={styles.iconfb} />
        </View>

        <Text style={styles.t}>Bạn đã có tài khoản </Text>

        <TouchableOpacity 
                onPress={() => {navigation.navigate('Login')}}
            style={styles.btn1} >
                <Text style={styles.txtbtn1} >
                Đăng Nhập </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Forgotpassword
