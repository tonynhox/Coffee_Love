import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useRef, useMemo, useEffect, useCallback} from 'react';
import BottomSheet, {BottomSheetSectionList} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './styles/bottomMuaSanPhamStyle';

const BottomMuaSanPham = ({isOpen, onChangeOpen}) => {
  console.log('isOpen', isOpen);
  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current.expand();
    }
  }, [isOpen]);

  const onChange = index => {
    if (index === -1) {
      onChangeOpen();
    }
  };

  const data = [
    {
      id: 0,
      title: 'Size',
      data: [
        {id: 1, name: 'Nhỏ', price: 0, isSelected: false},
        {id: 2, name: 'Vừa', price: 10000, isSelected: true},
        {id: 3, name: 'Lớn', price: 20000, isSelected: false},
      ],
    },
    {
      id: 1,
      title: 'Topping',
      data: [
        {id: 1, name: 'Tran chau', price: 10000, isSelected: false},
        {id: 2, name: 'Thach rau cau', price: 15000, isSelected: false},
        {id: 3, name: 'Thach pho mai', price: 20000, isSelected: false},
        {id: 4, name: 'Thach trai cay', price: 25000, isSelected: false},
      ],
    },
    {
      id: 2,
      title: 'Đường',
      data: [
        {id: 1, name: 'Không đường', isSelected: false},
        {id: 1, name: 'Ít', isSelected: false},
        {id: 2, name: 'Vừa', isSelected: true},
        {id: 3, name: 'Nhiều', isSelected: false},
      ],
    },
    {
      id: 3,
      title: 'Đá',
      data: [
        {id: 1, name: 'Không đá', isSelected: false},
        {id: 1, name: 'Ít', isSelected: false},
        {id: 2, name: 'Vừa', isSelected: true},
        {id: 3, name: 'Nhiều', isSelected: false},
      ],
    },
  ];
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['75%'], []);

  const renderSectionHeader = ({section}) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.textDa}>{section.title}</Text>
        <Text style={styles.required}>{section.id == 0 ? '*' : ''}</Text>
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
        onChange={onChange}
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={-1}
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

          <View style={{width: '100%', height: 370}}>
            <BottomSheetSectionList
              stickySectionHeadersEnabled
              sections={data}
              keyExtractor={item => item.id}
              renderSectionHeader={renderSectionHeader}
              renderItem={RenderTopping}
              contentContainerStyle={styles.contentContainer}
            />
          </View>

       

          {/* Chu thich */}
          <View style={styles.daHeaderContainer}>
            <Text style={styles.textYeuCauThem}>Yêu cầu thêm</Text>
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
