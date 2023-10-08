import { View, Text } from 'react-native'
import React from 'react'
import WheelOfFortune from './src/component/main/wheelOfFortune/WheelOfFortune'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Text>App</Text> */}
      <WheelOfFortune />
    </View>
  )
}

export default App