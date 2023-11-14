import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Card from './item/Card';
import { useNavigation } from '@react-navigation/native';

const ListVoucherNotLG = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientContainer}
        start={{x: 0, y: 0}}
        end={{x: 0.7, y: 1}}
        colors={['#ff8e36', '#ff9644', '#ff7f1b', '#e66500']}>
        <Text style={styles.gradientText}>
          Sử dụng app tích điểm và đổi những ưu đãi chỉ dành riêng cho thành
          viên bạn nhé!
        </Text>
        <TouchableOpacity 
            onPress={() => navigation.navigate('UserNavigation',{screen:'Login'})}
            style={styles.gradientButton}>
          <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>
          Thăng hạng dễ dàng{'\n'}Quyền lợi đa dạng & hấp dẫn
        </Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardItem}>
            <Card
              color={['#ff8e36', '#ff9644', '#ff7102', '#e66500']}
              scale={0.15}
            />
            <Text style={styles.txtCart}>Mới</Text>
          </View>
          <View style={styles.cardItem}>
            <Card color={['#ffaf51', '#5d3200']} scale={0.15} />
            <Text style={styles.txtCart}>Đồng</Text>
          </View>
          <View style={styles.cardItem}>
            <Card
              color={['#b5ccd7', '#8fb0c3', '#7da3b9', '#4c768e']}
              scale={0.15}
            />
            <Text style={styles.txtCart}>Bạc</Text>
          </View>
          <View style={styles.cardItem}>
            <Card
              color={[
                '#ffda5d',
                '#ffdc64',
                '#eeb700',
                '#eeb700',
                '#fdc400',
                '#d2a200',
              ]}
              scale={0.15}
            />
            <Text style={styles.txtCart}>Vàng</Text>
          </View>
          <View style={styles.cardItem}>
            <Card
              color={['#616161', '#525252', '#444444', '#0a0800']}
              scale={0.15}
            />
            <Text style={styles.txtCart}>Kim Cương</Text>
          </View>
        </View>
      </View>
      {/* Additional View if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  gradientContainer: {
    height: 230,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 14,
  },
  gradientText: {
    fontSize: 15,
    paddingHorizontal: 20,
    color: 'white',
    textAlign: 'center',
  },
  gradientButton: {
    marginTop: 10,
    paddingHorizontal: 65,
    paddingVertical: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  contentContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 26,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 20,
  },
  cardItem: {
    alignItems: 'center',
  },
  txtCart: {
    marginTop: 6,
    color: '#515151',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ListVoucherNotLG;
