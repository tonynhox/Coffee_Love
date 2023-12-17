import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getOtp} from '../../../redux/reducers/slices/userSlice';
import {useNavigation} from '@react-navigation/native';
import Loading from '../../../utils/Loading';

const Forgotpassword = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const isLoading = useSelector(state => state.users.isLoading);

  const dispatch = useDispatch();
  const [errorStatus, setErrorStatus] = useState({
    email: {
      trang_thai: false,
      message: '',
    },
  });
  const updateErrorStatus = (field, status, message) => {
    setErrorStatus(prev => ({
      ...prev,
      [field]: {
        trang_thai: status,
        message: message,
      },
    }));
  };
  const ErrorMessage = ({status, message}) => {
    return status ? <Text style={{color: 'red'}}>{message}</Text> : null;
  };

  const handleSendOtp = () => {
    const checkEmail = '^\.+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$';
    if (email.match(checkEmail)) {
      dispatch(getOtp({email: email, navigation: navigation}));
    } else {
      updateErrorStatus('email', true, 'Email không hợp lệ');
    }
  };

  return (
    <>
      <Header
        headerText="Quên mật khẩu"
        headerStyle={{
          // backgroundColor: 'white',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 28,
        }}
        containerStyle={{
          // justifyContent: 'flex-start',
          // backgroundColor: 'white',
          paddingBottom: -10,
        }}
        rightComponent={true}
      />
      <View style={styles.container}>
        {/* <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>Forgot Pasword</Text>
                <View></View>
            </View> */}
        {isLoading && <Loading />}

        <Text style={styles.tem}>Nhập Email</Text>
        <ErrorMessage
          status={errorStatus.email.trang_thai}
          message={errorStatus.email.message}
        />
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          style={[styles.tip,{
            borderColor: errorStatus.email.trang_thai ? 'red' : 'black',
          }]}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.t}>Trở về đăng Ký </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleSendOtp();
          }}
          style={styles.btn1}>
          <Text style={styles.txtbtn1}>Xác nhận </Text>
        </TouchableOpacity>

        <Text style={styles.tor}>Hoặc</Text>

        <View style={styles.vic}>
          <Icon name="google" style={styles.icongg} />
          <Icon name="apple" style={styles.iconap} />
          <Icon name="facebook" style={styles.iconfb} />
        </View>

        <Text style={styles.t}>Bạn đã có tài khoản </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.btn1}>
          <Text style={styles.txtbtn1}>Đăng Nhập </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Forgotpassword;
