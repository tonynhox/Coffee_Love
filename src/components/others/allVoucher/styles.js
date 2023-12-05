import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const styles = StyleSheet.create({
  txtTitle: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  centeredText: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgView: {
    marginLeft: 5,
    paddingVertical: 10,
    flex:1,
    // justifyContent: 'space-around',
  },
  txtB: {
    fontSize: 12,
    color: '#000',
    fontWeight: '300',
    width: 200,
    flexWrap: 'wrap',
  },
  txt: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
    flexWrap: 'wrap',
    // paddingBottom: 10,
  },
  txtTitleFL: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    // marginBottom: 6,
    // marginTop: 5,
  },
  cardFL: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  img: {
    height: 100,
    resizeMode: 'contain',
    width: 90,
    marginLeft: -6,
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  giftIcon: {
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  hetHanContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'rgba(246, 89, 9, 0.9)',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 7,
  },
  textHetHan:{
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
