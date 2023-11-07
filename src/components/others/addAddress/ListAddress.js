import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const ListAddress = () => {
    const navigation = useNavigation();
    const data = useSelector(state => state.utils?.listAddress);
    const renderOItem = ({ item }) => {
        return (
          <TouchableOpacity 
            onPress={()=>
                navigation.navigate('AddAddress',{item:item})

            }
            style={styles.container}>
            <View style={{padding:10}}>
                <Icon name="map-marker-outline" size={20} color={"gray"} />
            </View>
            <View style={{width:'90%'}}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.textItem}>{item.address}</Text>

            </View>
          </TouchableOpacity>
        );
      }
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderOItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ListAddress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 0.6,
        borderBottomColor: 'lightgray',
        flexDirection: 'row',
        alignItems: 'center',
      },
      text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
      },
      textItem: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
      },
})