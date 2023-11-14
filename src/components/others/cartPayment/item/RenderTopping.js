import {Text, View, Image} from 'react-native';
import {styles} from './styleOrderItem';
import React from 'react';

export const RenderTopping = React.memo(({item, index}) => {
  return (
    <View style={styles.toppingContainer}>
      <Image
        source={require('../../../../assets/images/americano.png')}
        style={[styles.imageTopping, {marginLeft: 80}]}
      />

      {/* thong tin san pham */}

      <View style={styles.thongTinSanPhamVaGiaContainer}>
        {/* Ten san pham, so luong, size */}
        <View style={styles.tenSanPhamVaGiaContainer}>
          <Text style={styles.textTenTopping}>{item.ten_topping}</Text>
          {/* Gia */}
          <View style={styles.giaTienContainer}>
            <Text style={styles.textGiaTopping}>{item.gia}</Text>
          </View>
        </View>
      </View>
    </View>
  );
});
