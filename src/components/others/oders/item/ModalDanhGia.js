import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {
  modal_color_don_hang,
  pick_image_options,
} from '../../../../utils/contanst';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ModalTuyChonHinhAnh from './ModalTuyChonHinhAnh';
import {launchImageLibrary} from 'react-native-image-picker';
import VisionCamera from './VisionCamera';
import {useDispatch} from 'react-redux';
import {getChangeCameraVisible} from '../../../../redux/reducers/slices/cameraSlice';
import uuid from 'react-native-uuid';
import ModalChiTietHinhAnhDanhGia from './ModalChiTietHinhAnhDanhGia';
import ImagePicker from 'react-native-image-crop-picker';

const ModalDanhGia = ({isVisible, onCancel, sendRate}) => {
  const dispatch = useDispatch();

  const dataRateStar = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  const [start, setStart] = useState(4);
  const [nhanXet, setNhanXet] = useState('');

  // Image picker
  const [selectedImage, setSelectedImage] = useState(null);
  const [valueChoosingModal, setValueChoosingModal] = useState({
    isVisible: false,
    value: '',
  });
  const [currentOptions, setCurrentOptions] = useState(null);
  const [cameraValue, setCameraValue] = useState({
    isVisible: false,
    value: [],
  });

  useEffect(() => {
    if (currentOptions === null) {
      return;
    }
    if (currentOptions === pick_image_options.camera) {
      handleTakePicture();
    } else if (currentOptions === pick_image_options.thu_vien) {
      handleImageFromLibrary();
    }
  }, [currentOptions]);

  const openChoosingModal = () => {
    setValueChoosingModal({isVisible: true, value: ''});
  };

  // chon anh tu thu vien
  const handleImageFromLibrary = () => {
    setValueChoosingModal({isVisible: false, value: ''});
    setCurrentOptions(null);
    ImagePicker.openPicker({
      multiple: true,
    })
      .then(images => {
        console.log(images);
        const newArray = images.map(item => ({
          id: uuid.v4(), // Assuming you have the uuid library
          uri: item.path,
        }));
        setCameraValue(prevCameraValue => ({
          isVisible: false,
          value: [...prevCameraValue.value, ...newArray],
        }));
      })
      .catch(error => {
        console.log('ERROR SELECTING IMAGE: ', error);
      });
  };

  // mo camera len
  const handleTakePicture = () => {
    setCameraValue(prevCameraValue => ({
      isVisible: true,
      value: [...prevCameraValue.value],
    }));
  };

  // da chup anh
  const handleTakingPhoto = ({isVisible, value}) => {
    setCameraValue(prevCameraValue => ({
      isVisible: false,
      value: [...prevCameraValue.value, {id: uuid.v4(), uri: value}],
    }));
    setValueChoosingModal({isVisible: false, value: ''});
    setCurrentOptions(null);
  };

  const onConfirm = () => {
    sendRate({
      id_don_hang: isVisible.id,
      so_sao: start,
      danh_gia: nhanXet,
      hinh_anh_danh_gia: [],
      email: '',
      ten_user: '',
    });
    clearAll();
  };
  const toggleModal = () => {
    onCancel();
    clearAll();
  };

  const clearAll = () => {
    setStart(4);
    setNhanXet('');
  };

  const rateStar = ({item}) => {
    const selected = start >= item.id ? true : false;
    return (
      <TouchableOpacity
        style={styles.startContainer}
        onPress={() => setStart(item.id)}>
        <Icon solid={selected} name="star" size={28} color="#E98001" />
      </TouchableOpacity>
    );
  };

  const [currentId, setCurrentId] = useState(-1);

  const handleXoaAnh = index => {
    const newData = cameraValue.value.filter((item, i) => i !== index);
    setCameraValue({isVisible: false, value: newData});
    if (index == 0) {
      setCurrentId(-1);
    } else if (index == cameraValue.value.length - 1) {
      setCurrentId(index - 1);
    }
  };

  const RenderHinhAnhDanhGia = ({item, index}) => {
    isFourthItem = index === 3 ? true : false;
    isHidden = index > 3 ? true : false;
    return (
      <>
        {/* Cách hình ảnh thứ 4 trở đi thì sẽ bị ẩn */}
        {isHidden || (
          <>
            <TouchableOpacity
              onPress={() => setCurrentId(index)}
              activeOpacity={0.9}
              style={{padding: 1}}>
              <Image
                source={{
                  uri: item.uri,
                }}
                style={{
                  width: 90,
                  height: 120,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
              {/* Dấu + cho các hình ảnh còn lại */}
              {isFourthItem && (
                <View style={styles.floatingSeeMoreContainer}>
                  <Icon
                    name="eye"
                    size={25}
                    color="white"
                    style={styles.floatingPlusIcon}
                  />
                  <Text style={styles.textXemThem}>Xem thêm</Text>
                </View>
              )}
            </TouchableOpacity>
          </>
        )}
      </>
    );
  };

  const onCloseCamera = () => {
    setCurrentOptions(null);
    setValueChoosingModal({isVisible: false, value: ''});

    setCameraValue(prevCameraValue => ({
      isVisible: false,
      value: [...prevCameraValue.value],
    }));
  };
  return (
    <>
      <Modal
        // isVisible={isVisible.isVisible}
        isVisible={true}
        onBackdropPress={() => toggleModal()}
        animationIn="zoomIn"
        animationOut={'zoomOut'}
        backdropOpacity={0.3}
        backdropTransitionOutTiming={0}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.container}>
            {/* danhs gia san pham & loi cam on */}
            <Text style={styles.textDanhGia}>Đánh giá sản phẩm</Text>

            {/* View rate sao */}
            <View style={styles.listStarContainer}>
              <FlatList
                horizontal={true}
                data={dataRateStar}
                renderItem={rateStar}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            {/* View input text  nhan xet*/}
            <View>
              <Text style={styles.textNhanXet}>Nhận xét của bạn</Text>
              <TextInput
                multiline
                textAlignVertical="top"
                placeholder="Nhận xét của bạn"
                style={styles.inputNhanXet}
                onChangeText={text => setNhanXet(text)}
                value={nhanXet}
              />
            </View>

            {/* View hinh anh */}
            <View style={styles.danhSachHinhAnhContainer}>
              {cameraValue.value.length == 0 ||
                cameraValue.value.map((item, index) => {
                  return (
                    <RenderHinhAnhDanhGia
                      key={item.id}
                      item={item}
                      index={index}
                    />
                  );
                })}
            </View>

            <TouchableOpacity
              style={styles.themHinhAnhContainer}
              onPress={() => openChoosingModal()}>
              <Icon name="camera" size={25} color="#E98001" />
              <Text style={styles.textThemHinhAnh}>Thêm hình ảnh</Text>
            </TouchableOpacity>

            {/* View button huy va gui */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => toggleModal()}>
                <Text style={styles.textCancel}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => onConfirm()}>
                <Text style={styles.textCancel}>Gửi</Text>
              </TouchableOpacity>
            </View>

            {/* Loi cam on */}
            <Text style={styles.textVui}>
              Coffee.Love rất vui khi nhận được đánh giá của bạn
            </Text>
          </View>
        </View>
      </Modal>
      <ModalTuyChonHinhAnh
        isVisible={valueChoosingModal.isVisible}
        onClose={() => setValueChoosingModal({isVisible: false, value: ''})}
        onPickImage={value => setCurrentOptions(value)}
      />
      <VisionCamera
        isVisible={cameraValue.isVisible}
        onTakingPhoto={handleTakingPhoto}
        onClose={onCloseCamera}
      />
      <ModalChiTietHinhAnhDanhGia
        data={cameraValue.value}
        selectedIndex={currentId}
        onClose={() => setCurrentId(-1)}
        onXoaAnh={handleXoaAnh}
      />
    </>
  );
};

export default ModalDanhGia;

const styles = StyleSheet.create({
  container: {
    backgroundColor: modal_color_don_hang.background,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width - 20,
  },
  listStarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  textDanhGia: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
  textVui: {
    fontSize: 13,
    fontWeight: '300',
    color: 'black',
    fontStyle: 'italic',
    alignSelf: 'center',
    paddingTop: 10,
  },
  startContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNhanXet: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    paddingBottom: 10,
  },
  inputNhanXet: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 7,
    marginHorizontal: 3,
    paddingVertical: 7,
    height: 100,
  },
  textThemHinhAnh: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    paddingLeft: 5,
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
  themHinhAnhContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  floatingPlusIcon: {},
  danhSachHinhAnhContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  floatingSeeMoreContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textXemThem: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 5,
  },
});
