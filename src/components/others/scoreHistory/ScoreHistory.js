import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Header from '../../../utils/Header';


const ScoreHistory = () => {

  const historyScore = useSelector(state => state.historyScores.historyScore);
  // console.log("historyScore: ", historyScore);

  // const date = (item) =>{
  //   // const Date = item.ngay_doi;
  //   const isValid = ;
  //   return isValid;
  // }


  const renderItem = item => {
    const {ten_doi_diem, ngay_doi, so_diem} = item.item;
    return (
      <View style={styles.cardScore}>
        <View>
          <Text style={styles.datetimetxt}>{moment.utc(ngay_doi).format('HH:mm - L')}</Text>
          <Text style={styles.txtname}>{ten_doi_diem}</Text>
        </View>
        <Text style={
          [styles.score,{ color: so_diem < 0 ? '#e80000' : '#00d800' }]
          }>{so_diem}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Header
          headerText="Lịch sử đổi điểm"
          containerStyle={{
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
          }}
          rightComponent={
            true
          }
        />
        <FlatList
          data={[...historyScore].reverse()}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
};

export default ScoreHistory;

