import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 7,
    backgroundColor: '#FFFFF',
    // elevation: 1,
    // borderRadius: 10,
    // borderWidth: 0.5,
    borderColor: 'black',
  },
  itemContainerRead:{
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 7,
    backgroundColor: 'rgba(0,0,0,0.1)',
    // elevation: 1,
    // borderRadius: 10,
    // borderWidth: 0.5,
    borderColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navhd: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  v: {
    marginTop: 20,
  },
  it: {
    // marginTop: 12,
    width: '100%',
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    // backgroundColor: '#fff',
  },
  vtit: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  vt: {
    margin: 10,
  },
  imgit: {
    width: 60,
    height: 70,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  t: {
    color: '#000',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5
  },
  tRead:{
    color: 'rgba(0,0,0,0.5)',
    fontSize: 13,
    fontWeight: '300',
    marginTop: 5
  
  },
  textTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  textTitleRead: {
    fontSize: 15,
    fontWeight: '300',
    color: 'rgba(0,0,0,0.5)',
  },
  contentContainer: {
    marginLeft: 10,
    width: '80%',
  },
});
