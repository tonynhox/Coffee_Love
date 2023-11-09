import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import NoCameraDeviceError from './NoCameraDeviceError';

const CameraComponent = () => {
  const cameraPermission = Camera.requestCameraPermission();
  useEffect(() => {
    cameraPermission.then(res => {
      console.log(res);
    });
  }, []);

  const devices = Camera.getAvailableCameraDevices();
  const device = devices.find(d => d.position === 'back');

  if (device == null) return <NoCameraDeviceError />;

  const cameraRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setCapturedImage(data.uri);
    }
  };

  useEffect(async () => {
    if (cameraRef.current == null) return;
    const photo = await cameraRef.current.takePhoto();
    console.log('photo', photo);
  }, [cameraRef]);

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        // type={Camera.Constants.Type.back}
        // flashMode={Camera.Constants.FlashMode.off}
      />

      {capturedImage && (
        <View style={styles.previewContainer}>
          <Image source={{uri: capturedImage}} style={styles.previewImage} />
        </View>
      )}

      <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
        <View style={styles.captureInnerButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: 'white',
  },
  captureInnerButton: {
    flex: 1,
    borderRadius: 35,
    backgroundColor: 'white',
    margin: 5,
  },
  previewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});

export default CameraComponent;
