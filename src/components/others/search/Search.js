import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import {
  KEY_SEARCH_HISTORY,
  LINEAR_1,
  LINEAR_2,
  LINEAR_3,
  statusBarHeight,
} from '../../../utils/contanst';
import Fuse from 'fuse.js';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveValueToStorage} from '../../../utils/saveSearchHistoryToStorage';
import {useSelector, useDispatch} from 'react-redux';
import {lamTronSo} from '../../../utils/lamTronSo';
import {getSearchFetch} from '../../../redux/reducers/slices/searchSlice';

const Search = () => {
  const navigation = useNavigation();
  const allProducts = useSelector(state => state.products.data);

  useEffect(() => {
    getValues();
  }, [navigation]);

  const [dataFromStorage, setDataFromStorage] = useState([]);

  // Retrieve the array of values
  const getValues = async () => {
    let key = KEY_SEARCH_HISTORY;

    try {
      const data = await AsyncStorage.getItem(key);
      if (data) {
        const dataArray = JSON.parse(data);
        const newestValues = dataArray.slice(-4);
        return setDataFromStorage(newestValues.reverse());
      } else {
        // No values stored under the key
        return setDataFromStorage([]);
      }
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
      return setDataFromStorage([]);
    }
  };

  const [search, setSearch] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(allProducts);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const dispatch = useDispatch();

  const handleChonSanPham = ({item}) => {
    saveValueToStorage(KEY_SEARCH_HISTORY, {item: item});
    setSearch(item);

    const normalizedSearchTerm = item
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/\s+/g, ''); // Remove spaces

    dispatch(getSearchFetch({search: normalizedSearchTerm}));
    navigation.navigate('SearchSuccess', {search: item});
  };

  const handleTextInputFocused = () => {
    setIsSearchFocused(true);
  };

  const dataTop = useSelector(state => state.topOrders.data);
  const dataTopOr = dataTop.slice(0, 4);
  const renderMuaNhieuNhat = ({item}) => {
    return (
      /* hinh anh ten san pham, sao */
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetail', {id: item._id})}
        style={styles.hinhAnhVaThongTinMuaNhieuNhat}>
        <Image
          style={styles.imageSanPhamMuaNhieuNhat}
          source={{uri: item.hinh_anh_sp[0].hinh_anh_sp}}
        />
        <View style={styles.thongTinSanPhamMuaNhieuConTainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.textTenSanPhamMuaNhieuNhat}>
            {item.ten_san_pham}
          </Text>
          <View style={styles.soSaoContainer}>
            <Text style={styles.textStar}> {lamTronSo(item.tong_sao)}</Text>
            <Icon name="star" solid size={11} color={LINEAR_3} />
          </View>
        </View>

        <View style={styles.top1Container}>
          <Text style={styles.textTop1}>1</Text>
          <Icon name="crown" solid size={11} color={LINEAR_3} />
        </View>
      </TouchableOpacity>
    );
  };

  const dataPd = useSelector(state => state.products.data);
  const dataSPM = dataPd.slice(0, 4);
  const renderSanPhamMoi = ({item}) => {
    return (
      /* hinh anh ten san pham, sao */
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetail', {id: item._id})}
        style={styles.hinhAnhVaThongTinMuaNhieuNhat}>
        <Image
          style={styles.imageSanPhamMuaNhieuNhat}
          source={{uri: item.hinh_anh_sp[0].hinh_anh_sp}}
        />
        <View style={styles.thongTinSanPhamMuaNhieuConTainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.textTenSanPhamMuaNhieuNhat}>
            {item.ten_san_pham}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderLichSuTimKiem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.timKiemGanDayContainer}
        onPress={() => handleChonSanPham({item: item})}>
        <Icon name={'clock-rotate-left'} size={18} color="gray" />
        <Text style={styles.textLichSuTimKiem}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderTimKiem = ({item}) => {
    // nếu search rỗng thì hàm tìm kiếm (handleSearch) vẫn chưa chạy
    // lúc này item.text chính là name vì giá trị của mảng hint từ component cha truyền vào
    // chỉ có field là một object giống như này:
    // {"category": "food", "id": 40, "text": "french toast"}
    // nên item.text chính là name
    // *****
    // nếu search có giá trị (khác rỗng) thì hàm tìm kiếm (handleSearch) đã chạy
    // lúc này mảng đã đổi field, item bây giờ bao gồm 2 field item và refIndex
    // goi item.item de lay gia tri name

    const name = item.ten_san_pham;

    return (
      <TouchableOpacity
        style={styles.timKiemContainer}
        onPress={() => {
          handleChonSanPham({item: name});
        }}>
        <Icon name={'magnifying-glass'} size={18} color="gray" />
        <Text style={styles.textLichSuTimKiem}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const options = {
    keys: ['ten_san_pham', 'loai_san_pham.ten_loai_san_pham'],
    threshold: 0.2, // Adjust the threshold based on your desired level of matching
  };

  const handleSearch = textSearch => {
    if (textSearch == '') {
      setSearch(textSearch);
      setFilteredData(allProducts);
      return;
    }
    const normalizedSearchTerm = textSearch
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/\s+/g, ''); // Remove spaces

    const normalizedData = allProducts.map(item => {
      const normalizedItem = {...item};
      normalizedItem.ten_san_pham = item.ten_san_pham
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/\s+/g, ''); // Remove spaces
      if (item.loai_san_pham.length > 0) {
        normalizedItem.loai_san_pham[0].ten_loai_san_pham =
          item.loai_san_pham[0]?.ten_loai_san_pham
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
            .replace(/\s+/g, ''); // Remove spaces
      }
      return normalizedItem;
    });

    setSearch(textSearch);
    const fuse = new Fuse(normalizedData, options);
    const filteredItems = fuse.search(normalizedSearchTerm);
    const searchItems = filteredItems.map(item => item.item);

    const matchItemArray = allProducts.filter(value =>
      searchItems.map(item => item._id).includes(value._id),
    );

    setFilteredData(matchItemArray);
  };

  return (
    <View style={styles.container}>
      {/* find, arrow back */}
      <LinearGradient
        colors={['#CC9F68', '#CC9F68']}
        style={styles.findAndArrowBackContainer}>
        <TouchableOpacity
          style={styles.arrowBack}
          onPress={() => navigation.goBack()}>
          <Icon name={'arrow-left'} size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={'#CC9F68'}
            style={styles.input}
            color={'white'}
            placeholder="Tìm kiếm..."
            value={search}
            onFocus={() => {
              handleTextInputFocused();
            }}
            onChangeText={text => handleSearch(text)}
          />

          {/* Find */}
          <TouchableOpacity onPress={() => handleChonSanPham({item: search})}>
            <Icon
              name={'magnifying-glass'}
              size={20}
              color="#CC9F68"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Danh sach da tim kiem, top san pham, san pham moi ra mat */}
      {isSearchFocused ? (
        <FlatList
          data={filteredData}
          renderItem={renderTimKiem}
          keyExtractor={(item, index) => item._id.toString()}
        />
      ) : (
        <View>
          {dataFromStorage.length == 0 || (
            // Tim kiem gan day
            <View style={styles.danhSachDaTimKiemContainer}>
              {/* <FlatList
              data={dataLichSuTimKiem}
              renderItem={renderLichSuTimKiem}
              keyExtractor={item => item.id.toString()}
            /> */}
              {dataFromStorage.map((item, index) => {
                return (
                  <View key={index}>
                    {renderLichSuTimKiem({item: item.item})}
                  </View>
                );
              })}
            </View>
          )}

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
                data={dataTopOr}
                renderItem={renderMuaNhieuNhat}
                keyExtractor={item => item._id.toString()}
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
                data={dataSPM}
                renderItem={renderSanPhamMoi}
                keyExtractor={item => item._id.toString()}
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
    paddingTop: statusBarHeight,
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
    // borderWidth: 1,
    // borderColor: 'white',
    backgroundColor: '#7E4F15',
    borderRadius: 8,
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
    color: 'black',
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
