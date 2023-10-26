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
import {BACKGROUND_BUTTON_COLOR} from '../../../../utils/contanst';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './bottomMuaSanPhamStyle';
import {formatCurrency} from '../../../../utils/formatCurrency';
import {useDispatch, useSelector} from 'react-redux';
import {
  getChiTietSanPhamRequest,
  getChiTietSanPhamTuMenuRequest,
} from '../../../../redux/reducers/slices/chiTietSanPhamSlice';
import { setSanPham } from '../../../../redux/reducers/slices/muaSanPhamSlice';

const BottomMuaSanPham = ({onChangeOpen, id}) => {
  const dispatch = useDispatch();
  // ref
  const bottomSheetRef = useRef(null);

  const dataToppingFetch = useSelector(state => state.topping.data);
  const user = useSelector(state => state.users.user);

  const isLoading = useSelector(state => state.chi_tiet_san_pham.isMenuLoading);
  const dataChiTietSanPham = useSelector(
    state => state.chi_tiet_san_pham.dataFromMenu,
  );
  useEffect(() => {
    const chiTietSanPhamRequest = () => {
      dispatch(getChiTietSanPhamTuMenuRequest({id}));
    };
    chiTietSanPhamRequest();
  }, []);

  useEffect(() => {
    if (dataChiTietSanPham) {
      setTotal(dataChiTietSanPham.size[1].gia);
      setDataSize(dataChiTietSanPham.size);
      setTotal(dataChiTietSanPham.size[1].gia);
    }
  }, [dataChiTietSanPham]);

  const onChange = index => {
    if (index === -1) {
      onChangeOpen();
    }
  };

  useEffect(() => {
    setDataTopping(dataToppingFetch);
  }, [dataToppingFetch]);

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const handleTangSoLuong = () => {
    setQuantity(quantity + 1);
  };

  const handleGiamSoLuong = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleNavigate = data => {
    dispatch(setSanPham(data));
  };

  const [dataTopping, setDataTopping] = useState(dataToppingFetch);
  const [dataSize, setDataSize] = useState([]);

  const handleChangeSize = id => {
    constantPrice = dataChiTietSanPham.size[1].gia;
    setDataSize(prevState => {
      return prevState.map(item => {
        if (item._id === id) {
          setTotal(item.gia);
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

  // variables
  const snapPoints = useMemo(() => ['75%'], []);

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
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: '#FEF9F1'}}>
        {isLoading ? (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="small" color={BACKGROUND_BUTTON_COLOR} />
          </View>
        ) : (
          <>
            {dataChiTietSanPham == undefined || dataChiTietSanPham == null ? (
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.textDa}>Không có sản phẩm</Text>
              </View>
            ) : (
              <>
                <View style={styles.container}>
                  {/* header ten san pham*/}
                  <View style={styles.tenSanPhamVaGiaTienContainer}>
                    <Text style={styles.textTenSanPham}>
                      {dataChiTietSanPham.ten_san_pham}
                    </Text>
                    <View style={styles.giaTienContainer}>
                      <Text style={styles.textGiaTien}>
                        {dataChiTietSanPham.size[1].giam_gia == 0
                          ? null
                          : formatCurrency(dataChiTietSanPham.size[1].giam_gia)}
                      </Text>
                      <Text style={styles.textGiaTienGiamGia}>
                        {formatCurrency(dataChiTietSanPham.size[1].gia)}
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
                          <Icon
                            name="plus"
                            size={15}
                            color={BACKGROUND_BUTTON_COLOR}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.muaNgayButtonContainer}
                    onPress={() =>
                      handleNavigate({
                        id_user: user.id_user,
                        id_san_pham: dataChiTietSanPham._id,
                        ten_san_pham: dataChiTietSanPham.ten_san_pham,
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
              </>
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
};

export default BottomMuaSanPham;
