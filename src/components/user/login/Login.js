import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getUserFetch} from '../../../redux/reducers/slices/userSlice';

const Login = ({navigation}) => {
  const [tai_khoan, setTai_khoan] = useState('hoa123');
  const [mat_khau, setMat_khau] = useState('1234');

  const user = useSelector(state => state.users);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(getUserFetch({tai_khoan, mat_khau, navigation}));
  };

  const [showPassword, setShowPassword] = React.useState(false);

  return user.isLoading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <View style={styles.container}>
      <View>
        {/* <View style={styles.hd}>
          <Icon name='chevron-left' style={styles.icon} />
          <Text style={styles.thd}>Đăng Nhập</Text>
          <View></View>
        </View> */}
        <Header
          headerText={'Đăng Nhập'}
          headerStyle={{fontSize: 28, fontWeight: 'bold'}}
          rightComponent={<Text></Text>}
        />

        <Image
          source={require('../../../assets/images/lgimg.png')}
          style={styles.img}
        />
      </View>

      <View style={styles.v3}>
        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Tên Đăng Nhập</Text>
          <TextInput
            onChangeText={text => setTai_khoan(text)}
            value={tai_khoan.toString()}
            style={styles.tip1}
          />
        </View>

        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Mật Khẩu </Text>
          <View style={styles.vp}>
            <TextInput
              secureTextEntry={!showPassword}
              onChangeText={text => setMat_khau(text)}
              value={mat_khau}
              style={styles.tip1}
            />
            <TouchableOpacity
              style={styles.iconEyes}
              onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                style={styles.icon2}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.t3}>Quên mật khẩu ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}
          style={styles.btn}>
          <Text style={styles.txtbtn}>Đăng Nhập </Text>
        </TouchableOpacity>

        <Text style={styles.t4}>Hoặc</Text>

        <View style={styles.vic}>
          <Icon name="google" style={[styles.icon, {color: 'red'}]} />
          <Icon name="apple" style={[styles.icon, {color: '#000'}]} />
          <Icon name="facebook" style={[styles.icon, {color: 'blue'}]} />
        </View>

        <View style={styles.txtlg}>
          <Text style={styles.t5}>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.tlg}> Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
