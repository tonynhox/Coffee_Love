import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
export const styles = StyleSheet.create({
  marginTopInput: {
    marginTop: 15,
  },
  tlg: {
    color: '#844800',
    fontSize: 16,
    fontWeight: '700',
  },
  t5: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  txtlg: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    fontSize: 40,
  },

  vic: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    // paddingHorizontal: 50,
  },
  t4: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  txtbtn: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  btn: {
    width: '100%',
    backgroundColor: '#C67C4E',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  iconEyes: {
    position: 'absolute',
    top: 10,
    right: 8,
  },
  icon2: {
    fontSize: 20,
    color: '#000000',
  },
  tip1: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 30,
    textAlignVertical: 'center',
    justifyContent: 'center',
    fontSize: 16,
    paddingVertical: 0,
    paddingHorizontal: 8,
    marginTop: 6,
    marginLeft: 4,
  },
  t1: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
  },
  v3: {
    backgroundColor: '#E9C08E',
    paddingHorizontal: 50,
    paddingTop: 0,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    flex: 1,
  },
  img: {
    width: 190,
    height: 190,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#A98B67',
  },
  loading: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
