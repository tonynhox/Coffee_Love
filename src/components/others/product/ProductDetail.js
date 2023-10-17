import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import DanhSachDanhGia from './DanhSachDanhGia';
import BottomMuaSanPham from './BottomMuaSanPham';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './styles/productDetailStyle';

const ProductDetail = ({navigation}) => {
  const dataSanPhamDeXuat = [
    {
      id: 1,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 2,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 3,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 4,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 5,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
    {
      id: 6,
      name: 'Americano',
      price: '20.100₫',
      image: require('../../../assets/images/americano.png'),
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const renderSanPhamDeXuat = () => {
    return (
      <View style={styles.containerSanPhamDeXuat}>
        <Image
          style={styles.imageSanPhamDeXuat}
          source={require('../../../assets/images/americano.png')}
        />
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.textTenSanPhamDeXuat}>
          Americanoaaaaaaaa
        </Text>
        <Text style={styles.textGiaTienSanPhamDeXuat}>20.100₫</Text>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <Image
          source={require('../../../assets/images/americano.png')}
          style={styles.imageSanPham}
        />

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={17} color={'black'} />
        </TouchableOpacity>

        {/* Thong tin san pham container */}
        <View style={styles.thongTinSanPhamContainer}>
          {/* ten san pham, sao vote */}
          <View>
            <Text style={styles.textTenSanPham}>Americano</Text>
            {/* star vote */}
            <View style={styles.voteContainer}>
              <Text style={styles.start}>4.5</Text>
              <Icon
                name="star"
                solid
                size={15}
                color={'#FC9702'}
                style={{paddingRight: 5, paddingLeft: 2}}
              />
              <Text style={styles.start}>(2.104)</Text>
            </View>
          </View>

          {/* Danh muc */}
          <View style={styles.danhSachDanhMucContainer}>
            {/* Coffee  */}
            <View style={styles.danhMucContainer}>
              <Icon
                name="mug-saucer"
                solid
                size={15}
                color={'#FFD700'}
                style={{marginRight: 5}}
              />
              <Text style={styles.textDanhMuc}>Coffee</Text>
            </View>
            {/* Coffee  */}
            <View style={styles.danhMucContainer}>
              <Icon
                name="egg"
                solid
                size={15}
                color={'#FFD700'}
                style={{marginRight: 5}}
              />
              <Text style={styles.textDanhMuc}>Milk Tea</Text>
            </View>
            {/* Coffee  */}
            <View style={styles.danhMucContainer}>
              <Icon
                name="mug-saucer"
                solid
                size={15}
                color={'#FFD700'}
                style={{marginRight: 5}}
              />
              <Text style={styles.textDanhMuc}>Milk Tea</Text>
            </View>
          </View>
        </View>

        {/* Gia */}
        <View style={styles.giaTienContainer}>
          <Text style={[styles.textTien, styles.amount]}>100.000₫</Text>
          <Text style={styles.dash}>-</Text>
          <Text style={styles.textSale}>100.000₫</Text>
        </View>

        {/* Mo ta container */}
        <View style={styles.moTaContainer}>
          <Text style={styles.textMoTa}>Mô tả</Text>
          <Text style={styles.textThongTin}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec
          </Text>
        </View>

        {/* separate line */}
        <View style={styles.separateLine} />

        {/* chon size */}
        <View style={styles.chonSizeContainer}>
          <Text style={styles.textMoTa}>Chọn size</Text>
          <View style={styles.baSizeContainer}>
            {/* Size M */}
            <View style={styles.sizeContainer}>
              <Text style={styles.textSize}>M</Text>
            </View>
            {/* Size L */}
            <View style={styles.sizeSelectedContainer}>
              <Text style={styles.textSizeSelected}>L</Text>
            </View>
            {/* Size SL */}
            <View style={styles.sizeContainer}>
              <Text style={styles.textSize}>SL</Text>
            </View>
          </View>
          <View />
          <View />
        </View>

        {/* Sản phẩm đề xuất */}
        <View style={styles.sanPhamDeXuatContainer}>
          <Text style={styles.textMoTa}>Đề xuất</Text>
          <FlatList
            data={dataSanPhamDeXuat}
            renderItem={renderSanPhamDeXuat}
            horizontal={true}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <DanhSachDanhGia />
      </ScrollView>

      {/* Bottom mua san pham */}
      <TouchableOpacity
        style={styles.buttonMuaSanPham}
        onPress={() => setIsOpen(true)}>
        <Text style={styles.textMua}>Mua</Text>
        <Icon name="cart-shopping"  size={15} color={'white'} />
      </TouchableOpacity>

      <BottomMuaSanPham isOpen={isOpen} onChangeOpen={()=> setIsOpen(false)}/>
    </GestureHandlerRootView>
  );
};

export default ProductDetail;
