import { StyleSheet, Text, View } from 'react-native'
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';

export const styles  = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      flexDirection: 'column',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 250,
      flexDirection: 'column',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
      justifyContent: 'center',
      alignItems: 'center',
    },
    textValid: {
      fontSize: 14,
      color: 'black',
      fontWeight: 'bold',
    },
    text: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
    },
    textCardNumber: {
      fontSize: 24,
      color: 'black',
      fontWeight: 'bold',
    },
    textAddAddress: {
      fontWeight: '500',
      fontSize: 17,
      color: '#9F580A',
      lineHeight: 23,
      marginLeft: 10,
    },
    creditCardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    cardContainer: {
      padding: 20,
    },
    iconWifi: {
      // transform: [{rotate: '90deg'}],
    },
    iconCardContainer: {
      marginTop: 20,
    },
    cardNumberContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    nameAndValidContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
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
    input: {
      flex: 1,
      height: 40,
      color: 'blue',
    },
    textSoThe: {
      fontWeight: '400',
      fontSize: 15,
      color: 'black',
      // marginBottom: 3,
      marginTop: 15,
    },
    thongTinTheContainer: {
      padding: 15,
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
  