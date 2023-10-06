import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Welcome = () => {
  return (
    <View style={[styles.container]} >
      <Image source={require('../../../assets/images/bgWC2.png')}
        style={styles.bgWC2} />

      <Image source={require('../../../assets/images/coffeeWelcom.png')}
       style={styles.cfWC} />

      <Text style={styles.t1}>Chào mừng bạn đã đến với Coffee Love</Text>

      <Text style={styles.t2}>Hãy để chúng tôi giúp bạn tận hưỡng hương vị này nhé!</Text>

      <Pressable style={styles.btn}>
                <Text style={styles.t3}
                        >Tiếp Tục Nào!</Text>
            </Pressable>

      <Image source={require('../../../assets/images/bgWC1.png')}
        style={[styles.bgWC1]}/>

    </View>
  )
}

export default Welcome
