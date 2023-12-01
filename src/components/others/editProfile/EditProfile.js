import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  ActivityIndicator,
  Image
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {editProfileStyle} from './editProfileStyle';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR, BUCKET_NAME} from '../../../utils/contanst';
import Header from '../../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {editUser} from '../../../redux/reducers/slices/userSlice';
import {ScrollView} from 'react-native-virtualized-view';
import ImagePicker from 'react-native-image-crop-picker';
import uuid from 'react-native-uuid';
import VisionCamera from '../oders/item/VisionCamera';
import {Storage} from 'aws-amplify';
import ImageProgress from 'react-native-image-progress';
import {CircleSnail} from 'react-native-progress';
import { resizeImage } from '../../../utils/resizeImage';

const EditProfile = () => {
  const user = useSelector(state => state.users.user);
  const [dataTemp, setdataTemp] = useState(user);
  const [errorStatus, setErrorStatus] = useState({
    ten: false,
    email: false,
    sdt: false,
  });

  let avatarUrl = user.avatar;

  const isLoading = useSelector(state => state.users.isChangeUserLoading);
  const id = user.id_user;

  const dispatch = useDispatch();

  const handleEdit = async () => {

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const phoneRegex = /^0[0-9]{8,10}$/;
    console.log('REGEX NUMBER: ', phoneRegex.test(dataTemp.so_dien_thoai));

    let hasErrorTen = false;
    let hasErrorEmail = false;
    let hasErrorSdt = false;
    let isTen = false;
    let isEmail = false;
    let isSdt = false;

    if (dataTemp.ho_ten === '') {
      isTen = true;
      hasErrorTen = true;
    }
    if (dataTemp.email === '' || !emailRegex.test(dataTemp.email)) {
      isEmail = true;
      hasErrorEmail = true;
    }
    if (
      dataTemp.so_dien_thoai === '' ||
      !phoneRegex.test(dataTemp.so_dien_thoai)
    ) {
      isSdt = true;
      hasErrorSdt = true;
    }

    if (hasErrorTen || hasErrorEmail || hasErrorSdt) {
      setErrorStatus({
        ten: isTen,
        email: isEmail,
        sdt: isSdt,
      });

      return;
    }

    setErrorStatus({
      ten: false,
      email: false,
      sdt: false,
    });

    const s3AvatarUrl = await uploadImagesToS3();

    // console.log('DISPATCH ', {...dataTemp, avatar: s3AvatarUrl});
    dispatch(
      editUser({...dataTemp, avatar: s3AvatarUrl}), //ok
    );
  };

  useEffect(() => {
    setCameraValue(prevCameraValue => ({
      isVisible: false,
      value: {id: '', uri: user.avatar},
    }));

    avatarUrl = user.avatar;
  }, [user]);

  const [cameraValue, setCameraValue] = useState({
    isVisible: false,
    value: {id: '', uri: user.avatar},
  });

  // chon anh tu thu vien
  const handleImageFromLibrary = () => {
    ImagePicker.openPicker({
      multiple: false,
    })
      .then(async images => {
        console.log('IMAGE FROM LIBRARY: ', images);
        const resize = await resizeImage(images.path);
        const newArray = {
          id: uuid.v4(), // Assuming you have the uuid library
          uri: resize,
        };
        setCameraValue(prevCameraValue => ({
          isVisible: false,
          value: newArray,
        }));
      })
      .catch(error => {
        console.log('ERROR SELECTING IMAGE: ', error);
      });
  };

  // mo camera len
  const handleTakePicture = () => {
    setCameraValue(prevCameraValue => ({
      isVisible: true,
      value: prevCameraValue.value,
    }));
  };

  // da chup anh
  const handleTakingPhoto = ({isVisible, value}) => {
    setCameraValue(prevCameraValue => ({
      isVisible: false,
      value: {
        id: uuid.v4(),
        uri: value,
      },
    }));
  };

  const [isUploading, setIsUploading] = useState(false);
  // up ảnh lên s3
  const uploadImagesToS3 = async () => {
    try {
      const photo = cameraValue.value;
      const response = await fetch(photo.uri);
      const blob = await response.blob();
      const result = await Storage.put(uuid.v4(), blob, {
        contentType: 'image/jpeg',
        level: 'public',
        bucket: BUCKET_NAME,
      });

      console.log('Image uploaded successfully', result.key);
      const s3Link = `https://${BUCKET_NAME}.s3.ap-southeast-1.amazonaws.com/public/${result.key}`;
      avatarUrl = s3Link;

      // Now, you have the key for the uploaded image.
      console.log('Uploaded image key:', s3Link);
      return s3Link;
    } catch (error) {
      console.log('ERROR UPLOADING FILES: ', error);
      ToastAndroid.show('Đã xảy ra lỗi khi gửi ảnh đi!', ToastAndroid.SHORT);
      return user.avatar;
    }
  };

  const onCloseCamera = () => {
    setCameraValue(prevCameraValue => ({
      isVisible: false,
      value: prevCameraValue.value,
    }));
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // showsVerticalScrollIndicator={false}
        // contentContainerStyle={editProfileStyle.container}
        style={editProfileStyle.container}>
        {/* Image avatar */}

        <View style={{marginVertical: 40}}>
          {/* <View
            style={{
              borderRadius: 100,
              borderWidth: 0.3,
              borderColor: '#F68509',
              width: 200,
              height: 200,
              alignSelf:'center',
            }}> */}
            <Image
            
              source={{uri: cameraValue.value.uri}}
              style={[editProfileStyle.imageProfile]}
              // indicator={CircleSnail}
              // indicatorProps={{
              //   size: 20,
              //   color: 'rgba(255, 165, 0, 1)',
              //   unfilledColor: 'rgba(200, 200, 200, 0.2)',
              // }}
            />
          {/* </View> */}
          <Icon
            name="photo-film"
            size={30}
            color={BACKGROUND_BUTTON_COLOR}
            style={editProfileStyle.library}
            onPress={handleImageFromLibrary}
          />
          <Icon
            name="camera"
            size={30}
            color={BACKGROUND_BUTTON_COLOR}
            style={editProfileStyle.camera}
            onPress={handleTakePicture}
          />
        </View>

        {/* input name view */}
        <View style={editProfileStyle.textInputContainer}>
          <Text style={editProfileStyle.textLableInput}>Tên</Text>
          {errorStatus.ten && (
            <Text style={editProfileStyle.textLableInputWrong}>
              Tên không được để trống
            </Text>
          )}
          <View
            style={
              !errorStatus.ten
                ? editProfileStyle.inputContainer
                : editProfileStyle.inputContainerWrong
            }>
            <TextInput
              style={editProfileStyle.input}
              onChangeText={text => setdataTemp({...dataTemp, ho_ten: text})} // ghi tieeps
              value={dataTemp.ho_ten}
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

          {errorStatus.email && (
            <Text style={editProfileStyle.textLableInputWrong}>
              E-mail sai định dạng
            </Text>
          )}
          <View
            style={
              !errorStatus.email
                ? editProfileStyle.inputContainer
                : editProfileStyle.inputContainerWrong
            }>
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

          {errorStatus.sdt && (
            <Text style={editProfileStyle.textLableInputWrong}>
              Số điện thoại không đúng định dạng (10 số)
            </Text>
          )}
          <View
            style={
              !errorStatus.sdt
                ? editProfileStyle.inputContainer
                : editProfileStyle.inputContainerWrong
            }>
            <TextInput
              style={editProfileStyle.input}
              onChangeText={text =>
                setdataTemp({...dataTemp, so_dien_thoai: text})
              }
              keyboardType="numeric"
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

        {isLoading && (
          <View
            style={{
              position: 'absolute',
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}>
            <ActivityIndicator
              size="large"
              color="#FF6200"
              style={{marginTop: Dimensions.get('screen').height / 2}}
            />
          </View>
        )}
      </KeyboardAvoidingView>

      <VisionCamera
        isVisible={cameraValue.isVisible}
        onTakingPhoto={handleTakingPhoto}
        onClose={onCloseCamera}
      />
    </>
  );
};

export default EditProfile;
