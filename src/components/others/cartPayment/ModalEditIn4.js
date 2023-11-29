import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

const ModalEditIn4 = ({ isVisible, setIsVisible, in4, setIn4 }) => {
  const [data, setData] = useState({ ho_ten: '', so_dien_thoai: '' });

  const closeModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setData((dt) => ({
      ...dt,
      ho_ten: in4.ho_ten,
      so_dien_thoai: in4.so_dien_thoai,
    }));
  }, [in4]);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      style={styles.modalContainer}
      swipeDirection="down"
      onSwipeComplete={closeModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Thay đổi tin cá nhân</Text>
        <View style={styles.inputContainer}>
          <Text>Họ và tên</Text>
          <TextInput
            style={styles.input}
            placeholder="Họ và tên"
            value={data.ho_ten}
            onChangeText={(text) => setData({ ...data, ho_ten: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            value={data.so_dien_thoai}
            onChangeText={(text) => setData({ ...data, so_dien_thoai: text })}
          />
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={() => { setIn4(data); closeModal(); }}>
          <Text style={styles.saveButtonText}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 6,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#D97700',
  },
  saveButtonText: {
    color: '#D97700',
    fontWeight: 'bold',
  },
});

export default ModalEditIn4;
