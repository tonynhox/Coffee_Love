import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { modal_color_don_hang } from '../../../../utils/contanst';

const ModalHuyDonHang = ({isVisible, toggleModal, onConfirm}) => {
 
  const confirmCancel = () => {
    onConfirm(isVisible.id);
  };

  return (
    <Modal
      isVisible={isVisible.isVisible}
      backdropOpacity={0.3}
      onBackdropPress={() => toggleModal()}
      backdropTransitionOutTiming={0}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <View
          style={{
            backgroundColor: modal_color_don_hang.background,
            padding: 25,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            // width: Dimensions.get('window').width - 20
          }}>
          {/* View icon va noi dung */}
          <Icon name="mug-hot" size={60} color="#E98001" />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <View>
              <Text style={styles.textHuyDonHang}>Hủy đơn hàng</Text>
              <Text style={styles.textXacNhan}>
                Bạn có muốn hủy đơn hàng này?
              </Text>
            </View>
            {/* 2 nut huy va dong y */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => toggleModal()}>
                <Text style={styles.textCancel}>Đóng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => confirmCancel()}>
                <Text style={styles.textCancel}>Đồng ý</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalHuyDonHang;

const styles = StyleSheet.create({
  textHuyDonHang: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    paddingBottom: 10,
  },
  textXacNhan: {
    fontSize: 15,
    color: 'black',
    paddingBottom: 20,
  },
  textCancel: {
    fontSize: 15,
    color: 'black',
  },
  buttonContainer: {
    paddingVertical: 5,
    backgroundColor: modal_color_don_hang.button,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
