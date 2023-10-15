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
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';
import {styles} from './styles';

const Payment = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/card.jpg')}
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

