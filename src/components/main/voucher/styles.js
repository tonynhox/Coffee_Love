import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  txtall: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#FAFAD2',
    color: '#FF4500',
    fontSize: 15,
    paddingVertical: 4,
    fontWeight: '400',
  },
  fistCard: {
    height: '25%',
    backgroundColor: '#FF8C00',
    padding: 24,
  },
  txtfc: {
    fontWeight: '400',
    color: '#fff',
  },
  txtfc2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btnvc: {
    height: 30,
    width: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    padding: 4,
  },
  txtfc3: {
    color: '#FF4500',
    fontSize: 15,
  },
  cardRowfc: {
    marginTop: 15,
    backgroundColor: '#fff',
    height: 150,
    borderRadius: 20,
  },
  barcode: {
    alignSelf: 'center',
    fontSize: 110,
    color: '#000',
    fontWeight: '300',
  },
  txtfc4: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#000',
  },
  bean: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  txtB2: {
    fontSize: 12,
    color: '#00FF00',
    fontWeight: '300',
    borderRadius: 5,
    borderColor: '#00FF66',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  card: {
    margin: 24,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  cardExtention: {
    backgroundColor: '#ffff',
    padding: 16,
    borderRadius: 8,
    flexBasis: '49%',
    marginBottom: 8,
    marginRight: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: 22,
    color: '#000',
    marginRight: 12,
  },
  txtExtention: {
    fontSize: 13.5,
    marginTop: 4,
    color: '#000',
    fontWeight: '500',
  },

  flatList: {
    // margin:10,
    // backgroundColor:'#F1F1F1'
  },

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
    marginLeft: 14,
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
    fontWeight: '300',
    flexWrap: 'wrap',
  },
  txtTitleFL: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
    marginTop: 5,
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
    height: 80,
    resizeMode: 'contain',
    width: 90,
    marginLeft: -6,
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
});
