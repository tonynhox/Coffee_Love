import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {addAddressStyle} from './addAddressStyle';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import Header from '../../../utils/Header';

const AddAddress = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={addAddressStyle.container}
    >
      {/* Thong tin lien he */}
      <View style={{width: '100%'}}>
        <Header headerText="Thêm địa chỉ" rightComponent={true} />
      </View>
      <View>
        <Text style={addAddressStyle.textThongTin}>Thông tin liên hệ</Text>

        {/* Textinput ho va ten */}
        <View style={addAddressStyle.inputContainer}>
          <TextInput
            style={addAddressStyle.input}
            placeholder="Họ và tên... "
            placeholderTextColor="#999"
          />
          <Icon name="user" solid size={20} color={BACKGROUND_BUTTON_COLOR} />
        </View>

        {/* Textinput sdt */}
        <View style={addAddressStyle.inputContainer}>
          <TextInput
            style={addAddressStyle.input}
            placeholder="Số điện thoại... "
            placeholderTextColor="#999"
          />
          <Icon name="phone" size={20} color={BACKGROUND_BUTTON_COLOR} />
        </View>
      </View>
      {/* Dia chi */}
      <View style={{marginTop: 15}}>
        <Text style={addAddressStyle.textThongTin}>Địa chỉ</Text>

        {/* Textinput ho va ten */}
        <Pressable 
          style={addAddressStyle.inputContainer}>
          <TextInput
            editable={false}
            style={addAddressStyle.input}
            placeholder="Chọn địa chỉ"
            placeholderTextColor="#999"
          />
          <Icon name="location-dot" size={20} color={BACKGROUND_BUTTON_COLOR} />
        </Pressable>

        {/* Textinput sdt */}
        <View style={addAddressStyle.inputContainer}>
          <TextInput
            style={addAddressStyle.input}
            placeholder="Hướng dẫn giao hàng"
            placeholderTextColor="#999"
          />
          <Icon name="location-dot" size={20} color={BACKGROUND_BUTTON_COLOR} />
        </View>

        {/* Dat mac dinh */}
        {/* <View style={addAddressStyle.defaultLocationContainer}>
          <Text style={addAddressStyle.textThongTin}>
            Đặt làm địa chỉ mặc định
          </Text>
          <Switch
            style={{marginLeft: 'auto'}}
            trackColor={{false: '#767577', true: '#968169'}}
            thumbColor={isEnabled ? BACKGROUND_BUTTON_COLOR : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View> */}
      </View>
      <KeyboardAvoidingView 
        style={{flex:1}}  
        behavior={"padding"} 

        >
        <TouchableOpacity style={addAddressStyle.addAddressContainer}>
          <Text style={addAddressStyle.textAddAddress}>Thêm địa chỉ</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({});
