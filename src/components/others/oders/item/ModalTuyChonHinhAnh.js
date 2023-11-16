import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Camera} from 'react-native-vision-camera';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {pick_image_options} from '../../../../utils/contanst';

const ModalTuyChonHinhAnh = ({isVisible, onClose, onPickImage}) => {
  const handleImageFromLibrary = () => {
    onPickImage(pick_image_options.thu_vien);

    // const options = {
    //   title: 'Select Image',
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    //   },
    // };

    // ImagePicker.showImagePicker(options, response => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else {
    //     // Set the selected image URI
    //     setSelectedImage(response.uri);
    //   }
    // });
  };

  const handleTakePicture = async () => {
    onPickImage(pick_image_options.camera);
  };

  const closeModal = () => {
    // You might want to do something with the selectedImage URI here
    onClose();
  };

  return (
    <Modal
      animationInTiming={0}
      animationOutTiming={0}
      animationType="slide"
      transparent={true}
      visible={isVisible}
      style={{justifyContent: 'flex-end', margin: 0}}
      onBackdropPress={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.headerText}>Chọn ảnh</Text>

          {/* Tuy con container */}
          <View style={styles.tuyChonContainer}>
            {/* Thư viện ảnh container */}
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={handleImageFromLibrary}>
              <Icon
                name="photo-film"
                size={28}
                color="#E98001"
                style={styles.optionImage}
              />
              <Text style={styles.optionText}>Thư viện</Text>
            </TouchableOpacity>

            {/* Camera container */}
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={handleTakePicture}>
              <Icon
                name="camera"
                size={28}
                color="#E98001"
                style={styles.optionImage}
              />

              <Text style={styles.optionText}>Camera</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.textHuy}>Hủy</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  optionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionImage: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  cancelButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  textHuy: {
    fontSize: 18,

    textAlign: 'center',
    color: 'black',
  },
  tuyChonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ModalTuyChonHinhAnh;
