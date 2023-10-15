import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemNote = () => {
  return (
    <View style={styles.container}>
        <Text style={[styles.txtTitle,{marginBottom:6,fontWeight:'400'}]}>Ghi chú</Text>
        <View style={styles.txtInput}>
          <Text style={{direction:'inherit',fontSize:12}}> Huy dep trai </Text>
        </View>


    </View>
  )
}

export default ItemNote
