import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {Camera} from 'react-native-vision-camera';
import uuid from 'react-native-uuid';
import {Storage} from 'aws-amplify';
import {MY_BUCKET_URL} from '../utils/contanst';

const VisionCamera = () => {
  const cameraPermission = Camera.requestCameraPermission();
  useEffect(() => {
    cameraPermission.then(res => {
      console.log(res);
    });
  }, []);

  const devices = Camera.getAvailableCameraDevices();
  const device = devices.find(d => d.position === 'back');

  const camera = useRef(null);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);
  const [photo, setPhoto] = useState(null);

  const takingPhoto = async () => {
    if (camera.current == null) return;
    const photo = await camera.current.takePhoto();
    console.log('photo', `file://${photo.path}`);
    setPhoto(`file://${photo.path}`);
    setIsTakingPhoto(false);
  };

  const pathToImageFile = async () => {
    try {
      const response = await fetch(photo);
      const blob = await response.blob();
      const result = await Storage.put(uuid.v4(), blob, {
        contentType: 'image/jpeg',
      });
      console.log('Image uploaded successfully', result.key);
    //   https://s3.amazonaws.com/[BUCKET-NAME]/[FILE-NAME].[FILE-TYPE]
      const s3Link = `https://s3.amazonaws.com/${MY_BUCKET_URL}/${result.key}.jpeg`;
      console.log('JSON: ', s3Link);
    } catch (error) {
      console.log('ERROR UPLOADING FILE: ', error);
    }
  };

  if (device == null) return <NoCameraDeviceError />;
  return (
    <>
      {isTakingPhoto ? (
        <>
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
        </>
      ) : (
        <>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => setIsTakingPhoto(true)}>
              <Text>Taking Photo</Text>
            </TouchableOpacity>
            <Image source={{uri: photo}} style={styles.image} />
            <TouchableOpacity onPress={() => pathToImageFile()}>
              <Text>Upload Photo</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
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
