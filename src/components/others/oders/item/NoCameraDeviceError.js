import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoCameraDeviceError = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Khong tim thay Camera</Text>
    </View>
  )
}

export default NoCameraDeviceError

const styles = StyleSheet.create({})