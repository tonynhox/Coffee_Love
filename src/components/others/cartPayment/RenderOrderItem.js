import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// import americanoImage from '../../../assets/images/americano.png';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import {useDispatch} from 'react-redux';
import {
  setIDSanPham,
  setItemGioHang,
  setOpenBottomSheet,
} from '../../../redux/reducers/slices/utilSlice';
import { RenderTopping } from './item/RenderTopping';

const RenderOrderItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          dispatch(setIDSanPham(item.id_san_pham));
          dispatch(setItemGioHang(item));
          dispatch(setOpenBottomSheet(true));
        }}
        style={styles.container}>
        {/* Image va thong tin san pham */}
        <View style={styles.sanPhamContainer}>
          <Image
            source={require('../../../assets/images/americano.png')}
            style={styles.imageSanPham}
          />

          {/* thong tin san pham */}
          <View style={styles.thongTinSanPhamVaGiaContainer}>
            {/* Ten san pham, so luong, size */}
            <View style={styles.tenSanPhamVaGiaContainer}>
              <Text style={styles.textTenSanPham}>{item.ten_san_pham}</Text>
              {/* Gia */}
              <View style={styles.giaTienContainer}>
                {item.giam_gia != 0 ? (
                  <>
                    <Text style={[styles.textTien, styles.amount]}>
                      {item.gia}
                    </Text>
                    <Text style={[styles.textTien, styles.textGiaSale]}>
                      {item.gia_da_giam}
                    </Text>
                  </>
                ) : (
                  <Text style={[styles.textTien, styles.textGiaSale]}>
                    {item.gia}
                  </Text>
                )}
                {/* <Text style={styles.textGiaSale}>{item.gia}₫</Text>  */}
              </View>
            </View>
            <View style={styles.sizeContainer}>
              <Text style={styles.textSize}>số lượng</Text>
              <Text style={styles.textSize}>x{item.so_luong}</Text>
            </View>
            <Text style={styles.textSize}>size: {item.size}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {item.topping.length == 0 ? null : (
        <View>
          <Text style={[styles.textSize,{marginLeft: 80,marginTop:-4}]}>
            topping
          </Text>
          {item.topping.map((item, index) => (
            <View key={index}>
              <RenderTopping item={item} index={index} />
            </View>
          ))}
        </View>
      )}
    </>
  );
};

export default React.memo(RenderOrderItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageSanPham: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textTenSanPham: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  textSoLuong: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  textSize: {
    fontSize: 14,
    color: '#404040',
    fontWeight: '400',
  },
  sanPhamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thongTinSanPhamVaGiaContainer: {
    flexDirection: 'column',

    flex: 1,
  },
  tenSanPhamVaSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
    backgroundColor: 'red',
  },
  giaTienContainer: {
    flexDirection: 'row',
  },
  amount: {
    textDecorationLine: 'line-through', // Add a line-through text decoration
  },
  textTien: {
    fontSize: 14,
    color: '#404040',
    fontWeight: '400',
  },
  textGiaSale: {
    fontSize: 15,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: '500',
    marginLeft: 10,
  },
  tenSanPhamVaGiaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
  },
});
