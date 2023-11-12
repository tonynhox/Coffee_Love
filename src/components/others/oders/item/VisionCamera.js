import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {Camera} from 'react-native-vision-camera';
import uuid from 'react-native-uuid';
import NoCameraDeviceError from './NoCameraDeviceError';
import {useDispatch} from 'react-redux';
import {getSetPhotoPath} from '../../../../redux/reducers/slices/cameraSlice';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome6';

const VisionCamera = ({isVisible, onTakingPhoto, onClose}) => {

  const cameraPermission = Camera.requestCameraPermission();
  useEffect(() => {
    cameraPermission.then(res => {
      console.log(res);
    });
  }, []);

  const devices = Camera.getAvailableCameraDevices();
  // const device = devices.find(d => d.position === 'back');
  const [selectedDevice, setSelectedDevice] = useState(
    devices.find(d => d.position === 'back'),
  );

  const camera = useRef(null);

  const takingPhoto = async () => {
    if (camera.current == null) return;
    const photo = await camera.current.takePhoto();
    onTakingPhoto({isVisible: false, value: `file://${photo.path}`});
  };

  const switchCamera = () => {
    setSelectedDevice(prevDevice => {
      const newDevice =
        prevDevice.position === 'back'
          ? devices.find(d => d.position === 'front')
          : devices.find(d => d.position === 'back');
      return newDevice;
    });
  };

  if (selectedDevice == null) return <NoCameraDeviceError />;
  if (isVisible === false) return null;
  return (
    <Modal
      animationInTiming={0}
      animationOutTiming={0}
      isVisible={true}
      style={{margin: 0}}
      onBackButtonPress={()=>{onClose}}
      >
      <Camera
        style={StyleSheet.absoluteFill}
        device={selectedDevice}
        isActive={true}
        photo={true}
        ref={camera}
      />
      {/* chup anh */}
      <TouchableOpacity
        style={styles.btnTakingPhoto}
        onPress={() => takingPhoto()}>
        <View style={styles.circleView} />
      </TouchableOpacity>

      {/* xoay camera */}
      <TouchableOpacity
        style={styles.btnSwitchCamera}
        onPress={() => switchCamera()}>
        <Icon name="rotate" size={30} color={'white'} />
      </TouchableOpacity>

      {/* nut X thoat camera */}
      <TouchableOpacity
        style={styles.btnXCamera}
        onPress={() => onClose()}>
        <Icon name="xmark" size={30} color={'white'} />
      </TouchableOpacity>
    </Modal>
  );
};

export default VisionCamera;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  btnTakingPhoto: {
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - 45,
    bottom: 40,
    width: 90,
    height: 90,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  circleView: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: 'transparent',
    borderWidth: 4, // Adjust the border width as needed
    borderColor: 'white', // Adjust the border color as needed
  },
  btnSwitchCamera: {
    position: 'absolute',
    right: Dimensions.get('window').width / 4 - 60,
    bottom: 40,
    width: 90,
    height: 90,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  btnXCamera: {
    position: 'absolute',
    left: Dimensions.get('window').width / 4 - 60,
    bottom: 40,
    width: 90,
    height: 90,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  switchCameraView: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: 'transparent',
    borderWidth: 4, // Adjust the border width as needed
    borderColor: 'white', // Adjust the border color as needed
  },
});
