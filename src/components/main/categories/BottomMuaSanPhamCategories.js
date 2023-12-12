import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useRef, useMemo, useEffect, useCallback, useState} from 'react';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetSectionList,
} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './bottomMuaSanPhamStyle';
import {formatCurrency} from '../../../utils/formatCurrency';
import {useDispatch, useSelector} from 'react-redux';
import {
  getChiTietSanPhamSuccess,
  getChiTietSanPhamTuMenuRequest,
  getChiTietSanPhamTuMenuSuccess,
} from '../../../redux/reducers/slices/chiTietSanPhamSlice';
import {
  setItemGioHang,
  setOpenBottomSheet,
} from '../../../redux/reducers/slices/utilSlice';
import {
  getAddCartPaymentFetch,
  getDeleteCartPaymentFetch,
  getUpdateCartPaymentFetch,
} from '../../../redux/reducers/slices/cartPaymentSlice';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const BottomMuaSanPhamCategories = ({isOpenBottom}) => {
  //id sanpham
  const id = useSelector(state => state.utils.idSanPham);
  const dispatch = useDispatch();
  // ref
  const bottomSheetRef = useRef(null);
  const [total, setTotal] = useState(0);
  const [giaTopping, setGiaTopping] = useState(0);
  const [giaSP, setGiaSP] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotal((giaTopping + giaSP) * quantity);
  }, [giaTopping, giaSP, quantity]);

  const dataToppingFetch = useSelector(state => state.topping.data);
  const user = useSelector(state => state.users.user);
  const itemGioHang = useSelector(state => state.utils.itemGioHang);

  const isLoading = useSelector(state => state.chi_tiet_san_pham.isMenuLoading);

  const [dataChiTietSanPham, setDataChiTietSanPham] = useState(null);
  const dataChiTietSP = useSelector(
    state => state.chi_tiet_san_pham.dataFromMenu,
  );
  useEffect(() => {
    const chiTietSanPhamRequest = () => {
      dispatch(getChiTietSanPhamTuMenuRequest({id}));
    };
    chiTietSanPhamRequest();
  }, []);

  useEffect(() => {
    if (dataChiTietSP && itemGioHang) {
      const item = {
        ...dataChiTietSP,
        size: dataChiTietSP.size.map(item => {
          if (item.ten_size === itemGioHang.size) {
            setGiaSP(item.gia_da_giam);
            return {...item, isSelected: true};
          } else {
            return {...item, isSelected: false};
          }
        }),
      };
      setQuantity(itemGioHang.so_luong);
      setDataChiTietSanPham({...item});

      //toping

      if (itemGioHang.topping.length > 0) {
        let giaToppingTemp = 0;

        // Create a map of topping names to their prices
        const toppingPricesMap = {};
        dataTopping.forEach(item => {
          toppingPricesMap[item.ten_topping] = item.gia;
        });

        // Calculate the total price of selected toppings
        itemGioHang.topping.forEach(itemTopping => {
          const toppingPrice = toppingPricesMap[itemTopping.ten_topping];
          if (toppingPrice) {
            giaToppingTemp += toppingPrice;
          }
        });

        // Update dataTopping to mark selected toppings
        setDataTopping(prevState => {
          return prevState.map(item => {
            if (
              itemGioHang.topping.find(
                itemTopping => itemTopping.ten_topping === item.ten_topping,
              )
            ) {
              return {...item, isSelected: true};
            }
            return item;
          });
        });

        setGiaTopping(giaToppingTemp);
      }
    } else if (dataChiTietSP) {
      setDataChiTietSanPham(dataChiTietSP);
    }
  }, [dataChiTietSP]);

  useEffect(() => {
    if (dataChiTietSanPham) {
      setDataSize(dataChiTietSanPham.size);
      if (!itemGioHang) {
        dataChiTietSanPham.size[1].gia_da_giam != 0
          ? setGiaSP(dataChiTietSanPham.size[1].gia_da_giam)
          : setGiaSP(dataChiTietSanPham.size[1].gia);
      }
    }
  }, [dataChiTietSanPham]);

  const onChange = index => {
    if (index === -1) {
      // onChangeOpen();
      dispatch(setOpenBottomSheet(false));
      dispatch(getChiTietSanPhamTuMenuSuccess({data: null}));
      dispatch(setItemGioHang(null));
      dispatch(getChiTietSanPhamSuccess({data: null}));
    }
  };

  useEffect(() => {
    setDataTopping(dataToppingFetch);
  }, [dataToppingFetch]);

  const handleTangSoLuong = () => {
    setQuantity(quantity + 1);
  };

  const handleGiamSoLuong = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      if (itemGioHang && quantity - 1 == 0) {
        Alert.alert(
          'Thông báo',
          'Bạn có muốn xóa sản phẩm này không?',
          [
            {
              text: 'Không',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Có',
              onPress: () => {
                dispatch(setItemGioHang(null));
                dispatch(getChiTietSanPhamTuMenuSuccess({data: null}));
                dispatch(getChiTietSanPhamSuccess({data: null}));
                dispatch(
                  getDeleteCartPaymentFetch({
                    data: {id_user: user.id_user, _id: itemGioHang._id},
                    dispatch: dispatch,
                  }),
                );
                dispatch(setOpenBottomSheet(false));
              },
            },
          ],
          {cancelable: false},
        );
      }
    }
  };

  const navigation = useNavigation();

  const handleNavigate = data => {
    if (!itemGioHang)
      dispatch(getAddCartPaymentFetch({data: data, dispatch: dispatch}));
    else {
      //cập nhật item giỏ hàng
      data = {...data, _id: itemGioHang._id};
      dispatch(getUpdateCartPaymentFetch({data: data, dispatch: dispatch}));
    }
  };

  const [dataTopping, setDataTopping] = useState(dataToppingFetch);
  const [dataSize, setDataSize] = useState([]);

  const handleChangeSize = id => {
    // Lấy ra size hiện tại đã được chọn
    const currentSelectedSize = dataSize.find(item => item.isSelected);

    // Tìm ra size mới dựa trên id
    const newSize = dataSize.find(item => item._id === id);

    // Kiểm tra nếu size mới khác size hiện tại
    if (currentSelectedSize !== newSize) {
      // Loại bỏ isSelected cho size hiện tại
      if (currentSelectedSize) {
        setDataSize(prevState =>
          prevState.map(item =>
            item._id === currentSelectedSize._id
              ? {...item, isSelected: false}
              : item,
          ),
        );
      }

      // Cập nhật isSelected cho size mới
      setDataSize(prevState =>
        prevState.map(item =>
          item._id === id ? {...item, isSelected: true} : item,
        ),
      );

      // Tính toán và cập nhật giá
      if (currentSelectedSize) {
        // const priceDifference = (newSize.gia - currentSelectedSize.gia);
        // setTotal(total => total + priceDifference);
        newSize.giam_gia != 0
          ? setGiaSP(newSize.gia_da_giam)
          : setGiaSP(newSize.gia);
      }
    }
  };

  const handleChangeTopping = id => {
    setDataTopping(prevState => {
      return prevState.map(item => {
        if (item._id === id) {
          // nếu chưa được chọn thì cộng tiền vào, nếu đã chọn rồi thì trừ tiền ra
          if (item.isSelected == false) {
            setGiaTopping(gia => gia + item.gia);
          } else {
            setGiaTopping(gia => gia - item.gia);
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
  const renderSize = ({item, index}) => {
    // const defaultgia = dataChiTietSanPham.size[1].gia;
    // const gia = item.gia - defaultgia;
    return (
      <TouchableOpacity
        key={item._id}
        style={styles.toppingContainer}
        onPress={() => handleChangeSize(item._id)}>
        <Text style={styles.textTopping}>{item.ten_size}</Text>
        <View style={styles.tienToppingContainer}>
          {item.giam_gia != 0 ? (
            <>
              <Text style={styles.textGiaTien}>{formatCurrency(item.gia)}</Text>
              <Text style={styles.textTien}>
                {' '}
                {formatCurrency(item.gia_da_giam)}{' '}
              </Text>
            </>
          ) : (
            <Text style={styles.textTien}>+{formatCurrency(item.gia)}</Text>
          )}

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
            name={item.isSelected ? 'square-check' : 'square'}
            size={20}
            color={BACKGROUND_BUTTON_COLOR}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheet
      onChange={onChange}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      index={0} //hiện ở vị trí 0, -1 là ẩn,
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
              <Text style={[styles.textDa, {alignSelf:'center'}]}>Không có sản phẩm</Text>
            </View>
          ) : (
            <>
              <View style={styles.container}>
                {/* header ten san pham*/}
                <View style={styles.tenSanPhamVaGiaTienContainer}>
                  <Text style={styles.textTenSanPham}>
                    {dataChiTietSanPham.ten_san_pham}
                  </Text>
                  {/* <View style={styles.giaTienContainer}>
                    <Text style={styles.textGiaTien}>
                      {dataChiTietSanPham.size[1].giam_gia == 0
                        ? null
                        : formatCurrency(dataChiTietSanPham.size[1].gia)}
                    </Text>
                    <Text style={styles.textGiaTienGiamGia}>
                    {dataChiTietSanPham.size[1].giam_gia == 0
                        ? formatCurrency(dataChiTietSanPham.size[1].gia)
                        : formatCurrency(dataChiTietSanPham.size[1].gia_da_giam)
                        }
                    </Text>
                  </View> */}
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
                      hinh_anh_sp:
                        dataChiTietSanPham.hinh_anh_sp[0].hinh_anh_sp,
                    })
                  }>
                  <Text style={styles.textMuaNgay}>
                    {!itemGioHang?'Thêm':'Cập nhật'} ({formatCurrency(total)})
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      )}
    </BottomSheet>
  );
};

export default React.memo(BottomMuaSanPhamCategories);
