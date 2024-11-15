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
import {RenderTopping} from './item/RenderTopping';
import {formatCurrency} from '../../../utils/formatCurrency';

const RenderOrderItem = ({item, index}) => {
  const dispatch = useDispatch();
  const isBold = index % 2 == 0
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          dispatch(setIDSanPham(item.id_san_pham));
          dispatch(setItemGioHang(item));
          dispatch(setOpenBottomSheet(true));
        }}
        style={!isBold ? styles.container : styles.containerBold}>
        {/* Image va thong tin san pham */}
        <View style={styles.sanPhamContainer}>
          <Image
            source={{uri: item.hinh_anh_sp[0].hinh_anh_sp}}
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
                      {formatCurrency(item.gia)}
                    </Text>
                    <Text style={[styles.textTien, styles.textGiaSale]}>
                      {formatCurrency(item.gia_da_giam)}
                    </Text>
                  </>
                ) : (
                  <Text style={[styles.textTien, styles.textGiaSale]}>
                    {formatCurrency(item.gia)}
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
      {item.topping.length == 0 ? null : (
        <View>
          {/* <Text style={[styles.textSize, {marginLeft: 80, marginTop: -4}]}>
          </Text> */}
          {item.topping.map((item, index) => (
            <View key={index}>
              <RenderTopping item={item} index={index} />
            </View>
          ))}
        </View>
      )}
      </TouchableOpacity>
    </>
  );
};

export default React.memo(RenderOrderItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 0.4,
    borderColor:'#F4690B',
    borderRadius: 7,
    marginBottom: 5,
    paddingRight: 10,
    paddingBottom: 5,
    backgroundColor:'#FEF7F1'
  },
  containerBold: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 0.4,
    borderColor:'#F4690B',
    borderRadius: 7,
    marginBottom: 5,
    paddingRight: 10,
    paddingBottom: 5,
    backgroundColor:'#FFFEFD'
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
    flex: 1,
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
    flex: 1,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
  },
});
