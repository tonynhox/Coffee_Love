import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';

export const editProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent:'center',
    alignItems: 'center',
    margin: 5,
  },
  imageProfile: {
    width: 230,
    height: 200,
    marginVertical: 40,
  },
  inputContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: BACKGROUND_BUTTON_COLOR,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1.5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'blue',
  },
  textLableInput: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  textInputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  buttonSaveProfile: {
    width: '95%',
    height: 46,
    backgroundColor: BACKGROUND_BUTTON_COLOR,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    // position: 'absolute',
    bottom: 10,
  },
  textSaveProfile: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'white',
  },
});
