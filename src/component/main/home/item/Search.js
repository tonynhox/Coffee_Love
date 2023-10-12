import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import {LINEAR_1, LINEAR_2, LINEAR_3} from '../../product/contanst';

const Search = () => {
  return (
    <View style={styles.container}>
      {/* find, arrow back */}
      <LinearGradient
        colors={[LINEAR_1, LINEAR_2, LINEAR_3]}
        style={styles.findAndArrowBackContainer}>
        <TouchableOpacity style={styles.arrowBack}>
          <Icon name={'arrow-left'} size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={'black'}
            style={styles.input}
            keyboardType="phone-pad"
          />

          {/* Find */}
          <TouchableOpacity>
            <Icon
              name={'magnifying-glass'}
              size={20}
              color="gray"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* TIm kiem gan day */}
      <View style={styles.danhSachDaTimKiemContainer}>
        <View style={styles.timKiemGanDayContainer}>
          <Icon name={'clock-rotate-left'} size={18} color="gray" />
          <Text style={styles.textLichSuTimKiem}>Americano</Text>
        </View>
        <View style={styles.timKiemGanDayContainer}>
          <Icon name={'clock-rotate-left'} size={18} color="gray" />
          <Text style={styles.textLichSuTimKiem}>Americano</Text>
        </View>
        <View style={styles.timKiemGanDayContainer}>
          <Icon name={'clock-rotate-left'} size={18} color="gray" />
          <Text style={styles.textLichSuTimKiem}>Americano</Text>
        </View>
      </View>

      {/* separate line */}
      <View style={styles.separateLine} />

      {/* Mua nhieu nhat */}
      <View>
        <View>
          <Image
            style={styles.imageSanPhamMuaNhieuNhat}
            source={require('../../../../assets/images/americano.png')}
          />
          <View>

          <Text>Americano</Text>
          <View>

          <Text>4.6</Text>
          <Icon name="star" solid size={20} color={LINEAR_1} />
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  findAndArrowBackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: HEADER_COLOR,
  },
  arrowBack: {
    padding: 5,
    paddingRight: 15,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,

    flex: 1,
    height: 40,
  },
  input: {
    flex: 1,
    padding: 5,
    // backgroundColor:'blue'
  },
  icon: {
    marginRight: 10,
  },
  timKiemGanDayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textLichSuTimKiem: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
  },
  danhSachDaTimKiemContainer: {
    marginLeft: 10,
  },
  separateLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  imageSanPhamMuaNhieuNhat: {
    width: 50,
    height: 50,
  },
});
