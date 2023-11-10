import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {Camera} from 'react-native-vision-camera';
import uuid from 'react-native-uuid';
import NoCameraDeviceError from './NoCameraDeviceError';
import {useDispatch} from 'react-redux';
import {getSetPhotoPath} from '../../../../redux/reducers/slices/cameraSlice';
import Modal from 'react-native-modal';

const VisionCamera = ({isVisible, onTakingPhoto}) => {
  const dispatch = useDispatch();

  const cameraPermission = Camera.requestCameraPermission();
  useEffect(() => {
    cameraPermission.then(res => {
      console.log(res);
    });
  }, []);

  const devices = Camera.getAvailableCameraDevices();
  const device = devices.find(d => d.position === 'back');

  const camera = useRef(null);

  const takingPhoto = async () => {
    if (camera.current == null) return;
    const photo = await camera.current.takePhoto();
    onTakingPhoto({isVisible: false, value: `file://${photo.path}`});
  };

  if (device == null) return <NoCameraDeviceError />;
  if (isVisible === false) return null;
  return (
    <Modal
      animationInTiming={0}
      animationOutTiming={0}
      isVisible={true}
      style={{margin: 0}}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
        ref={camera}
      />
      <TouchableOpacity
        style={styles.btnTakingPhoto}
        onPress={() => takingPhoto()}>
        <Text>Take Photo</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default VisionCamera;

const styles = StyleSheet.create({
  btnTakingPhoto: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
