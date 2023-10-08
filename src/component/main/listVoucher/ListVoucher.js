import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { useSelector } from 'react-redux'
const ListVoucher = () => {

  // const data =  useSelector(state => state.utils.data)

  const RenderItem = ({item}) => {
      return <View style={styles.card}>
        <View>
          <Image style={styles.img} source={require('../../../assets/images/bg_voucher.png')} />
          <Text style={styles.centeredText}>Coffee{'\n'}Love</Text>
        </View>
        <View style={styles.imgView}>
            <Text style={styles.txtTitle} >Miễn phí giao hàng</Text>
            <Text style={styles.txt}>Sử dụng cho đơn từ 100K </Text>
            <Text style={styles.txt}>Sử dụng đến 11/10/2023</Text>
        </View>
      </View>
  }


  return (
    <View>
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={RenderItem}
                keyExtractor={item => item.id}

            />

    </View>
  )
}

export default ListVoucher

var data= [
  {id:1},{id:2},{id:3},{id:4}
]
