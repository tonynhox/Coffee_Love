import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../../others/map4D/Map'

const ListStore = () => {
  return (
    <View style={{flex:1}}>
        <Map/>
        <View style={{position:'absolute',alignSelf:'center'}}>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
        </View>


    </View>
  )
}

export default ListStore

const styles = StyleSheet.create({})