import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BACKGROUND_BUTTON_COLOR} from '../../product/contanst';

const Payment = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/card.jpg')}
        style={styles.image}>
        <View style={styles.cardContainer}>
          {/* Credit card */}
          <View style={styles.creditCardContainer}>
            <Text style={styles.text}>Credit Card</Text>
            <Icon name="wifi" size={25} color="white" style={styles.iconWifi} />
          </View>
          <View style={styles.iconCardContainer}>
            <Icon name="credit-card" size={25} color="black" />
          </View>

          {/* card number */}
          <View style={styles.cardNumberContainer}>
            <Text style={styles.textCardNumber}>**** **** **** 1234</Text>
          </View>

          {/* card name */}
          <View style={styles.nameAndValidContainer}>
            <Text style={styles.text}>Nguyen Van A</Text>
            {/* Valid thru */}
            <View>
              <Text style={styles.textValid}>Valid Thru</Text>
              <Text style={styles.text}>08/26</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.thongTinTheContainer}>
        <Text style={styles.textSoThe}>Số thẻ</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="1231 - 2312 - 3123 - 1231 "
            placeholderTextColor="#999"
          />
          <Icon name="credit-card" size={20} color={BACKGROUND_BUTTON_COLOR} />
        </View>

        {/* Ngay ket thuc*/}

        <Text style={styles.textSoThe}>Ngày kết thúc</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="1231 - 2312 - 3123 - 1231 "
            placeholderTextColor="#999"
          />
          <Icon name="calendar-days" size={20} color={BACKGROUND_BUTTON_COLOR} />
        </View>

        {/* Valid thru */}
        <Text style={styles.textSoThe}>CVV</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="1231 - 2312 - 3123 - 1231 "
            placeholderTextColor="#999"
          />
          <Icon name="shield" size={20} color={BACKGROUND_BUTTON_COLOR} />
        </View>
      </View>

      <TouchableOpacity style={styles.addAddressContainer}>
        <Text style={styles.textAddAddress}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
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
