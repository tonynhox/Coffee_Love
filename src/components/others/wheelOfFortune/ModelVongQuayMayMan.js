import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Modal from 'react-native-modal';
import {color_don_hang, modal_color_don_hang} from '../../../utils/contanst';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {CustomBackdrop} from './CustomBackdrop';
import {useDispatch, useSelector} from 'react-redux';
import {
  getNhanThuongThanhCong,
  getThemDiemChoUserRequest,
} from '../../../redux/reducers/slices/vongQuayMayManSlice';

const ModelVongQuayMayMan = ({isVisible, data, onChangeSoLanQuay}) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = React.useState(isVisible);
  const nhanThuong = useSelector(state => state.vong_quay_may_man.nhanThuong);
  const user = useSelector(state => state.users.user);
  const nhanThuongThanhCong = useSelector(
    state => state.vong_quay_may_man.nhanThuongThanhCong,
  );

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (nhanThuongThanhCong) {
      setModalVisible(false);
      dispatch(getNhanThuongThanhCong());
      onChangeSoLanQuay();
    }
  }, [nhanThuongThanhCong]);

  const nhanQua = () => {
    dispatch(
      getThemDiemChoUserRequest({
        id_user: user.id_user,
        id_vong_quay: data._id,
      }),
    );
  };

  return (
    <Modal
      isVisible={isModalVisible}
      hasBackdrop={true}
      customBackdrop={<CustomBackdrop />}
      animationIn="tada"
      animationOut={'zoomOut'}
      backdropOpacity={0.3}
      backdropTransitionOutTiming={0}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <Text style={styles.textChucMung}>Chúc mừng</Text>
          <View style={styles.hinhAnhVaNoiDungContainer}>
            <Image
              source={{
                uri: data.hinh_anh,
              }}
              style={{
                marginTop: 10,
                width: 70,
                height: 70,
                alignSelf: 'center',
                resizeMode: 'contain',
                width: 70,
                borderRadius: 10,
              }}
            />
            <View style={styles.noiDungContainer}>
              {/* Title  */}

              {/* Ten vong quay */}
              <Text style={styles.textTen}>{data.ten_vong_quay}</Text>

              {/* Noi dung */}
              <Text style={styles.textNoiDung}>{data.mo_ta}</Text>
            </View>
          </View>
          {/* THoi han */}
          <Text style={styles.textThoiHan}>
            Từ ngày: {moment(data.ngay_bat_dau).format('HH:mm DD/MM/YYYY')}
          </Text>
          <Text style={styles.textThoiHan}>
            Đến ngày: {moment(data.ngay_ket_thuc).format('HH:mm DD/MM/YYYY')}
          </Text>

          {/* Button */}
          <TouchableOpacity style={styles.btnNhan} onPress={() => nhanQua()}>
            <Text style={styles.textNhan}>Nhận</Text>
          </TouchableOpacity>

          <View style={styles.floatingGift}>
            <Icon name="gift" size={40} color={modal_color_don_hang.button} />
          </View>
          <View style={styles.floatingGiftLeft}>
            <Icon
              name="cake-candles"
              size={40}
              color={modal_color_don_hang.button}
            />
          </View>
        </View>
        <>
          {nhanThuong && (
            <View style={styles.nhanQuaContainer}>
              <ActivityIndicator size="large" color="#F68C1F" />
            </View>
          )}
        </>
      </View>
    </Modal>
  );
};

export default ModelVongQuayMayMan;

const styles = StyleSheet.create({
  container: {
    backgroundColor: modal_color_don_hang.background,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width - 20,
    flexDirection: 'column',
  },
  noiDungContainer: {
    width: Dimensions.get('window').width - 70 - 20 - 20,
    paddingHorizontal: 10,
  },
  hinhAnhVaNoiDungContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  textChucMung: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
  textNoiDung: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
    paddingTop: 10,
  },
  textTen: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
    paddingTop: 10,
  },
  textThoiHan: {
    fontSize: 13,
    fontWeight: '400',
    color: 'black',
    paddingTop: 10,
  },
  btnNhan: {
    backgroundColor: modal_color_don_hang.button,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  textNhan: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  floatingGift: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    transform: [{rotate: '-30deg'}],
  },
  floatingGiftLeft: {
    position: 'absolute',
    left: 10,
    top: 5,
    // transform: [{rotate: '150deg'}],
  },
  nhanQuaContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    paddingTop: Dimensions.get('window').width / 3,
  },
});
