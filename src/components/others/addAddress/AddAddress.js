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
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {addAddressStyle} from './addAddressStyle';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import Header from '../../../utils/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getAddAddress} from '../../../redux/reducers/slices/userSlice';

const AddAddress = props => {
  const {route} = props;
  const dispatch = useDispatch();
  const location = route?.params?.item;
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const id_user = useSelector(state => state.users?.user?.id_user);

  //data nhập vào
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [guide, setGuide] = useState('');

  useEffect(() => {
    if (location) {
      setAddress(location.address);
    }
  }, [location]);

  const handleAddAddress = () => {
    dispatch(
      getAddAddress({
        id_user: id_user,
        address: address,
        so_dien_thoai: phone,
        nguoi_nhan: name,
        latitude: location?.location?.lat,
        longitude: location?.location?.lng,
        navigation: navigation,
      }),
    );
  };
  
  return (
    <View style={addAddressStyle.container}>
      {/* Thong tin lien he */}
      <View style={{width: '100%'}}>
        <Header
          containerStyle={{
            // paddingHorizontal: -10,
            marginHorizontal: -10,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          headerText="Thêm địa chỉ"
          rightComponent={true}
        />
      </View>
      <View 
        style={{marginTop: 17}}
      >
        <Text style={addAddressStyle.textThongTin}>Thông tin liên hệ</Text>

        {/* Textinput ho va ten */}
        <View style={addAddressStyle.inputContainer}>
          <TextInput
            value={name}
            onChangeText={setName}
            style={addAddressStyle.input}
            placeholder="Họ và tên... "
            placeholderTextColor="#999"
          />
          <Icon name="user" solid size={20} color={BACKGROUND_BUTTON_COLOR} />
        </View>

        {/* Textinput sdt */}
        <View style={addAddressStyle.inputContainer}>
          <TextInput
            value={phone}
            onChangeText={setPhone}
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

        {/* Textinput diahchi */}
        <Pressable
          onPress={() => navigation.push('MapAddAddress')}
          style={addAddressStyle.inputContainer}>
          <TextInput
            multiline={true}
            value={address}
            onChangeText={setAddress}
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
            value={guide}
            onChangeText={setGuide}
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
      <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
        <TouchableOpacity
          onPress={() => handleAddAddress()}
          style={addAddressStyle.addAddressContainer}>
          <Text style={addAddressStyle.textAddAddress}>Thêm địa chỉ</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({});
