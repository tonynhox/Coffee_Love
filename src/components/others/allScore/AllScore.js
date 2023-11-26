import {Text, View, Image, FlatList, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {getChangeScoreFetch} from '../../../redux/reducers/slices/scoreSlide';
import Header from '../../../utils/Header';

const AllScore = () => {
  const data = useSelector(state => state.scores.score);
  // console.log('data score: ', data);
  const isLoading = useSelector(state => state.scores.isLoading);

  const id = useSelector(state => state.users.user.id_user);

  const dispatch = useDispatch();

  const handleChangeScore = item => {
    const {diem, _id, ten_voucher, gia_tri, ngay_ket_thuc} = item.item;
    dispatch(
      getChangeScoreFetch({
        id_user: id,
        so_diem: diem,
        id_voucher: _id,
        ten_voucher: ten_voucher,
        gia_tri: gia_tri,
        ngay_ket_thuc: ngay_ket_thuc,
      }),
    );
  };

  const renderItem = item => {
    const {ten_voucher, ma_voucher, diem} = item.item;

    return (
      <TouchableOpacity
        style={styles.cardProduct}
        onPress={() => {
          Alert.alert(`${ten_voucher}`, `Bạn thật sự muốn đổi?`, [
            {text: 'Hủy'},
            {text: 'Đồng ý', onPress: () => handleChangeScore(item)},

          ]);
        }}>
        <View style={styles.cardImg}>
          <Image
            style={styles.imgProduct}
            source={require('../../../assets/images/mochi.jpg')}
          />
          <Text style={styles.centeredText}>Coffee{'\n'}Love</Text>
        </View>
        <View style={styles.cardBottom}>
          <View style={styles.CardItemMid}>
            <Text style={styles.txtTitle}>{ten_voucher}</Text>
            <Text style={styles.txtCategory}>{ma_voucher}</Text>
          </View>
          <View style={styles.cardItemBottom}>
            <Text style={[styles.txtTitle, {color: '#00FF00'}]}>{diem}</Text>
            <Text style={[styles.txtTitle, {color: '#FF8C00'}]}>Điểm</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header 
        headerText="Đổi điểm" 
        rightComponent={true}
        containerStyle={{backgroundColor: '#fff', height: 70}}
      />
      <View style={styles.container}>
        <FlatList
          data={data}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </>
  );
};

export default AllScore;
