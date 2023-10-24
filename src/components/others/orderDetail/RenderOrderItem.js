import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
// import americanoImage from '../../../assets/images/americano.png';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {formatCurrency} from '../../../utils/formatCurrency';
import {styles} from './styleOrderItem';
import {RenderTopping} from './RenderTopping';

const RenderOrderItem = ({item, index, isSelected, onPress}) => {
  isTopping = item.topping.length == 0;
  return (
    <View style={styles.container}>
      {/* Image va thong tin san pham */}
      <TouchableOpacity
        style={styles.sanPhamContainer}
        onPress={() => onPress(!isSelected ? index : null)}
        disabled={isTopping}>
        <View style={{justifyContent: 'center', alignItems: 'center', width: 20}}>
          {isTopping || (
            <Icon
              name="circle-chevron-down"
              solid
              size={17}
              color={BACKGROUND_BUTTON_COLOR}
            />
          )}
        </View>

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
              {/* <Text style={[styles.textTien, styles.amount]}>100.000₫</Text> */}
              <Text style={styles.textGiaSale}>{formatCurrency(item.gia)}</Text>
            </View>
          </View>
          <View style={styles.sizeContainer}>
            <Text style={styles.textSoLuong}>Số lượng</Text>
            <Text style={styles.textSoLuong}>x{item.so_luong}</Text>
          </View>
          <Text style={styles.textSize}>Size: {item.size}</Text>
        </View>
      </TouchableOpacity>

      {/* topping */}
      {isSelected && (
        <>
          {item.topping.length == 0 ? null : (
            <>
              {item.topping.map((item, index) => (
                <View key={index}>
                  <RenderTopping item={item} index={index} />
                </View>
              ))}
            </>
          )}
        </>
      )}

      {/* separate line */}
      <View style={styles.separateLine} />
    </View>
  );
};

export default RenderOrderItem;
