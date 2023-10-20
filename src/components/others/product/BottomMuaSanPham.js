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
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetSectionList,
} from '@gorhom/bottom-sheet';
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

  useEffect(() => {
    setTotal(data.size[0].gia);
  }, [data]);

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
  const [total, setTotal] = useState(data.size[0].gia);
  const [price, setPrice] = useState(0);

  const handleTangSoLuong = () => {
    setQuantity(quantity + 1);
  };

  const handleGiamSoLuong = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleItemSelection = (id, data) => {
    if (id === 1) {
      // For data with id 1, allow all items to be selected
      // data.forEach((item) => (item.isSelected = true));
    } else {
      // For data with id 0, 2, and 3, only one item can be selected
      let selectedCount = 0;
      data.forEach(item => {
        if (item.isSelected) {
          selectedCount++;
          if (selectedCount > 1) {
            item.isSelected = false; // Deselect the item if more than one is selected
          }
        }
      });
    }
  };

  const [dataSize, setDataSize] = useState([
    {id: 1123, name: 'Nhỏ', price: 0, isSelected: false},
    {id: 21214, name: 'Vừa', price: 10000, isSelected: true},
    {id: 31231, name: 'Lớn', price: 20000, isSelected: false},
  ]);

  const [dataTopping, setDataTopping] = useState([
    {
      _id: '653267eeea17db2026215cbc',
      ten_topping: 'pudding',
      hinh_anh: [
        {
          hinh_anh_topping:
            'https://bizweb.dktcdn.net/100/421/036/files/tran-chau-den-6630c62d-9e20-49ab-b979-7c5fd872e147.jpg?v=1639106526825',
          _id: '653267eeea17db2026215cbd',
        },
        {
          hinh_anh_topping:
            'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/1200(5).jpg',
          _id: '653267eeea17db2026215cbe',
        },
      ],
      gia: 12000,
      status: 1,
      isSelected: false,
      __v: 0,
    },
    {
      _id: '653267ffea17db2026215cc1',
      ten_topping: 'trân châu',
      hinh_anh: [
        {
          hinh_anh_topping:
            'https://bizweb.dktcdn.net/100/421/036/files/tran-chau-den-6630c62d-9e20-49ab-b979-7c5fd872e147.jpg?v=1639106526825',
          _id: '653267ffea17db2026215cc2',
        },
        {
          hinh_anh_topping:
            'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/1200(5).jpg',
          _id: '653267ffea17db2026215cc3',
        },
      ],
      gia: 9000,
      isSelected: false,
      status: 1,
      __v: 0,
    },
    {
      _id: '65326809ea17db2026215cc6',
      ten_topping: 'thạch rau câu',
      hinh_anh: [
        {
          hinh_anh_topping:
            'https://bizweb.dktcdn.net/100/421/036/files/tran-chau-den-6630c62d-9e20-49ab-b979-7c5fd872e147.jpg?v=1639106526825',
          _id: '65326809ea17db2026215cc7',
        },
        {
          hinh_anh_topping:
            'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/1200(5).jpg',
          _id: '65326809ea17db2026215cc8',
        },
      ],
      gia: 9000,
      isSelected: false,
      status: 1,
      __v: 0,
    },
    {
      _id: '65326809ewea17db2026215cc6',
      ten_topping: 'thạch rau câu',
      hinh_anh: [
        {
          hinh_anh_topping:
            'https://bizweb.dktcdn.net/100/421/036/files/tran-chau-den-6630c62d-9e20-49ab-b979-7c5fd872e147.jpg?v=1639106526825',
          _id: '65326809ea17db2026215cc7',
        },
        {
          hinh_anh_topping:
            'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/1200(5).jpg',
          _id: '65326809ea17db2026215cc8',
        },
      ],
      gia: 9000,
      isSelected: false,
      status: 1,
      __v: 0,
    },
    {
      _id: '65326809sdfsewea1157db2026215cc6',
      ten_topping: 'thạch rau câu',
      hinh_anh: [
        {
          hinh_anh_topping:
            'https://bizweb.dktcdn.net/100/421/036/files/tran-chau-den-6630c62d-9e20-49ab-b979-7c5fd872e147.jpg?v=1639106526825',
          _id: '65326809ea17db2026215cc7',
        },
        {
          hinh_anh_topping:
            'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/1200(5).jpg',
          _id: '65326809ea17db2026215cc8',
        },
      ],
      gia: 9000,
      isSelected: false,
      status: 1,
      __v: 0,
    },
    {
      _id: '65326809sdfsewea1sdfe7db2026215cc6',
      ten_topping: 'thạch rau câu',
      hinh_anh: [
        {
          hinh_anh_topping:
            'https://bizweb.dktcdn.net/100/421/036/files/tran-chau-den-6630c62d-9e20-49ab-b979-7c5fd872e147.jpg?v=1639106526825',
          _id: '65326809ea17db2026215cc7',
        },
        {
          hinh_anh_topping:
            'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/1200(5).jpg',
          _id: '65326809ea17db2026215cc8',
        },
      ],
      gia: 9000,
      isSelected: false,
      status: 1,
      __v: 0,
    },
    {
      _id: '65326809sdfdfsewea17db2026215cc6',
      ten_topping: 'thạch rau câu',
      hinh_anh: [
        {
          hinh_anh_topping:
            'https://bizweb.dktcdn.net/100/421/036/files/tran-chau-den-6630c62d-9e20-49ab-b979-7c5fd872e147.jpg?v=1639106526825',
          _id: '65326809ea17db2026215cc7',
        },
        {
          hinh_anh_topping:
            'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/1200(5).jpg',
          _id: '65326809ea17db2026215cc8',
        },
      ],
      gia: 9000,
      isSelected: false,
      status: 1,
      __v: 0,
    },
    {
      _id: '65326809sdfdfseasfewwea17db2026215cc6',
      ten_topping: 'thạch rau câu',
      hinh_anh: [
        {
          hinh_anh_topping:
            'https://bizweb.dktcdn.net/100/421/036/files/tran-chau-den-6630c62d-9e20-49ab-b979-7c5fd872e147.jpg?v=1639106526825',
          _id: '65326809ea17db2026215cc7',
        },
        {
          hinh_anh_topping:
            'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/1200(5).jpg',
          _id: '65326809ea17db2026215cc8',
        },
      ],
      gia: 9000,
      isSelected: false,
      status: 1,
      __v: 0,
    },
    {
      _id: '65326809sdfdfsesdfdswea17db2026215cc6',
      ten_topping: 'thạch rau câu',
      hinh_anh: [
        {
          hinh_anh_topping:
            'https://bizweb.dktcdn.net/100/421/036/files/tran-chau-den-6630c62d-9e20-49ab-b979-7c5fd872e147.jpg?v=1639106526825',
          _id: '65326809ea17db2026215cc7',
        },
        {
          hinh_anh_topping:
            'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/1200(5).jpg',
          _id: '65326809ea17db2026215cc8',
        },
      ],
      gia: 9000,
      isSelected: false,
      status: 1,
      __v: 0,
    },
  ]);

  const handleChangeSize = id => {
    constantPrice = data.size[0].gia;
    setDataSize(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          setTotal(constantPrice + item.price);
          return {...item, isSelected: true};
        } else {
          return {...item, isSelected: false};
        }
      });
    });
  };
  const handleChangeTopping = id => {
    setDataTopping(prevState => {
      return prevState.map(item => {
        if (item._id === id) {
          return {...item, isSelected: !item.isSelected};
        }
        return item; // Return the item as is for items that don't match the id
      });
    });
  };

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

  // render size
  const renderSize = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.toppingContainer}
        onPress={() => handleChangeSize(item.id)}>
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

  // render topping
  const renderTopping = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.toppingContainer}
        onPress={() => handleChangeTopping(item._id)}>
        <Text style={styles.textTopping}>{item.ten_topping}</Text>
        <View style={styles.tienToppingContainer}>
          <Text style={styles.textTien}>+{formatCurrency(item.gia)}</Text>
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
              <Text style={styles.textGiaTien}>
                {data.size[0].giam_gia == 0
                  ? null
                  : formatCurrency(data.size[0].giam_gia)}
              </Text>
              <Text style={styles.textGiaTienGiamGia}>
                {formatCurrency(data.size[0].gia)}
              </Text>
            </View>
          </View>

          {/* separate line */}
          <View style={styles.separateLine} />

          <View style={{height: '70%'}}>
            <BottomSheetScrollView style={{flex: 1}}>
              {/* Size view */}
              <View>
                {/* chon size */}
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.textDa}>Chọn size</Text>
                  <Text style={styles.required}>*</Text>
                </View>

                {/* list size */}
                <>
                  {dataSize.map(item => (
                    <View key={item.id}>{renderSize({item})}</View>
                  ))}
                </>
              </View>

              {/* Topping view */}
              <View>
                {/* chon topping */}
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.textDa}>Chọn topping</Text>
                </View>

                {/* list topping */}
                {dataTopping.map(item => (
                  <View key={item.id}>{renderTopping({item})}</View>
                ))}
              </View>
            </BottomSheetScrollView>
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
                <TouchableOpacity
                  style={styles.buttonSoLuong}
                  onPress={() => handleGiamSoLuong()}>
                  <Icon
                    name="minus"
                    size={15}
                    color={BACKGROUND_BUTTON_COLOR}
                  />
                </TouchableOpacity>
                <Text style={styles.textSoLuong}>{quantity}</Text>
                <TouchableOpacity
                  style={styles.buttonSoLuong}
                  onPress={() => handleTangSoLuong()}>
                  <Icon name="plus" size={15} color={BACKGROUND_BUTTON_COLOR} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.muaNgayButtonContainer}>
            <Text style={styles.textMuaNgay}>Mua ngay ({formatCurrency(total)})</Text>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomMuaSanPham;
