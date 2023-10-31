import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import { setIDSanPham, setOpenBottomSheet } from '../../../redux/reducers/slices/utilSlice';

const CategoriesText = ({openBottomMuaHang}) => {
  const dispatch = useDispatch();
  const bigData = useSelector(state => state.categories.data);

  //data ảo để chèn vào flatlist
  const trashData = [-1, 0];
  //gộp data ảo và data thật
  const customBigData = [...trashData, ...bigData];
  const [firstFlatListItems, setFirstFlatListItems] = useState(8);
  const ref = useRef(null);
  const navigation = useNavigation();
  const [index, setIndex] = useState(-1);

  //scoll tới vị trí category được chọn +2 vì có 2 item ảo
  useEffect(() => {
    if (index != -1)
      ref.current.scrollToIndex({animated: false, index: index + 2});
  }, [index]);

  const handleNavigate = id => {
    navigation.navigate('ProductDetail', {id});
  };

  const renderItem = (item, index) => {
    const {ten_loai_san_pham} = item;

    if (index === 7 || ten_loai_san_pham === 'Xem Them') {
      return (
        <TouchableOpacity
          style={Styles.card}
          onPress={() => {
            setFirstFlatListItems(firstFlatListItems + 8);
          }}>
          <View style={[Styles.imgCard]}></View>
          <Text numberOfLines={2} style={Styles.nameCard}>
            Xem Them
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
              uri: 'https://www.thegioiphache.com/uploads/d/f/q/H/4/Gsztv_ly-thuy-tinh-ocean-caffe-cappuccino-p02441-p02471-1.png.webp',
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
        <View key={ten_loai_san_pham}>
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
          onPress={() => {
            dispatch(setIDSanPham(item._id))
            dispatch(setOpenBottomSheet(true))
          }
            // openBottomMuaHang({id: item._id})


          }
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            borderRadius: 100,
            backgroundColor: '#C67C4E',
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
            {size[1]?.gia}đ
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      onScrollToIndexFailed={info => {
        const wait = new Promise(resolve => setTimeout(resolve, 500));
        wait.then(() => {
          ref.current?.scrollToIndex({index: info.index, animated: true});
        });
      }}
      ref={ref}
      style={Styles.container}
      data={customBigData}
      renderItem={({item, index}) => renderCategory(item, index)}
      keyExtractor={(item, index) => index.toString()}
    />
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
    marginHorizontal: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
});
