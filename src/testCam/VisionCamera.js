import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {Camera} from 'react-native-vision-camera';
import uuid from 'react-native-uuid';
import {Storage} from 'aws-amplify';
import {BUCKET_NAME, MY_BUCKET_URL} from '../utils/contanst';
import {S3} from 'aws-sdk';
import {ACCESS_KEY_ID, SECRET_ACCESS_KEY} from '../PrivateKey';

const VisionCamera = () => {
  const cameraPermission = Camera.requestCameraPermission();
  useEffect(() => {
    cameraPermission.then(res => {
      console.log(res);
    });
  }, []);

  const credentials = new AWS.Credentials({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    Bucket: BUCKET_NAME,
  });

  const s3 = new S3({
    signatureVersion: 'v4',
    region: 'ap-southeast-1',
    credentials,
  });

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
        level: 'public',
        bucket: BUCKET_NAME,
      });
      console.log('Image uploaded successfully', result.key);

      const params = {
        Bucket: BUCKET_NAME,
        Key: `${result.key}.jpeg`,
        Expires: 60 * 60 * 24 * 7,
      };

      const url = await s3.getSignedUrl('getObject', params);
      console.log('URL: ', url);

      // parseUrl(`https://${bucket}.s3.${region}.amazonaws.com/${Key}`)
      const s3Link = `https://${BUCKET_NAME}.s3.ap-southeast-1.amazonaws.com/${result.key}`;
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
