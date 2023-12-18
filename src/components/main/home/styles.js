import {StyleSheet, Text, View,StatusBar} from 'react-native';

export const styles = StyleSheet.create({
  txtName: {
    color: 'white',
    letterSpacing: -0.2,
    fontSize: 15,
    fontWeight: '500',
  },
  txtItem: {
    color: '#000',
    fontWeight: '500',
    fontSize: 12,
    paddingTop: 2,
  },
  itemExtention: {
    alignItems: 'center',
    flexDirection: 'column',
    // marginRight:60
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  cardExtention: {
    backgroundColor: '#fff',
    // borderRadius: 10,
    // paddingVertical: 10,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    borderWidth: 0.6,
    borderColor: 'lightgray',
    marginVertical: 20,
  },
  btnLogin: {
    backgroundColor: '#df7a00',
    borderRadius: 10,
    padding: 6,
    width: '70%',
    alignItems: 'center',
  },
  cardNotUser: {
    flex: 1,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    // paddingLeft:12,
    // paddingEnd:28,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 0.6,
    borderColor: 'lightgray',
    alignItems: 'center',
  },
  cardUser: {
    flex: 1,
    height: 150,
    backgroundColor: 'rgba(252, 135, 0, 0.8)',
    borderRadius: 12,
    paddingVertical: 12,
    // paddingLeft:12,
    // paddingEnd:28,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // borderWidth:0.6,
    // borderColor:'lightgray',
    // alignItems:'center',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '80%', // tô màu 20% ở trên
    backgroundColor: '#CC9F68',
    zIndex: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  txtCategory: {
    color: '#000',
    fontWeight: '300',
    paddingTop: 2,
    fontSize: 13,
  },
  cardItemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  container: {
    flex: 1,
    // backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    // paddingTop:16,
  },

  cardProduct: {
    marginVertical: 12,
    // height: 215,
    width: 170,
    // marginHorizontal:24,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },
  imgProduct: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardImg: {
    width: '100%',
    height: 90,
  },

  rows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardItemLeft: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: 16,
    width: '70%',
  },
  cardTopOrder: {
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 2,
    paddingLeft: 12,
    paddingEnd: 28,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: 'lightgray',
  },
});
