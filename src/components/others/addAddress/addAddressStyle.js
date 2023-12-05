import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';

export const addAddressStyle = StyleSheet.create({
  container: {
    // flex: 1,
    flex:1,
    paddingHorizontal: 10,
    backgroundColor:'#f1f1f1',

  },

  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    // marginTop: 12,
  },
  textThongTin: {
    fontWeight: '500',
    fontSize: 15,
    color: 'black',
    marginBottom: 0,
  },
  input: {
    flex: 1,
    // height: 40,
    padding:4,
    color: 'black',
  },
  defaultLocationContainer:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 20,

  },
  textAddAddress: {
    fontWeight: '700',
    fontSize: 17,
    color: '#f1f1f1',
    lineHeight: 23,
    marginLeft: 10,
  },
  addAddressContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_BUTTON_COLOR,
    width: '87%',
    height: 50,
    bottom: 40,
    borderRadius: 10,
  },
});
