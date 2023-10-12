import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import React, { useEffect, useState } from 'react';

const Categories = props => {
  //   const { navigation } = props;
  //   const dispatch = useDispatch();
  //   const scrollViewRef = React.useRef(null);
  //   // let dataCategory;
  //   // dataCategory=useSelector(state => state.dataCategoryMainShop.data)
  //   const dataCategory = useSelector(showItemMatchCategory);

  //   // const dataCategory = useSelector(state => state.dataCategoryMainShop.data);

  //   // console.log('hi',useSelector(state=> state.filter.category))
  //   const [search, setSearch] = useState('');

  //   // useEffect(() => {
  //   //   dispatch(fetchData());

  //   // }, [fetchData]);
    
  //   // useEffect(() => {
  //   // }, [search.length>1]);
  //   // if(search.length>0)
  //   //   dispatch(categoryFilterChange(''))



  //   useEffect(() => {
  //     dispatch(fetchCategory());
  //     dispatch(searchCategoryChange(''));
  //   }, [fetchCategory]);

  //   const handleSearch = value => {
  //     setSearch(value);
  //     dispatch(searchCategoryChange(value));
  //   };

  //   const handleCategory = id => {
  //     // dispatch(categoryFilterChange(id));
  //     dispatch(searchCategoryChange(''));
  //     setSearch('')

  //     dataCategory.findIndex(item => {
  //         if (item._id === id) {
  //             dispatch(categoryFilterChange(id));
  //             return id;
  //         }
  //     });
  //     return 'All'
  // };

  const renderItem = ({ item }) => {
    // const item= props;
    const { name, images, background, _id } = item;
   
    return (
      <TouchableOpacity
        onPress={() => {
        handleCategory(item._id)
          navigation.navigate('Fruit')
      }}
        style={Styles.card}
      // onPress={() => navigation.navigate('Detail', {id: _id}
      //     )}
      >
        <View style={[Styles.imgCard]}>
          {/* <ImageBackground style={Styles.imgCardBackground} source={background}> */}
            <Image
              style={[Styles.imgCardBackground,{ width: 65, height: 65, resizeMode: 'center' }]}
              source={{ uri: 'https://www.thegioiphache.com/uploads/d/f/q/H/4/Gsztv_ly-thuy-tinh-ocean-caffe-cappuccino-p02441-p02471-1.png.webp' }}></Image>
          {/* </ImageBackground> */}
        </View>

        <Text numberOfLines={2} style={Styles.nameCard}>
          
          {item==8?'Xem Them':'huy ne'}
        </Text>
      </TouchableOpacity>
    );
  };



  return (
    <View style={Styles.container}>

      {/* <View style={Styles.search}>
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search"
          placeholderTextColor="rgba(109, 56, 5, 0.57)"
          style={Styles.ipSearch}></TextInput>
        <Image
          style={Styles.imgSearch}
          source={require('../../../../media/images/icSearch.png')}
        />
      </View> */}

      <FlatList
        // ref={scrollViewRef}
        data={[1,2,3,4,5,6,7,8]}
        numColumns={4}
        renderItem={renderItem} //gọi từ biến trên
        keyExtractor={item => item} //số không trùng
        showsVerticalScrollIndicator={false}
        horizontal={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

export default Categories;
const Styles = StyleSheet.create({
  listCategory: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
    // marginHorizontal: 7,
    color: '#6D3805',
  },
  nameCard: {
    color: '#6D3805',
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
  },
  imgCardItem: {},

  imgCardBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius:60
  },

  imgCard: {},
  card: {
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  listCate: {},

  imgSearch: {
    position: 'absolute',
    width: 19.92,
    height: 18,
    marginVertical: 15,
    marginLeft: 14.38,
  },
  ipSearch: {
    position: 'absolute',
    backgroundColor: '#F3F3F3',
    borderRadius: 7,
    width: '100%',
    color: 'rgba(109, 56, 5, 0.57)',
    paddingLeft: 42.05,
  },
  search: {
    marginTop: 18,
    position: 'relative',
    height: 48,
  },

  icLocation: {
    width: 15.88,
    height: 20,
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28.8,
    letterSpacing: -0.17,
    color: '#FF5E00',
    marginLeft: 8.62,
  },

  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 29,
    width: '100%',
    // marginTop: 30,
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
});

// var data = [
//   {
//     _id: '1',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/violet.png'),
//     image: require('../../../../media/images/fruits.png'),
//   },
//   {
//     _id: '2',
//     _name: 'Vegetable',
//     _background: require('../../../../media/images/orange.png'),
//     image: require('../../../../media/images/vegetables.png'),
//   },
//   {
//     _id: '3',
//     _name: 'Meat',
//     _background: require('../../../../media/images/red.png'),
//     image: require('../../../../media/images/meat.png'),
//   },
//   {
//     _id: '4',
//     _name: 'Fish',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '5',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '6',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '7',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '8',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '9',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '10',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '11',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '12',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '13',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '14',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '15',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '16',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '17',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '18',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '19',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '20',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '21',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '22',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '23',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '24',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
//   {
//     _id: '25',
//     _name: 'Fruits',
//     _background: require('../../../../media/images/pink.png'),
//     image: require('../../../../media/images/fish.png'),
//   },
// ];
