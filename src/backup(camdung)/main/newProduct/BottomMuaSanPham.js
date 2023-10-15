import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useRef, useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../product/contanst';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const BottomMuaSanPham = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['8%', '95%'], []);

  const dataTopping = [
    {id: 1, name: 'Tran chau', price: 10000, isSelected: false},
    {id: 2, name: 'Tran chau', price: 10000, isSelected: false},
    {id: 3, name: 'Tran chau', price: 10000, isSelected: false},
    {id: 4, name: 'Tran chau', price: 10000, isSelected: false},
    {id: 5, name: 'Tran chau', price: 10000, isSelected: false},
    {id: 6, name: 'Tran chau', price: 10000, isSelected: false},
  ];

  const dataDa = [
    {id: 1, name: 'Ít', isSelected: false},
    {id: 2, name: 'Vừa', isSelected: true},
    {id: 3, name: 'Nhiều', isSelected: false},
  ];

  const dataDuong = [
    {id: 1, name: 'Ít', isSelected: false},
    {id: 2, name: 'Vừa', isSelected: true},
    {id: 3, name: 'Nhiều', isSelected: false},
  ];

  const RenderDa = ({item}) => {
    return (
      <View
        style={
          item.isSelected ? styles.daCheckedContainer : styles.daContainer
        }>
        <Text style={item.isSelected ? styles.textDaChecked : styles.textDa}>
          {item.name}
        </Text>
      </View>
    );
  };

  const RenderDuong = ({item}) => {
    return (
      <View
        style={
          item.isSelected ? styles.daCheckedContainer : styles.daContainer
        }>
        <Text style={item.isSelected ? styles.textDaChecked : styles.textDa}>
          {item.name}
        </Text>
      </View>
    );
  };

  const RenderTopping = ({item}) => {
    return (
      <View style={styles.toppingContainer}>
        <Text style={styles.textTopping}>{item.name}</Text>
        <View style={styles.tienToppingContainer}>
          <Text style={styles.textTien}>+{item.price}₫</Text>
          <Icon
            style={styles.toppingChecked}
            name="circle-dot"
            size={20}
            color={BACKGROUND_BUTTON_COLOR}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: '#FEF9F1'}}>
        <View style={styles.container}>
          {/* header ten san pham*/}
          <View style={styles.tenSanPhamVaGiaTienContainer}>
            <Text style={styles.textTenSanPham}>Americano</Text>
            <View style={styles.giaTienContainer}>
              <Text style={styles.textGiaTien}>100.000₫</Text>
              <Text style={styles.textGiaTienGiamGia}>100.000₫</Text>
            </View>
          </View>

          {/* separate line */}
          <View style={styles.separateLine} />

          {/* topping */}
          <View style={styles.toppingHeaderContainer}>
            <Text style={styles.textHeaderTopping}>Topping (tùy chọn)</Text>
            <View style={styles.danhSachTopping}>
              {dataTopping.map(item => {
                return <RenderTopping item={item} />;
              })}
            </View>
          </View>

          {/* Da */}
          <View style={styles.daHeaderContainer}>
            <Text style={styles.textHeaderDa}>Đá</Text>
            <View style={styles.danhSachDa}>
              {dataDa.map(item => {
                return <RenderDa item={item} />;
              })}
            </View>
          </View>

          {/* Duong */}
          <View style={styles.daHeaderContainer}>
            <Text style={styles.textHeaderDa}>Đường</Text>
            <View style={styles.danhSachDa}>
              {dataDa.map(item => {
                return <RenderDa item={item} />;
              })}
            </View>
          </View>

          {/* separate line */}
          <View style={styles.separateLine} />

          {/* Chu thich */}
          <View style={styles.daHeaderContainer}>
            <Text style={styles.textHeaderDa}>Chú thích</Text>
            {/* view chu thich */}
            <View style={styles.chuThichContainer}>
              <TextInput
                numberOfLines={2}
                placeholder="Chú thích (ví dụ: cafe không cafe)"
              />
            </View>
          </View>
        </View>

        {/* Mua ngay */}
        <View style={styles.muaNgayContainer}>
          {/* so luong va 2 nut tuy chinh */}
          <View style={styles.giaTienVaSoLuongContainer}>
            {/* so luong */}
            <View style={styles.soLuongVaNutTuyChinhContainer}>
              <Text style={styles.textSoLuong}>Số lượng</Text>
              <View style={styles.soLuongContainer}>
                <Icon name="minus" size={15} color={BACKGROUND_BUTTON_COLOR} />
                <Text style={styles.textSoLuong}>1</Text>
                <Icon name="plus" size={15} color={BACKGROUND_BUTTON_COLOR} />
              </View>
            </View>
          </View>

          <View style={styles.muaNgayButtonContainer}>
            <Text style={styles.textMuaNgay}>Mua ngay (150k)</Text>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomMuaSanPham;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tenSanPhamVaGiaTienContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  giaTienContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  separateLine: {
    height: 1,
    width: '95%',
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  textTenSanPham: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginLeft: 10,
  },
  textGiaTien: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  textGiaTienGiamGia: {
    fontSize: 18,
    color: 'red',
    fontWeight: '500',
    marginHorizontal: 10,
  },
  toppingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    borderBottomWidth: 0.3,

    marginLeft: 10,
    paddingVertical: 12,
  },
  textTopping: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  giaTienContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textHeaderTopping: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginHorizontal: 10,
    marginBottom: 1,
    marginTop: 5,
  },
  textHeaderDa: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginHorizontal: 10,
    marginBottom: 1,
    marginTop: 10,
  },
  textTien: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  tienToppingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  toppingChecked: {
    marginHorizontal: 10,
  },
  daContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#FDE7C9',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: BACKGROUND_BUTTON_COLOR,
    width: 70,
  },
  daCheckedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: BACKGROUND_BUTTON_COLOR,
    width: 70,
  },

  textDa: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  textDaChecked: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  danhSachTopping: {
    width: '100%',
  },
  toppingHeaderContainer: {
    width: '100%',
    height: 'auto',
  },
  daHeaderContainer: {
    width: '100%',
  },
  danhSachDa: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 20,
    marginTop: 10,
  },
  chuThichContainer: {
    width: '95%',
    height: 80,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: BACKGROUND_BUTTON_COLOR,
    marginHorizontal: 10,
    paddingHorizontal: 2,
  },
  buyNowContainer: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 1,
    backgroundColor: '#FDEEDD',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
  },
  giaTienVaSoLuongContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  soLuongContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 2,
    borderRadius: 12,
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 2,
    backgroundColor: '#FFECD2',
  },
  textSoLuong: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  soLuongVaNutTuyChinhContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textMuaNgay: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  muaNgayButtonContainer: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 1,
    backgroundColor: BACKGROUND_BUTTON_COLOR,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  muaNgayContainer: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
