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
    color: 'gray',
    fontWeight: '300',
  },
  txtname:{
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  score: {
    fontSize: 14,
    color: '#00d800',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
