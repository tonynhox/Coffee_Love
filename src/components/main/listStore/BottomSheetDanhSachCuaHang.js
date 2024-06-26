import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {setCameraChoose} from '../../../redux/reducers/slices/utilSlice';
import Icon from 'react-native-vector-icons/FontAwesome6';

const BottomSheetDanhSachCuaHang = ({isVisible, onClose}) => {
  const data = useSelector(state => state.locationMap.toaDoCuaHang);
  const dispath = useDispatch();
  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  const chonChiNhanh = async item => {
    console.log('item', item);
    await dispath(
      setCameraChoose({
        center: {
          latitude: parseFloat(item.location.x),
          longitude: parseFloat(item.location.y),
        },
        zoom: 15,
        tilt: 0,
        bearing: 0,
      }),
    );
    onClose();
  };

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '40%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    if (index === -1) {
      onClose();
    }
  }, []);

  const renderChiNhanh = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => chonChiNhanh(item)}>
        {/* hinh anh chi nhanh + thong tin chi nhanh */}
        <Icon name="house" size={30} color="#F77F08" style={{marginLeft: 10}} />
        {/* blank */}
        <View style={styles.blank} />
        {/* Tên chi nhánh, địa chỉ, vị trí */}
        <View style={styles.tenChiNhanhDiaChiViTriContainer}>
          <Text style={styles.textChiNhanh}>{item.ten_chi_nhanh}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.textDiaChi}>
            {item.dia_chi}
          </Text>
          {/* <Text style={styles.textLocation}>Cách bạn 10km</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  // renders
  return data.length == 0 ? null : (
    <BottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{backgroundColor: '#E6E6E6'}}
      // backdropComponent={}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.textHeader}>Chi nhánh của Coffee.Love</Text>
      </View>
      <BottomSheetFlatList
        data={data}
        renderItem={renderChiNhanh}
        keyExtractor={item => item._id.toString()}
        contentContainerStyle={styles.flatlistContainer}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    backgroundColor: '#E6E6E6',
    // flex: 1,
    // alignItems: 'center',
  },
  itemContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 4,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  flatlistContainer: {
    backgroundColor: '#E6E6E6',
  },
  blank: {
    width: 20,
    height: 10,
  },
  textHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    color: 'black',
  },
  textChiNhanh: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  textDiaChi: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  textLocation: {
    fontSize: 14,
    fontWeight: '400',
  },
  tenChiNhanhDiaChiViTriContainer: {
    height: 70,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
});

export default BottomSheetDanhSachCuaHang;
