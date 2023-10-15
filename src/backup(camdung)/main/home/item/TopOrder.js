import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from '../styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopOrder = () => {
  return (
    <TouchableOpacity style={styles.cardTopOrder}>
        <View style={styles.cardItemLeft}>
            <View style={styles.rows}>
                <Icon name="star-face" style={ { fontSize: 18,color:'#FFB800' }} />
                <Text style={{color:'#000',fontWeight:'500',fontSize:14}}> 5.0</Text>
            </View>
            <Text style={{color:'#000',fontWeight:'600',fontSize:16}}>Top order</Text>
            <Text style={{color:'#000',fontWeight:'700',fontSize:18}}>Americano Coffee </Text>
            <View style={[styles.rows,{}]}>
                <Text style={{color:'#F5A646',fontWeight:'500',}}>Mua ngay </Text>
                <Icon name="moped" style={ { fontSize: 18,color:'#F5A646' }} />
            </View>
        </View>
        <Image style={styles.img} source={require('../../../../assets/images/img_cafe.png')}/>
    </TouchableOpacity>
  )
}

export default TopOrder