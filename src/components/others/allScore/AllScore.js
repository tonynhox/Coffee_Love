import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';

const AllCore = () => {

  const allScore = useSelector(state => state.scores.score);
  console.log("All Score: ", allScore);
  const RenderItem = ({item}) => {
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
          <Text style={styles.txtTitleFL}>{item.ten_voucher}</Text>
          <Text style={styles.txtB}>{item.mo_ta}</Text>
          <View style={styles.bean}>
            <Text style={styles.txtB2}>{item.diem}</Text>
            <Text style={styles.txt}>Điểm</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      style={styles.container}
      data={allScore}
      renderItem={RenderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default AllCore;
var data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
