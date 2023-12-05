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
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {addAddressStyle} from './addAddressStyle';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import Header from '../../../utils/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getAddAddress} from '../../../redux/reducers/slices/userSlice';
import {
  getDeleteAddressFetch,
  getEditAddressFetch,
} from '../../../redux/reducers/slices/editAddressSlice';
import Loading from '../../../utils/Loading';

const EditAddress = props => {
  const {route} = props;
  const dispatch = useDispatch();

  //item này ở bên list address lúc chọn địa chỉ
  const location = route?.params?.item;

  const dataItem = route?.params?.dataItem;
  const navigation = useNavigation();

  const id_user = useSelector(state => state.users?.user?.id_user);

  const isLoading = useSelector(state => state.editAddress.isLoading);
  //data nhập vào
  const [name, setName] = useState(dataItem?.nguoi_nhan);
  const [phone, setPhone] = useState(dataItem?.so_dien_thoai);
  const [address, setAddress] = useState(dataItem?.ten_dia_chi);
  const [guide, setGuide] = useState('');

  const [_id, set_id] = useState(dataItem?._id);

  // const _id = dataItem?._id;

  const [errorStatus, setErrorStatus] = useState({
    name: {
      trang_thai: false,
      message: '',
    },
    phone: {
      trang_thai: false,
      message: '',
    },
    address: {
      trang_thai: false,
      message: '',
    },
  });

  useEffect(() => {
    if (location) {
      setAddress(location.address);
    }
  }, [location]);

  //check error
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

  const checkValidate = () => {
    updateErrorStatus('name', false, '');
    updateErrorStatus('phone', false, '');
    updateErrorStatus('address', false, '');

    let status = false;

    if (name === '' || name === null) {
      updateErrorStatus('name', true, 'Không được để trống');
      status = true;
    }

    if (phone === '' || name === null) {
      updateErrorStatus('phone', true, 'Không được để trống');
      status = true;
    }

    if (address === '' || name === null) {
      updateErrorStatus('address', true, 'Không được để trống');
      status = true;
    }

    if (phone.length !== 10 || phone[0] !== '0') {
      updateErrorStatus('phone', true, 'Số điện thoại không hợp lệ');
      status = true;
    }

    return status;
  };

  const handleEditAddress = () => {
    const check = checkValidate();

    if (!check) {
      dispatch(
        getEditAddressFetch({
          id_user: id_user,
          id_dia_chi: _id,
          address: address,
          so_dien_thoai: phone,
          nguoi_nhan: name,
          latitude: location?.location?.lat,
          longitude: location?.location?.lng,
          navigation: navigation,
        }),
      );
    }
  };

  return (
    <View style={addAddressStyle.container}>
      {isLoading && <Loading />}
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
          headerText="Sửa địa chỉ"
          rightComponent={
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Xóa địa chỉ',
                  'Bạn có chắc chắn muốn xóa địa chỉ này?',
                  [
                    {
                      text: 'Hủy',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'Xóa',
                      onPress: () => {
                        dispatch(
                          getDeleteAddressFetch({
                            id_user: id_user,
                            id_dia_chi: _id,
                            navigation: navigation,
                          }),
                        );
                      },
                    },
                  ],
                  {cancelable: false},
                );
              }}
              style={{marginRight: 16}}>
              <Icon name="trash" size={20} color={'red'} />
            </TouchableOpacity>
          }
        />
      </View>
      <View style={{marginTop: 17}}>
        <Text style={addAddressStyle.textThongTin}>Thông tin liên hệ</Text>

        {/* Textinput ho va ten */}
        <View
          style={{
            marginTop: 12,
            marginBottom: 12,
          }}>
          <ErrorMessage
            status={errorStatus.name.trang_thai}
            message={errorStatus.name.message}
          />
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
        </View>

        {/* Textinput sdt */}
        <View
          style={{
            marginBottom: 12,
          }}>
          <ErrorMessage
            status={errorStatus.phone.trang_thai}
            message={errorStatus.phone.message}
          />
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
      </View>

      {/* Dia chi */}
      <View style={{marginTop: 15}}>
        <Text style={addAddressStyle.textThongTin}>Địa chỉ</Text>

        {/* Textinput diahchi */}
        <View
          style={{
            marginTop: 12,
            marginBottom: 12,
          }}>
          <ErrorMessage
            status={errorStatus.address.trang_thai}
            message={errorStatus.address.message}
          />
          <Pressable
            onPress={() => navigation.push('MapAddAddress', {isEdit: true})}
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
            <Icon
              name="location-dot"
              size={20}
              color={BACKGROUND_BUTTON_COLOR}
            />
          </Pressable>
        </View>

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
          onPress={() => handleEditAddress()}
          style={addAddressStyle.addAddressContainer}>
          <Text style={addAddressStyle.textAddAddress}>Sửa địa chỉ</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditAddress;
