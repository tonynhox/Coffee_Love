import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Welcome = (props) => {
  const { navigation } = props
  return (
    <View style={[styles.container]} >
      <Image source={require('../../../assets/images/bgWC2.png')}
        style={styles.bgWC2} />

      <Image source={require('../../../assets/images/coffeeWelcom.png')}
       style={styles.cfWC} />

      <Text style={styles.t1}>Chào mừng bạn đã {'\n'} đến với {'\n'}Coffee Love</Text>

      <Text style={styles.t2}>Hãy để chúng tôi giúp bạn tận hưởng {'\n'} hương vị này nhé!</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Welcome1')}
        style={styles.btn}>
                <Text style={styles.t3}
                        >Tiếp Tục Nào!</Text>
            </TouchableOpacity>

      <Image source={require('../../../assets/images/bgWC1.png')}
        style={[styles.bgWC1]}/>

    </View>
  )
}

export default Welcome
