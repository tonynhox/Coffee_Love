import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import {LINEAR_1, LINEAR_2, LINEAR_3} from '../../product/contanst';
import Fuse from 'fuse.js';

const Search = () => {
  const dataMostSold = [
    {
      id: 1,
      name: 'Americano',
      image: require('../../../../assets/images/americano.png'),
      star: 4.6,
    },
    {
      id: 2,
      name: 'Americano',
      image: require('../../../../assets/images/americano.png'),
      star: 4.6,
    },
    {
      id: 3,
      name: 'Americano',
      image: require('../../../../assets/images/americano.png'),
      star: 4.6,
    },
    {
      id: 4,
      name: 'Americano',
      image: require('../../../../assets/images/americano.png'),
      star: 4.6,
    },
  ];

  const dataLichSuTimKiem = [
    {id: 1, name: 'Americano'},
    {id: 2, name: 'Americano'},
    {id: 3, name: 'Americano'},
    {id: 4, name: 'Americano'},
  ];

  const dataTimKiem = [
    {id: 1, text: 'coffee', category: 'drink'},
    {id: 2, text: 'americano', category: 'drink'},
    {id: 3, text: 'latte', category: 'drink'},
    {id: 4, text: 'cappuccino', category: 'drink'},
    {id: 5, text: 'espresso', category: 'drink'},
    {id: 6, text: 'mocha', category: 'drink'},
    {id: 7, text: 'macchiato', category: 'drink'},
    {id: 8, text: 'iced coffee', category: 'drink'},
    {id: 9, text: 'cold brew', category: 'drink'},
    {id: 10, text: 'frappuccino', category: 'drink'},
    {id: 11, text: 'chai latte', category: 'drink'},
    {id: 12, text: 'matcha latte', category: 'drink'},
    {id: 13, text: 'green tea', category: 'drink'},
    {id: 14, text: 'black tea', category: 'drink'},
    {id: 15, text: 'herbal tea', category: 'drink'},
    {id: 16, text: 'oolong tea', category: 'drink'},
    {id: 17, text: 'bubble tea', category: 'drink'},
    {id: 18, text: 'smoothie', category: 'drink'},
    {id: 19, text: 'juice', category: 'drink'},
    {id: 20, text: 'lemonade', category: 'drink'},
    {id: 21, text: 'soda', category: 'drink'},
    {id: 22, text: 'water', category: 'drink'},
    {id: 23, text: 'milk', category: 'drink'},
    {id: 24, text: 'soy milk', category: 'drink'},
    {id: 25, text: 'almond milk', category: 'drink'},
    {id: 26, text: 'oat milk', category: 'drink'},
    {id: 27, text: 'whipped cream', category: 'topping'},
    {id: 28, text: 'caramel', category: 'topping'},
    {id: 29, text: 'chocolate', category: 'topping'},
    {id: 30, text: 'vanilla', category: 'topping'},
    {id: 31, text: 'croissant', category: 'food'},
    {id: 32, text: 'bagel', category: 'food'},
    {id: 33, text: 'muffin', category: 'food'},
    {id: 34, text: 'scone', category: 'food'},
    {id: 35, text: 'sandwich', category: 'food'},
    {id: 36, text: 'salad', category: 'food'},
    {id: 37, text: 'soup', category: 'food'},
    {id: 38, text: 'pancake', category: 'food'},
    {id: 39, text: 'waffle', category: 'food'},
    {id: 40, text: 'french toast', category: 'food'},
  ];

  const [search, setSearch] = React.useState('');
  const [isHistory, setIsHistory] = React.useState(true);
  const [filteredData, setFilteredData] = React.useState(dataTimKiem);

  const renderMuaNhieuNhat = ({item}) => {
    return (
      /* hinh anh ten san pham, sao */
      <View style={styles.hinhAnhVaThongTinMuaNhieuNhat}>
        <Image
          style={styles.imageSanPhamMuaNhieuNhat}
          source={require('../../../../assets/images/americano.png')}
        />
        <View style={styles.thongTinSanPhamMuaNhieuConTainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.textTenSanPhamMuaNhieuNhat}>
            Americano
          </Text>
          <View style={styles.soSaoContainer}>
            <Text style={styles.textStar}>4.6</Text>
            <Icon name="star" solid size={11} color={LINEAR_3} />
          </View>
        </View>

        <View style={styles.top1Container}>
          <Text style={styles.textTop1}>1</Text>
          <Icon name="crown" solid size={11} color={LINEAR_3} />
        </View>
      </View>
    );
  };

  const renderSanPhamMoi = ({item}) => {
    return (
      /* hinh anh ten san pham, sao */
      <View style={styles.hinhAnhVaThongTinMuaNhieuNhat}>
        <Image
          style={styles.imageSanPhamMuaNhieuNhat}
          source={require('../../../../assets/images/americano.png')}
        />
        <View style={styles.thongTinSanPhamMuaNhieuConTainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.textTenSanPhamMuaNhieuNhat}>
            Americano
          </Text>
          <View style={styles.soSaoContainer}>
            <Text style={styles.textStar}>4.6</Text>
            <Icon name="star" solid size={11} color={LINEAR_3} />
          </View>
        </View>
      </View>
    );
  };

  const renderLichSuTimKiem = () => {
    return (
      <View style={styles.timKiemGanDayContainer}>
        <Icon
          name={isHistory ? 'clock-rotate-left' : 'magnifying-glass'}
          size={18}
          color="gray"
        />
        <Text style={styles.textLichSuTimKiem}>Americano</Text>
      </View>
    );
  };

  const renderTimKiem = ({item}) => {
    return (
      <View style={styles.timKiemContainer}>
        <Icon name={'magnifying-glass'} size={18} color="gray" />
        <Text style={styles.textLichSuTimKiem}>{item.item.text}</Text>
      </View>
    );
  };

  const options = {
    keys: ['text', 'category'],
    threshold: 0.3, // adjust this value to control the fuzziness of the search
  };

  const handleSearch = textSearch => {
    setSearch(textSearch);
    const fuse = new Fuse(dataTimKiem, options);
    const filteredItems = fuse.search(textSearch);
    console.log("filteredItems", filteredItems)
    setFilteredData(filteredItems);
  };

  return (
    <View style={styles.container}>
      {/* find, arrow back */}
      <LinearGradient
        colors={[LINEAR_1, LINEAR_2, LINEAR_3]}
        style={styles.findAndArrowBackContainer}>
        <TouchableOpacity style={styles.arrowBack}>
          <Icon name={'arrow-left'} size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={'black'}
            style={styles.input}
            color={'black'}
            placeholder="Tìm kiếm..."
            value={search}
            onChangeText={text => handleSearch(text)}
          />

          {/* Find */}
          <TouchableOpacity>
            <Icon
              name={'magnifying-glass'}
              size={20}
              color="gray"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Danh sach da tim kiem, top san pham, san pham moi ra mat */}
      {search ? (
        <FlatList
          data={filteredData}
          renderItem={renderTimKiem}
          keyExtractor={item => item.item.id.toString()}
        />
      ) : (
        <View>
          {/* TIm kiem gan day */}
          <View style={styles.danhSachDaTimKiemContainer}>
            <FlatList
              data={dataLichSuTimKiem}
              renderItem={renderLichSuTimKiem}
              keyExtractor={item => item.id.toString()}
            />
          </View>

          {/* separate line */}
          <View style={styles.separateLine} />

          {/* Mua nhieu nhat */}
          <View>
            <Text style={styles.textTopBanChay}>Top bán chạy</Text>
            <View
              style={{
                marginLeft: 10,
              }}>
              <FlatList
                numColumns={2}
                data={dataMostSold}
                renderItem={renderMuaNhieuNhat}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>

          {/* San pham moi */}
          <View>
            <Text style={styles.textSanPhamMoi}>Sản phẩm mới</Text>
            <View
              style={{
                marginLeft: 10,
              }}>
              <FlatList
                numColumns={2}
                data={dataMostSold}
                renderItem={renderSanPhamMoi}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  findAndArrowBackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: HEADER_COLOR,
  },
  arrowBack: {
    padding: 5,
    paddingRight: 15,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
    height: 40,
  },
  input: {
    flex: 1,
    padding: 5,
    // backgroundColor:'blue'
  },
  icon: {
    marginRight: 10,
  },
  timKiemGanDayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  timKiemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textLichSuTimKiem: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    color: '#6E6E6E',
  },
  danhSachDaTimKiemContainer: {
    marginLeft: 10,
  },
  separateLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  imageSanPhamMuaNhieuNhat: {
    width: 50,
    height: 50,
  },
  hinhAnhVaThongTinMuaNhieuNhat: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // paddingHorizontal: 10,
    marginVertical: 7,
    marginRight: 10,
    width: '47%',
    borderRadius: 10,
    backgroundColor: '#FFECD7',
  },
  soSaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textTenSanPhamMuaNhieuNhat: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  textStar: {
    fontSize: 13,
    fontWeight: '400',
    color: '#6E6E6E',
  },
  textTopBanChay: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginVertical: 10,
    marginLeft: 10,
  },
  textSanPhamMoi: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 10,
  },
  top1Container: {
    position: 'absolute',
    bottom: 2,
    right: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTop1: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginRight: 2,
    fontStyle: 'italic',
  },
  thongTinSanPhamMuaNhieuConTainer: {
    marginLeft: 7,
    width: '65%',
  },
});
