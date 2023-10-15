import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';

export const addAddressStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'#fcf9f6',
    flexDirection: 'column',
    alignItems: 'center',
  },

  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    marginTop: 6,
  },
  textThongTin: {
    fontWeight: '400',
    fontSize: 15,
    color: 'black',
    marginBottom: 3,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'blue',
  },
  defaultLocationContainer:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 20,

  },
  textAddAddress: {
    fontWeight: '500',
    fontSize: 17,
    color: '#9F580A',
    lineHeight: 23,
    marginLeft: 10,
  },
  addAddressContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9F580A',
    borderWidth: 1,
    width: '90%',
    height: 50,
    bottom: 20,
    backgroundColor: 'white',
    
  },
});
