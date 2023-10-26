import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  cardItemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtCategory: {
    color: '#000',
    fontWeight: '300',
    paddingTop: 2,
    fontSize: 13,
  },
  CardItemMid: {
    marginTop: 1,
  },
  txtTitle: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
  },
  cardBottom: {
    padding: 8,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  imgProduct: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardImg: {
    width: '100%',
    height: '50%',
  },
  cardProduct: {
    marginVertical: 12,
    height: 195,
    width: 170,
    // marginHorizontal:24,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.51,
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
  
});
