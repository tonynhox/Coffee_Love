import {StyleSheet} from 'react-native';

export const myAddressStyle = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 12,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  defaultContainer: {
    width: 65,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 0.7,
    borderColor: '#9F580A',
    marginTop: 7,
  },
  addAddressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9F580A',
    borderWidth: 0.8,
    width: '90%',
    height: 50,
    bottom: 20,
    backgroundColor: 'white',
  },
  containerButtonChecked: {
    width: '7%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerButtonChange: {
    width: '9%',
    marginLeft: 5,
  },
  containerAddress: {
    // width:'87%',
    flex: 1,
    marginLeft: 10,
  },
  nameAndPhoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkedButtonContainer: {
    marginTop: 7,
  },
  changeButtonContainer: {
    marginTop: 7,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fcf9f6',
  },
  textName: {
    fontWeight: '400',
    fontSize: 15,
    color: 'black',
  },
  textDefault: {
    fontWeight: '400',
    fontSize: 13,
    color: '#9F580A',
  },
  textPhone: {
    fontWeight: '400',
    fontSize: 14,
    color: '#575656',
    lineHeight: 23,
  },
  textAddress: {
    fontWeight: '400',
    fontSize: 13,
    color: '#575656',
  },
  listAddressContainer: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textListAddress: {
    fontWeight: '500',
    fontSize: 15,
    color: 'black',
    lineHeight: 23,
    marginTop: 10,
    marginBottom: 10,
  },
  textAddAddress: {
    fontWeight: '500',
    fontSize: 17,
    color: '#9F580A',
    lineHeight: 23,
    marginLeft: 10,
  },
  textChange: {
    fontWeight: '400',
    fontSize: 15,
    color: '#9F580A',
    lineHeight: 23,
  },
});
