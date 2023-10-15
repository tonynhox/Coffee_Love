import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {editProfileStyle} from './editProfileStyle';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import Header from '../../../utils/Header';

const EditProfile = () => {
  return (
    <View style={editProfileStyle.container}>
      {/* Image avatar */}

      <View
        style={{
          width:'100%'
        }}
      >     
        <Header
          headerText="Chỉnh sửa hồ sơ"
          rightComponent={true}
        />
      </View>

      <Image
        source={require('../../../assets/images/americano.png')}
        style={editProfileStyle.imageProfile}
      />

      {/* input name view */}
      <View style={editProfileStyle.textInputContainer}>
        <Text style={editProfileStyle.textLableInput}>Tên</Text>
        <View style={editProfileStyle.inputContainer}>
          <TextInput
            style={editProfileStyle.input}
            placeholder="Tên của bạn "
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
            placeholder="Email của bạn "
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
            placeholder="SDT của bạn "
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
      <TouchableOpacity style={editProfileStyle.buttonSaveProfile}>
        <Text style={editProfileStyle.textSaveProfile}>Đặt Lại Hồ Sơ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
