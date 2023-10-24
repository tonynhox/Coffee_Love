import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';

const ScoreHistory = () => {

  // const doi_diem = useSelector(state => state.users.user.doi_diem);

  const renderItem = item => {
    return (
      <View style={styles.cardScore}>
        <View>
          <Text style={styles.datetimetxt}>14:39 - 23/10/2023</Text>
          <Text style={styles.txtname}>Đơn hàng #97648576490</Text>
        </View>
        <Text style={styles.score}>177</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titleContainer}>ScoreHistory</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ScoreHistory;
var data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
