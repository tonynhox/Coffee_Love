import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Animated,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  setIDSanPham,
  setOpenBottomSheet,
} from '../../../redux/reducers/slices/utilSlice';
import Header from '../../../utils/Header';
import ModalAllCategories from './ModalAllCategories';
import { formatCurrency } from '../../../utils/formatCurrency';

const CategoriesText = ({openBottomMuaHang}) => {
  const [isVisible, setIsVisible] = useState(false); // Sử dụng hàm setIsVisible để đóng modal
  const dispatch = useDispatch();
  const bigData = useSelector(state => state.categories.data);
  const user = useSelector(state => state.users.user?.id_user);
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  //data ảo để chèn vào flatlist
  const trashData = [-1, 0];
  //gộp data ảo và data thật
  const customBigData = [...trashData, ...bigData];
  const [firstFlatListItems, setFirstFlatListItems] = useState(8);
  const ref = useRef(null);
  const navigation = useNavigation();
  const [index, setIndex] = useState(-1);

  const route = useRoute();
  const indexFromProduct = route?.params?.index;

  useEffect(() => {
    if (!isNaN(indexFromProduct)) {
      setTimeout(() => {
        setIndex(indexFromProduct);
      }, 1000);
    }
  }, [indexFromProduct]);

  //thay đổi tên danh mục ở header
  const [headerText, setHeaderText] = useState('Danh mục');
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const visibleIndex = viewableItems[0].item.ten_loai_san_pham;
      if (visibleIndex || index > 1) {
        setHeaderText(visibleIndex);
      } else {
        setHeaderText('Danh mục');
      }
    }
  });

  //scoll tới vị trí category được chọn +2 vì có 2 item ảo
  useEffect(() => {
    if (index != -1)
      ref.current.scrollToIndex({
        animated: true,
        index: index + 2,
        viewOffset: 10,
      });
  }, [index]);

  const handleNavigate = id => {
    navigation.navigate('ProductDetail', {id});
  };

  const renderItem = (item, index) => {
    const {ten_loai_san_pham, hinh_anh} = item;

    if (index === 7 || ten_loai_san_pham === 'Xem Them') {
      return (
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={Styles.card}>
          <View
            style={[
              Styles.imgCard,
              {borderWidth: 0.5, borderRadius: 70, borderColor: 'lightgray'},
            ]}>
            <Image
              style={[
                Styles.imgCardBackground,
                {width: 65, height: 65, resizeMode: 'center'},
              ]}
              source={{
                uri: 'https://media.istockphoto.com/id/1453921450/vi/vec-to/d%E1%BA%A5u-ch%E1%BA%A5m-l%E1%BB%ADng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-c%C3%B3-h%C3%ACnh-%E1%BA%A3nh-ph%E1%BA%A3n-chi%E1%BA%BFu-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=5Cy2Z6gk3p3IB4SITinVn3wALKv3DIHxcKkmaUYBD8s=',
              }}></Image>
          </View>
          <Text numberOfLines={2} style={Styles.nameCard}>
            Xem thêm
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={() => setIndex(index)} style={Styles.card}>
        <View style={[Styles.imgCard]}>
          <Image
            style={[
              Styles.imgCardBackground,
              {width: 65, height: 65, resizeMode: 'center'},
            ]}
            source={{
              uri: hinh_anh,
            }}></Image>
        </View>
        <Text numberOfLines={2} style={Styles.nameCard}>
          {ten_loai_san_pham}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCategory = (item, index) => {
    if (index === 0) {
      return (
        <View style={Styles.row}>
          {bigData.map((item, index) => {
            if (index < firstFlatListItems) {
              return (
                <View style={Styles.column} key={index}>
                  {renderItem(item, index)}
                </View>
              );
            }
          })}
        </View>
      );
    } else if (index === 1) {
      return (
        <View>
          <Text style={{color: '#000', fontSize: 18, fontWeight: '500'}}>
            Bộ sưu tập
          </Text>
          <View style={{marginVertical: 16, borderRadius: 10}}>
            <Image
              style={{width: '100%', height: 170, borderRadius: 10}}
              source={{
                uri: 'https://www.thegioiphache.com/uploads/d/f/q/H/4/Gsztv_ly-thuy-tinh-ocean-caffe-cappuccino-p02441-p02471-1.png.webp',
              }}
            />
          </View>
        </View>
      );
    } else {
      const {ten_loai_san_pham, san_pham} = item;

      return (
        <View style={{paddingTop: 8}} key={ten_loai_san_pham}>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 18}}>
            {ten_loai_san_pham}
          </Text>
          <View>
            {san_pham.map((item, index) => (
              <View key={index}>{renderItemDetail(item)}</View>
            ))}
          </View>
        </View>
      );
    }
  };

  const renderItemDetail = item => {
    const {ten_san_pham, size, hinh_anh_sp} = item;

    return (
      <TouchableOpacity
        style={{flexDirection: 'row', marginVertical: 10, borderRadius: 4}}
        onPress={() => handleNavigate(item._id)}>
        <TouchableOpacity
          onPress={
            () => {
              if (user) {
                dispatch(setIDSanPham(item._id));
                dispatch(setOpenBottomSheet(true));
              } else {
                navigation.navigate('UserNavigation', {screen: 'Login'});
              }
            }
            // openBottomMuaHang({id: item._id})
          }
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            borderRadius: 100,
            backgroundColor: '#df7a00',
            padding: 5,
          }}>
          <Icon name="plus" style={{fontSize: 26, color: '#fff'}} />
        </TouchableOpacity>
        <Image
          style={{
            borderRadius: 4,
            width: 110,
            height: 110,
            resizeMode: 'center',
          }}
          source={{
            uri: hinh_anh_sp[0]?.hinh_anh_sp,
          }}
        />
        <View style={{marginHorizontal: 12, marginTop: 6}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#000',
              marginBottom: 6,
            }}>
            {ten_san_pham}
          </Text>
          <Text style={{fontSize: 15, fontWeight: '400', color: '#000'}}>
            {formatCurrency(size[1]?.gia)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const scrollY = useRef(new Animated.Value(0)).current;
  const diftClamp = Animated.diffClamp(scrollY, 0, 80);
  const translateY = diftClamp.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Animated.View
        style={[
          Styles.header,
          {
            transform: [{translateY}],
            zIndex: 100,
          },
        ]}>
        <Header
          // headerText={headerText}
          rightComponent={true}
          leftComponent={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="view-grid" style={{fontSize: 18, color: '#000'}} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000',
                }}>
                {headerText}
              </Text>
            </View>
          }
          containerStyle={{
            backgroundColor: '#fff',
            borderBottomWidth: 0.6,
            borderBottomColor: '#ddd',
            position: 'absolute',
            paddingTop: StatusBar.currentHeight * 0.8,
            paddingBottom: -10,
            paddingHorizontal: 16,
            margin: 0,
            top: 0,
            left: 0,
            right: 0,
          }}
        />
      </Animated.View>
      <FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewableItemsChanged.current}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 70,
          paddingBottom: 60,
        }}
        ref={ref}
        data={customBigData}
        renderItem={({item, index}) => renderCategory(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
      <ModalAllCategories
        data={bigData}
        isVisible={isVisible}
        setIndex={setIndex}
        setIsVisible={setIsVisible}
      />
    </View>
  );
};

export default CategoriesText;

const Styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  nameCard: {
    color: '#6D3805',
    marginTop: 4,
    fontSize: 14,
    fontWeight: '400',
  },

  imgCardBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 60,
  },

  card: {
    marginVertical: 4,
    alignItems: 'center',
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: '#ffffff',
  },
});
