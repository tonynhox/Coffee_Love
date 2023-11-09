import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Storage} from 'aws-amplify';
const PickImage = () => {
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
      <Button title="Select Image" onPress={() => handleImageSelect()} />
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

export default PickImage;

const styles = StyleSheet.create({});
