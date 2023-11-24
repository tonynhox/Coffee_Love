import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {editProfileStyle} from './editProfileStyle';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {editUser} from '../../../redux/reducers/slices/userSlice';
import { ScrollView } from 'react-native-virtualized-view';

const EditProfile = () => {
  const user = useSelector(state => state.users.user);
  const [dataTemp, setdataTemp] = useState(user);

  // const [ten, setTen] = useState(user.ho_ten);
  // const [ava, setAva] = useState(user.avatar);//twj ghi
  // const [mail, setMail] = useState(user.email);
  // const [sdt, setSdt] = useState(user.so_dien_thoai);// xuoosng duwois swar laij choox value

  // co 2 cach lam
  //1 la lam nhu cach tren nhung trong
  //store ko viet lai nen no ko thay doi o giao dien
  // 2 la thay doi truc tiep trong store, gio tao lam cach 2 nho xem cho ki
  const isLoading = useSelector(state => state.users.isLoading);
  const id = user.id_user;

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      // editUser({
      //   id_user: id,
      //   ho_ten: ten,
      //   avatar: ava,
      //   email: mail,
      //   so_dien_thoai: sdt,
      // }),
      editUser(dataTemp), //ok
    );
  };

  return (
    <>
      <Header
        headerText="Chỉnh sửa hồ sơ"
        containerStyle={{
          // justifyContent: 'flex-start',
          backgroundColor: 'white',
          paddingBottom: -10,
        }}
        rightComponent={true}
      />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={editProfileStyle.container}
        // style={editProfileStyle.container}
        >
        {/* Image avatar */}

        <Image
          source={require('../../../assets/images/avatar.png')}
          style={editProfileStyle.imageProfile}
        />

        {/* input name view */}
        <View style={editProfileStyle.textInputContainer}>
          <Text style={editProfileStyle.textLableInput}>Tên</Text>
          <View style={editProfileStyle.inputContainer}>
            <TextInput
              style={editProfileStyle.input}
              onChangeText={text => setdataTemp({...dataTemp, ho_ten: text})}
              value={dataTemp.ho_ten} //ghi tiep
              placeholderTextColor="#999"
            />
            <Icon
              name="user"
              size={20}
              color={BACKGROUND_BUTTON_COLOR}
              style={editProfileStyle.icon}
            />
          </View>
        </View>

        {/* input Email view */}
        <View style={editProfileStyle.textInputContainer}>
          <Text style={editProfileStyle.textLableInput}>E-mail</Text>
          <View style={editProfileStyle.inputContainer}>
            <TextInput
              style={editProfileStyle.input}
              onChangeText={text => setdataTemp({...dataTemp, email: text})} // ghi tieeps
              value={dataTemp.email}
              placeholderTextColor="#999"
            />
            <Icon
              name="envelope"
              size={20}
              color={BACKGROUND_BUTTON_COLOR}
              style={editProfileStyle.icon}
            />
          </View>
        </View>

        {/* input Email view */}
        <View style={editProfileStyle.textInputContainer}>
          <Text style={editProfileStyle.textLableInput}>Số điện thoại</Text>
          <View style={editProfileStyle.inputContainer}>
            <TextInput
              style={editProfileStyle.input}
              onChangeText={text =>
                setdataTemp({...dataTemp, so_dien_thoai: text})
              }
              value={dataTemp.so_dien_thoai}
              placeholderTextColor="#999"
            />
            <Icon
              name="phone"
              size={20}
              color={BACKGROUND_BUTTON_COLOR}
              style={editProfileStyle.icon}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleEdit();
          }}
          style={editProfileStyle.buttonSaveProfile}>
          <Text style={editProfileStyle.textSaveProfile}>Đặt Lại Hồ Sơ</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default EditProfile;
