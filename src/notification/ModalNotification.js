import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {modal_color_don_hang} from '../utils/contanst';

const ModalNotification = ({value, onCancel}) => {
  const cancelModal = () => {
    onCancel();
  };
  return (
    <Modal
      isVisible={true}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationOutTiming={0}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.modalContainer}>
        {/* ten va loi chao */}
        <Text style={styles.textTitle}>
          {value?.data?.notification_message}
        </Text>
        {/* hinh anh va noi dung */}
        <View style={styles.noiDungContainer}>
          <Image
            style={styles.img}
            source={{
              uri: value?.notification?.android?.imageUrl,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textTen}>{value?.notification?.title}ơi, </Text>
            <Text style={styles.textNoiDung}>{value?.data?.body}</Text>
          </View>
        </View>

        {/* da hieu button */}
        <TouchableOpacity
          onPress={() => cancelModal()}
          style={styles.daHieuButton}>
          <Text style={styles.textDaHieu}>Đã hiểu</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalNotification;

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 280,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  textTen: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'black',
    paddingVertical: 10,
  },
  textNoiDung: {
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'italic',
    color: 'black',
    paddingVertical: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    paddingBottom: 10,
  },
  noiDungContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width - 20,
  },
  modalContainer: {
    backgroundColor: modal_color_don_hang.background,
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
  },
  daHieuButton: {
    backgroundColor: modal_color_don_hang.button,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDaHieu: {
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
  },
});
