import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useRef, useMemo, useEffect, useCallback, useState} from 'react';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetSectionList,
} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { BACKGROUND_BUTTON_COLOR } from '../../../../utils/contanst';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './bottomMuaSanPhamStyle';
import { formatCurrency } from '../../../../utils/formatCurrency';
import {useDispatch, useSelector} from 'react-redux';
import { getChiTietSanPhamRequest } from '../../../../redux/reducers/slices/chiTietSanPhamSlice';

const BottomMuaSanPham = ({isOpen, onChangeOpen, id, handleNavigate}) => {
  const dataToppingFetch = useSelector(state => state.topping.data);
  const user = useSelector(state => state.users.user);

  const isLoading = useSelector(state => state.chi_tiet_san_pham.isLoading);
  const dataChiTietSanPham = useSelector(state => state.chi_tiet_san_pham.data);


  useEffect(() => {
    const chiTietSanPhamRequest = () => {
      dispatch(getChiTietSanPhamRequest(id));
    };

    chiTietSanPhamRequest();
  }, []);

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

  useEffect(() => {
    setDataTopping(dataToppingFetch);
  }, [dataToppingFetch]);

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(1000);

  const handleTangSoLuong = () => {
    setQuantity(quantity + 1);
  };

  const handleGiamSoLuong = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [dataTopping, setDataTopping] = useState(dataToppingFetch);
  const [dataSize, setDataSize] = useState(data.size);

  const handleChangeSize = id => {
    constantPrice = data.size[0].gia;
    setDataSize(prevState => {
      return prevState.map(item => {
        if (item._id === id) {
          setTotal(constantPrice + item.gia);
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
          // nếu chưa được chọn thì cộng tiền vào, nếu đã chọn rồi thì trừ tiền ra
          if (item.isSelected == false) {
            setTotal(total + item.gia);
          } else {
            setTotal(total - item.gia);
          }
          return {...item, isSelected: !item.isSelected};
        }
        return item; // Return the item as is for items that don't match the id
      });
    });
  };

  // hàm lọc size được chọn cho vào giỏ hàng
  const handeSelectedSize = () => {
    return dataSize.find(item => item.isSelected === true);
  };

  // hàm lọc topping được chọn cho vào giỏ hàng
  const handleSelectedTopping = () => {
    const newArrayTopping = dataTopping
      .filter(item => item.isSelected) // Filter items with isSelected == true
      .map(item => ({
        ten_topping: item.ten_topping, // Add the ten_topping field
        gia: item.gia, // Add the gia field
      }));
    return newArrayTopping;
  };

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['70%'], []);

  // render size
  const renderSize = ({item}) => {
    return (
      <TouchableOpacity
        key={item._id}
        style={styles.toppingContainer}
        onPress={() => handleChangeSize(item._id)}>
        <Text style={styles.textTopping}>{item.ten_size}</Text>
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

  // render topping
  const renderTopping = ({item}) => {
    return (
      <TouchableOpacity
        key={item._id}
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
                    <View key={item._id}>{renderSize({item})}</View>
                  ))}
                </>
              </View>

              {/* Topping view */}
              {isLoading ? (
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <ActivityIndicator
                    size="small"
                    color={BACKGROUND_BUTTON_COLOR}
                  />
                </View>
              ) : (
                <View>
                  {/* chon topping */}
                  <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.textDa}>Chọn topping</Text>
                  </View>

                  {/* list topping */}
                  {dataTopping.map(item => (
                    <View key={item._id}>{renderTopping({item})}</View>
                  ))}
                </View>
              )}
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

          <TouchableOpacity
            style={styles.muaNgayButtonContainer}
            onPress={() =>
              handleNavigate({
                id_user: user.id_user,
                id_san_pham: data._id,
                ten_san_pham: data.ten_san_pham,
                size: handeSelectedSize().ten_size,
                gia: handeSelectedSize().gia,
                so_luong: quantity,
                topping: handleSelectedTopping(),
              })
            }>
            <Text style={styles.textMuaNgay}>
              Mua ngay ({formatCurrency(total * quantity)})
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomMuaSanPham;
