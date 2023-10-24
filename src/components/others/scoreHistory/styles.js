import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container2:{
    // margin: 15,
    
  },
  titleContainer: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
    padding: 15,
  },
  cardScore:{
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
  },
  datetimetxt: {
    fontSize: 15,
    color: '#A9A9A9',
    fontWeight: '300',
  },
  txtname:{
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  score: {
    fontSize: 15,
    color: '#00FF00',
    fontWeight: '700',
    alignSelf: 'center',
  },
});
