import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';
import moment from 'moment';

const ScoreHistory = () => {

  const historyScore = useSelector(state => state.historyScores.historyScore);
  // console.log("historyScore: ", historyScore);

  const date = (item) =>{
    const Date = item.ngay_doi;
    const isValid = moment(Date).format('MMMM Do YYYY, h:mm:ss a');
    return isValid;
  }


  const renderItem = item => {
    const {ten_doi_diem, ngay_doi, so_diem} = item.item;
    return (
      <View style={styles.cardScore}>
        <View>
          <Text style={styles.datetimetxt}>{date(item)}</Text>
          <Text style={styles.txtname}>{ten_doi_diem}</Text>
        </View>
        <Text style={styles.score}>{so_diem}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titleContainer}>ScoreHistory</Text>
        <FlatList
          data={historyScore}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
};

export default ScoreHistory;
var data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
