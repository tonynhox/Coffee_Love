import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {changePassOtp} from '../../../redux/reducers/slices/userSlice';
import {useNavigation} from '@react-navigation/native';

const Newpassword = props => {
  const {route} = props;
  const email = route.params?.email;
  const otp = route.params?.otp;

  const navigation = useNavigation();

  const [pass, setPass] = useState('');
  const [mat_khau, setMat_khau] = useState('');

  const isLoading = useSelector(state => state.users.isLoading);

  const dispatch = useDispatch();

  const showAlert = () => {
    Alert.alert(
      'Không Được Rỗng!',
      'Vui lòng nhập đầy đủ thông tin',
      [
        {
          text: 'Đồng ý',
          onPress: () => console.log('Đã đồng ý'),
        },
      ],
      {cancelable: false},
    );
  };

  const handleNewPass = () => {
    if (email === '' || otp === '' || mat_khau === '') {
      showAlert();
    } else {
      if (mat_khau === pass) {
        dispatch(changePassOtp({email, otp, mat_khau, navigation}));
      }
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>Mật Khẩu Mới </Text>
                <View></View>
            </View> */}
      <Header
        headerText={'Mật Khẩu Mới'}
        headerStyle={{fontSize: 28, fontWeight: 'bold'}}
        rightComponent={<Text></Text>}
      />

      <View>
        <Text style={styles.t1}>Mật Khẩu Mới </Text>
        <View style={styles.vp}>
          <TextInput
            secureTextEntry={!showPassword}
            onChangeText={text => setMat_khau(text)}
            value={mat_khau.toString()}
            style={styles.tip1}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye' : 'eye-off'} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.t2}>Nhập Lại Mật Khẩu </Text>
        <View style={styles.vp}>
          <TextInput
            secureTextEntry={!showPassword2}
            onChangeText={text => setPass(text)}
            value={pass.toString()}
            style={styles.tip1}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowPassword2(!showPassword2)}>
            <Icon name={showPassword2 ? 'eye' : 'eye-off'} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <Pressable
        onPress={() => {
          handleNewPass();
        }}
        style={styles.btn1}>
        <Text style={styles.txtbtn1}>Đổi Mật Khẩu </Text>
      </Pressable>
    </View>
  );
};

export default Newpassword;
