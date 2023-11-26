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
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './styles/bottomMuaSanPhamStyle';
import {formatCurrency} from '../../../utils/formatCurrency';
import {useDispatch, useSelector} from 'react-redux';
import {getDataToppingRequest} from '../../../redux/reducers/slices/toppingSlice';

const BottomMuaSanPham = ({isOpen, onChangeOpen, data, handleNavigate}) => {
  const dispatch = useDispatch();
  // console.log('data -------------', data);
  const isLoading = useSelector(state => state.topping.isLoading);
  const dataToppingFetch = useSelector(state => state.topping.data);
  const user = useSelector(state => state.users.user);
  const [total, setTotal] = useState(0);
  const [giaSP, setGiaSP] = useState(data.size[1].gia_da_giam);
  const [giaTopping, setGiaTopping] = useState(0);
  const [quantity, setQuantity] = useState(1);

  //tinhtong
  useEffect(() => {
    setTotal((giaSP + giaTopping) * quantity);
  }, [giaSP, giaTopping, quantity]);

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current.expand();
    }
  }, [isOpen]);

  useEffect(() => {
    setGiaSP(data.size[1].gia_da_giam);
  }, [data]);

  const onChange = index => {
    if (index === -1) {
      onChangeOpen();
    }
  };

  useEffect(() => {
    setDataTopping(dataToppingFetch);
  }, [dataToppingFetch]);

  const getToppingRequest = () => {
    dispatch(getDataToppingRequest());
  };

  useEffect(() => {
    getToppingRequest();
  }, []);

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

  //huy
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

      if (currentSelectedSize) {
        // const priceDifference = (newSize.gia - currentSelectedSize.gia);
        // setTotal(total => total + priceDifference);
        newSize.giam_gia != 0
          ? setGiaSP(newSize.gia_da_giam)
          : setGiaSP(newSize.gia);
      }
    }
  };
  //trongnm
  // const handleChangeSize = id => {
  //   constantPrice = data.size[1].gia;
  //   setDataSize(prevState => {
  //     return prevState.map(item => {
  //       if (item._id === id) {
  //         setTotal(item.gia);
  //         return {...item, isSelected: true};
  //       } else {
  //         return {...item, isSelected: false};
  //       }
  //     });
  //   });
  // };

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

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['70%'], []);

  // render size
  const renderSize = ({item}) => {
    // const defaultgia = data.size[1].gia;
    // const gia = item.gia-defaultgia;

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
            {/* <View style={styles.giaTienContainer}>
              <Text style={styles.textGiaTien}>
                {data.size[1].giam_gia == 0
                  ? null
                  : formatCurrency(data.size[1].giam_gia)}
              </Text>
              <Text style={styles.textGiaTienGiamGia}>
                {formatCurrency(data.size[1].gia)}
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
                hinh_anh_sp: data.hinh_anh_sp[0].hinh_anh_sp,
              })
            }>
            <Text style={styles.textMuaNgay}>
              Thêm ({formatCurrency(total)})
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomMuaSanPham;
