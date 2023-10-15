import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Categories = () => {
  const scrollViewRef = useRef();
  const targetRef = useRef();
  const targetRef1 = useRef();

const onPressTouch = (target) => {
  if (scrollViewRef.current && target.current) {
    target.current.measure((x, y, width, height, pageX, pageY,) => {
      scrollViewRef.current.scrollTo({
        y: pageY,
        animated: true
      });
    });
  }
}

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={Styles.card}
        onPress={() => {
          onPressTouch(targetRef);
        }}
      >
        <View style={[Styles.imgCard]}>
          <Image

            style={[Styles.imgCardBackground, { width: 65, height: 65, resizeMode: 'center' }]}
            source={{
              uri:
                'https://www.thegioiphache.com/uploads/d/f/q/H/4/Gsztv_ly-thuy-tinh-ocean-caffe-cappuccino-p02441-p02471-1.png.webp',
            }}
          ></Image>
        </View>

        <Text numberOfLines={2} style={Styles.nameCard}>
          {item === 8 ? 'Xem Them' : 'huy ne'}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItemDetail = ({ item }) => {
    const {name,price} = item;
    return (
      <TouchableOpacity  
        onPress={() => {
          onPressTouch(targetRef1);
        }}
        style={{ flexDirection: 'row', marginVertical: 10, borderRadius: 4 }}>
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 0, right: 0, borderRadius: 100, backgroundColor: '#C67C4E', padding: 5 }}
        >
          <Icon name="plus" style={{ fontSize: 26, color: '#fff' }} />
        </TouchableOpacity>

        <Image
          style={{ borderRadius: 4, width: 110, height: 110, resizeMode: 'center' }}
          source={{
            uri:
              'https://www.thegioiphache.com/uploads/d/f/q/H/4/Gsztv_ly-thuy-tinh-ocean-caffe-cappuccino-p02441-p02471-1.png.webp',
          }}
        />
        <View style={{ marginHorizontal: 12, marginTop: 6 }}>
          <Text style={{ fontSize: 15, fontWeight: '500', color: '#000', marginBottom: 6 }}>{name}</Text>
          <Text style={{ fontSize: 15, fontWeight: '400', color: '#000' }}>{price}đ</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategory = ({item}) => {
    const {loaiSP,SP} = item;
    return (
      <View >
      <Text 
        ref={targetRef}
        style={{ color: '#000', fontWeight: '500', fontSize: 18 }}>{loaiSP}</Text>
      <FlatList
        scrollEnabled={false} 
        data={SP}
        renderItem={renderItemDetail}
        keyExtractor={(item,index) => index}
        showsVerticalScrollIndicator={false}
        horizontal={false}
      />
    </View>
    )
  };

  return (
    <ScrollView ref={scrollViewRef} style={Styles.container}>
      <FlatList
        scrollEnabled={false} 
        style={{ marginVertical: 16 }}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        numColumns={4}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
      <View> 
        <Text ref={targetRef1} style={{ color: '#000', fontSize: 18, fontWeight: '500' }}>Bộ sưu tập</Text>
        <View style={{ marginVertical: 16, borderRadius: 10 }}>
          <Image
            style={{ width: '100%', height: 170, borderRadius: 10 }}
            source={{
              uri:
                'https://www.thegioiphache.com/uploads/d/f/q/H/4/Gsztv_ly-thuy-tinh-ocean-caffe-cappuccino-p02441-p02471-1.png.webp',
            }}
          />
        </View>
      </View>

      <FlatList
            scrollEnabled={false} 
            style={{ marginVertical: 16 }}
            data={bigData}
            renderItem={renderCategory}
            keyExtractor={(item,index) => index}
            showsVerticalScrollIndicator={false}
            horizontal={false}
      />
      <Button title="Scroll To Section" onPress={onPressTouch} />
    </ScrollView>
  );
};

export default Categories;

const Styles = StyleSheet.create({
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


var bigData = 
[
  {
    loaiSP:'banh',
    SP:
    [
      {name:'sp1',price:100},
      {name:'sp2',price:100},
      {name:'sp2',price:100},
    ]
  },
  {
    loaiSP:'kẹo',
    SP:
    [
      {name:'sp1',price:100},
      {name:'sp2',price:120},
    ]
  },
  {
    loaiSP:'Huy',
    SP:
    [
      {name:'sp1',price:1200},
      {name:'sp2',price:1010},
    ]
  },
  {
    loaiSP:'cafe',
    SP:
    [
      {name:'sp1',price:1200},
      {name:'sp2',price:1010},
    ]
  }
]