import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {detailStyle} from './styles/detailStyle';

const Detail = () => {
  return (
    <View style={detailStyle.container}>
      {/* HÌnh ảnh, tên, thể loại view */}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={detailStyle.imageSanPham}
          source={require('../../../assets/images/americano.png')}
        />
        <Text style={detailStyle.textSanPham}>Americano Coffee</Text>
        {/* The Loai */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text style={detailStyle.textDanhMuc}>Nước nong</Text>
          <Text style={detailStyle.textDanhMuc}>Caffee</Text>
        </View>
      </View>

      {/* So luong view */}
      <View style={detailStyle.soLuongContainer}>
        <Text style={detailStyle.textSoLuong}>So luong: </Text>

        {/* + - view */}
        <View style={detailStyle.twoButtonsSoLuongContainer}>
          <Text>+</Text>
          <View style={detailStyle.soLuongSoContainer}>
            <Text style={detailStyle.textSoLuongSo}>1</Text>
          </View>
          <Text>-</Text>
        </View>
      </View>

      {/* Size view */}
      <View style={detailStyle.soLuongContainer}>
        <Text style={detailStyle.textSoLuong}>Size: </Text>
      </View>

      {/* 3 size view */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '98%',
        }}>
        <TouchableOpacity style={detailStyle.buttonChonSizeSelected}>
          <Text style={detailStyle.textSizeButtonSelected}>Regular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={detailStyle.buttonChonSize}>
          <Text style={detailStyle.textSizeButton}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={detailStyle.buttonChonSize}>
          <Text style={detailStyle.textSizeButton}>Large</Text>
        </TouchableOpacity>
      </View>

      {/* SeparateLine */}
      <View style={detailStyle.separator}></View>

      {/* Location */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '70%',
          marginBottom: 20,
        }}>
        <Image source={require('../../../assets/images/location.png')} />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Text style={detailStyle.textHeaderLocation}>Singapore</Text>
          <Text style={detailStyle.textLocation}>Quan1, TpSAIGON</Text>
        </View>
      </View>

      {/* THoi gian */}
      <View
        style={{flexDirection: 'row', justifyContent: 'center', width: '70%'}}>
        <Image source={require('../../../assets/images/location.png')} />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Text style={detailStyle.textHeaderLocation}>30 phut</Text>
          <Text style={detailStyle.textLocation}>Thoi gian giao han</Text>
        </View>
      </View>

      <View style={detailStyle.footerContainer}>
        {/* Gia View */}
        <View style={detailStyle.buttonGia}>
          <Text style={detailStyle.textButtonGia}>Gia: 70.0000 VND</Text>
        </View>

        {/* 2 button mua va them vao gio hang */}
        <View style={detailStyle.twoButtonBuyAndAddCartContainer}>
          <View style={detailStyle.buttonMuaNgay}>
            <Text style={detailStyle.textButtonGia}>Mua ngay</Text>
          </View>
          <View style={detailStyle.buttonMuaNgay}>
            <Text style={detailStyle.textButtonGia}>Them vao gio hang</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
