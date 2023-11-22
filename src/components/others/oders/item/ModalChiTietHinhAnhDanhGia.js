import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {modal_color_don_hang} from '../../../../utils/contanst';

const ModalChiTietHinhAnhDanhGia = ({
  data,
  selectedIndex,
  onClose,
  onXoaAnh,
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    setCurrentIndex(selectedIndex);
  }, [selectedIndex]);

  if (currentIndex === -1) return null;

  const previousImage = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const nextImage = () => {
    if (currentIndex === data.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const handleXoaAnh = () => {
    onXoaAnh(currentIndex);
  };

  return (
    <Modal
      onBackdropPress={() => {
        onClose();
      }}
      isVisible={true}
      style={{margin: 0}}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      animationInTiming={0}
      animationOutTiming={0}>
      <View style={styles.container}>
        <>
          {data[currentIndex] && (
            <>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: data[currentIndex]?.uri,
                  }}
                  style={{
                    width: '80%',
                    height: '80%',
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                />
              </View>
            </>
          )}
        </>
      </View>

      {/* < > */}

      {currentIndex == 0 || (
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={() => previousImage()}>
          <Icon name="chevron-left" size={35} />
        </TouchableOpacity>
      )}

      {currentIndex === data.length - 1 || (
        <TouchableOpacity style={styles.rightIcon} onPress={() => nextImage()}>
          <Icon name="chevron-right" size={35} />
        </TouchableOpacity>
      )}

      {/* ??/?? */}
      <View style={styles.floatingIndexHinhAnh}>
        <Text style={styles.textIndex}>
          {currentIndex + 1} / {data.length}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.xoaAnhContainer}
        activeOpacity={0.9}
        onPress={() => handleXoaAnh()}>
        <Text style={styles.textXoaAnh}>Xóa ảnh</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalChiTietHinhAnhDanhGia;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'rbga(0,0,0,0.5)',
  },
  leftIcon: {
    position: 'absolute',
    left: 5,
    top: Dimensions.get('window').height / 2,
  },
  rightIcon: {
    position: 'absolute',
    right: 5,
    top: Dimensions.get('window').height / 2,
  },
  traiPhaiContainer: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2,
    justifyContent: 'center',
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: 'pink',
    // paddingHorizontal: 10,
    // backgroundColor: 'rgba(0,0,0,0.3)',
  },
  xoaAnhContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    backgroundColor: modal_color_don_hang.background,
  },
  textXoaAnh: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
  floatingIndexHinhAnh: {
    position: 'absolute',
    bottom: Dimensions.get('window').height / 7,
    // right: Dimensions.get('window').width / 2 - 10,
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIndex: {
    fontSize: 16,
    color: 'white',
  },
});
