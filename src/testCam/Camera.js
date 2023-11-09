import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  Button,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Storage} from 'aws-amplify';

const Camera = () => {
  //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.Camera);

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission given');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestCameraPermission();
  }, []);

  const [path, setPath] = useState('');

  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 200,
    maxWidth: 200,
    saveToPhotos: true,
  };

  const camera = async () => {
    await launchCamera(options, response => {
      setSelectedImage(response.assets[0].uri);
      console.log('RES: ', response.assets[0].uri);
    });
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageKey, setImageKey] = useState('');

  const handleImageSelect = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      setSelectedImage(result.uri);
    } catch (err) {
      console.log(err);
    }
  };

  const pathToImageFile = async () => {
    try {
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      await Storage.put(imageKey, blob, {
        contentType: 'image/jpeg',
      });
      console.log('Image uploaded successfully');
    } catch (error) {
      console.log('ERROR UPLOADING FILE: ', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text>Image Upload</Text>
      <Button title="Select Image" onPress={() => camera()} />
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{width: 200, height: 200}}
        />
      )}
      <TextInput
        placeholder="Image Key (e.g., folder/image.jpg)"
        value={imageKey}
        onChangeText={text => setImageKey(text)}
      />
      <Button title="Upload Image" onPress={() => pathToImageFile()} />
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({});
