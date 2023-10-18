import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useMemo, useEffect, useCallback, useState} from 'react';
import BottomSheet, {BottomSheetSectionList} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './styles/bottomMuaSanPhamStyle';
import {formatCurrency} from '../../../utils/formatCurrency';

const BottomMuaSanPham = ({isOpen, onChangeOpen, data}) => {
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


  const [size, setSize] = useState();
  const [topping, setTopping] = useState();
  const [sugar, setSugar] = useState();
  const [ice, setIce] = useState();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const handleTangSoLuong = () => {
    setQuantity(quantity + 1);
  };

  const handleGiamSoLuong = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleItemSelection = (id, data) => {
    if (id === 1) {
      // For data with id 1, allow all items to be selected
      // data.forEach((item) => (item.isSelected = true));
    } else {
      // For data with id 0, 2, and 3, only one item can be selected
      let selectedCount = 0;
      data.forEach((item) => {
        if (item.isSelected) {
          selectedCount++;
          if (selectedCount > 1) {
            item.isSelected = false; // Deselect the item if more than one is selected
          }
        }
      });
    }
  };

  const dataOptions = [
    {
      id: 0,
      title: 'Size',
      data: [
        {id: 1123, name: 'Nhỏ', price: 0, isSelected: false},
        {id: 21214, name: 'Vừa', price: 10000, isSelected: true},
        {id: 31231, name: 'Lớn', price: 20000, isSelected: false},
      ],
    },
    {
      id: 1,
      title: 'Topping',
      data: [
        {id: 11243, name: 'Tran chau', price: 10000, isSelected: false},
        {id: 2341, name: 'Thach rau cau', price: 15000, isSelected: false},
        {id: 1243, name: 'Thach pho mai', price: 20000, isSelected: false},
        {id: 412, name: 'Thach trai cay', price: 25000, isSelected: false},
      ],
    },
    {
      id: 2,
      title: 'Đường',
      data: [
        {id: 131, name: 'Không đường', price: 0, isSelected: false},
        {id: 114, name: 'Ít', price: 0, isSelected: false},
        {id: 5312, name: 'Vừa', price: 0, isSelected: true},
        {id: 1353, name: 'Nhiều', price: 0, isSelected: false},
      ],
    },
    {
      id: 3,
      title: 'Đá',
      data: [
        {id: 413, name: 'Không đá', price: 0, isSelected: false},
        {id: 115, name: 'Ít', price: 0, isSelected: false},
        {id: 24478, name: 'Vừa', price: 0, isSelected: true},
        {id: 3143, name: 'Nhiều', price: 0, isSelected: false},
      ],
    },
  ];
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['70%'], []);

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
      <TouchableOpacity style={styles.toppingContainer} onPress={() => handleItemSelection(item.id)}>
        <Text style={styles.textTopping}>{item.name}</Text>
        <View style={styles.tienToppingContainer}>
          <Text style={styles.textTien}>+{formatCurrency(item.price)}</Text>
          <Icon
            style={styles.toppingChecked}
            name={item.isSelected ? 'circle-dot' : 'circle'}
            size={20}
            color={BACKGROUND_BUTTON_COLOR}
          />
        </View>
      </TouchableOpacity>
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
            <Text style={styles.textTenSanPham}>{data.ten_san_pham}</Text>
            <View style={styles.giaTienContainer}>
              <Text style={styles.textGiaTien}>{formatCurrency(1000)}</Text>
              <Text style={styles.textGiaTienGiamGia}>100.000₫</Text>
            </View>
          </View>

          {/* separate line */}
          <View style={styles.separateLine} />

          <View style={{width: '100%', height: 400}}>
            <BottomSheetSectionList
              stickySectionHeadersEnabled
              sections={dataOptions}
              keyExtractor={item => item.id}
              renderSectionHeader={renderSectionHeader}
              renderItem={RenderTopping}
              contentContainerStyle={styles.contentContainer}
            />
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
                <TouchableOpacity style={styles.buttonSoLuong} onPress={() => handleGiamSoLuong()}>
                  <Icon
                    name="minus"
                    size={15}
                    color={BACKGROUND_BUTTON_COLOR}
                  />
                </TouchableOpacity>
                <Text style={styles.textSoLuong}>{quantity}</Text>
                <TouchableOpacity style={styles.buttonSoLuong} onPress={() => handleTangSoLuong()}> 
                  <Icon
                    name="plus"
                    size={15}
                    color={BACKGROUND_BUTTON_COLOR}
                  />
                </TouchableOpacity>
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
