import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getRegister} from '../../../redux/reducers/slices/userSlice';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [tai_khoan, setTai_khoan] = useState('');
  const [mat_khau, setMat_khau] = useState('');
  const [ho_ten, setHo_ten] = useState('');
  const [sdt, setSdt] = useState('');
  const [email, setEmail] = useState('');

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
  // so dien thoai khong dung
  const showAlertPhone = () => {
    Alert.alert(
      'Sai số điện thoại!',
      'Vui lòng nhập đúng số điện thoại',
      [
        {
          text: 'Đồng ý',
          onPress: () => console.log('Đã đồng ý'),
        },
      ],
      {cancelable: false},
    );
  };
  // email khong khong dung
  const showAlertEmail = () => {
    Alert.alert(
      'Sai Email!',
      'Vui lòng nhập đúng email',
      [
        {
          text: 'Đồng ý',
          onPress: () => console.log('Đã đồng ý'),
        },
      ],
      {cancelable: false},
    );
  };

  const handleSignUp = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const phoneRegex = /^0[0-9]{8,10}$/;

    if (
      tai_khoan === '' ||
      mat_khau === '' ||
      ho_ten === '' ||
      sdt === '' ||
      email === ''
    ) {
      showAlert();
    } else if (phoneRegex.test(sdt) === false) {
      showAlertPhone();
    } else if (emailRegex.test(email) === false) {
      showAlertEmail();
    } else {
      dispatch(
        getRegister({tai_khoan, mat_khau, ho_ten, sdt, email, navigation}),
      );
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      {/* <View style={styles.container2}> */}
      <Header
        headerText={'Đăng ký'}
        headerStyle={{fontSize: 28, fontWeight: 'bold'}}
        rightComponent={<Text></Text>}
      />
      {/* <View style={styles.hd}>
          <Icon name='chevron-left' style={styles.icon} />
          <Text style={styles.thd}>Đăng Ký</Text>
          <View></View>
        </View> */}
      {/* </View> */}
      <Image
        source={require('../../../assets/images/lgimg.png')}
        style={styles.img}
      />

      <ScrollView style={styles.v3}>
        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Họ Tên</Text>
          <TextInput
            color={'black'}
            placeholderTextColor={'black'}
            onChangeText={text => setHo_ten(text)}
            value={ho_ten}
            style={styles.tip1}
          />
        </View>

        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Tên Đăng Nhập</Text>
          <TextInput
            color={'black'}
            placeholderTextColor={'black'}
            onChangeText={text => setTai_khoan(text)}
            value={tai_khoan}
            style={styles.tip1}
          />
        </View>

        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Mật Khẩu </Text>
          <View style={styles.vp}>
            <TextInput
              color={'black'}
              placeholderTextColor={'black'}
              onChangeText={text => setMat_khau(text)}
              value={mat_khau}
              secureTextEntry={!showPassword}
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

        {/* so dien thoai */}
        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Số điện thoại </Text>
          <View style={styles.vp}>
            <TextInput
              color={'black'}
              placeholderTextColor={'black'}
              onChangeText={text => setSdt(text)}
              value={sdt}
              style={styles.tip1}
            />
          </View>
        </View>

        {/* email  */}
        <View style={styles.marginTopInput}>
          <Text style={styles.t1}>Email </Text>
          <View style={styles.vp}>
            <TextInput
              color={'black'}
              placeholderTextColor={'black'}
              onChangeText={text => setEmail(text)}
              value={email}
              style={styles.tip1}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            handleSignUp();
          }}
          style={styles.btn}>
          <Text style={styles.txtbtn}>Đăng Ký </Text>
        </TouchableOpacity>

        <Text style={styles.t4}>Hoặc</Text>

        <View style={styles.vic}>
          <Icon name="google" style={[styles.icon, {color: 'red'}]} />
          <Icon name="apple" style={[styles.icon, {color: '#000'}]} />
          <Icon name="facebook" style={[styles.icon, {color: 'blue'}]} />
        </View>

        <View style={styles.txtlg}>
          <Text style={styles.t5}>Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.tlg}> Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* loading view */}
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator
            size="large"
            color="#F76208"
            style={{marginTop: Dimensions.get('screen').height / 2}}
          />
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
};

export default SignUp;
