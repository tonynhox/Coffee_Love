import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const AllCore = () => {
  const RenderItem2 = ({item2}) => {
    return (
      <View style={styles.cardFL}>
        <View>
          <Image
            style={styles.img}
            source={require('../../../assets/images/mochi.jpg')}
          />
          <Text style={styles.centeredText}>Coffee{'\n'}Love</Text>
        </View>
        <View style={styles.imgView}>
          <Text style={styles.txtTitleFL}>Bánh mochi</Text>
          <Text style={styles.txtB}>Miễn phí 1 bánh mochi bất kỳ </Text>
          <View style={styles.bean}>
            <Text style={styles.txtB2}> 200</Text>
            <Text style={styles.txt}>Điểm</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={RenderItem2}
      keyExtractor={item2 => item2.id}
    />
  );
};

export default AllCore;
var data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
