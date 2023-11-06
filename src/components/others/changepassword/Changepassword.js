import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {changePass} from '../../../redux/reducers/slices/userSlice';
import {useNavigation} from '@react-navigation/native';

const Changepassword = () => {
  const navigation = useNavigation();
  const [mat_khau_cu, setMat_khau_cu] = useState('');
  const [mat_khau_moi, setMat_khau_moi] = useState('');
  const [pass, setPass] = useState('');

  const isLoading = useSelector(state => state.users.isLoading);
  const id = useSelector(state => state.users.user.id_user);

  const dispatch = useDispatch();

  const handleChagePass = () => {
    if (Object.is(mat_khau_moi, pass)) {
      dispatch(changePass({id_user: id, mat_khau_cu, mat_khau_moi, navigation}));
    }
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>Đổi Mật Khẩu </Text>
                <View></View>
            </View> */}

      <View>
        <Text style={styles.t1}>Mật Hiện Tại </Text>
        <View style={styles.vp}>
          <TextInput
            onChangeText={text => setMat_khau_cu(text)}
            value={mat_khau_cu}
            style={styles.tip1}
          />
          <Icon name="lock-outline" style={styles.icon} />
        </View>

        <Text style={styles.t2}>Mật Khẩu Mới </Text>
        <View style={styles.vp}>
          <TextInput
            onChangeText={text => setMat_khau_moi(text)}
            value={mat_khau_moi}
            style={styles.tip1}
          />
          <Icon name="lock-outline" style={styles.icon} />
        </View>

        <Text style={styles.t2}>Nhập Lại Mật Khẩu </Text>
        <View style={styles.vp}>
          <TextInput
            onChangeText={text => setPass(text)}
            value={pass}
            style={styles.tip1}
          />
          <Icon name="lock-outline" style={styles.icon} />
        </View>
      </View>

      <Pressable
        onPress={() => {
          handleChagePass();
        }}
        style={styles.btn1}>
        <Text style={styles.txtbtn1}>Đổi Mật Khẩu </Text>
      </Pressable>
    </View>
  );
};

export default Changepassword;
