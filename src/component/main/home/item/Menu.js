import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles'
const Menu = () => {
    const renderItem = ({ item }) => {
        return (
        <TouchableOpacity style={styles.cardProduct}>
            <View style={styles.cardImg}>
                <Image style={styles.imgProduct} source={require('../../../../assets/images/img_cafe.png')} />
            </View>
            <View style={styles.cardBottom}>
                <View style={styles.CardItemMid}>
                    <Text style={styles.txtTitle}>Cappuccino</Text>
                    <Text style={styles.txtCategory}> Espresso ,Sữa</Text>
                </View>
                <View style={styles.cardItemBottom}>
                    <Text style={styles.txtTitle}>VND 75.000</Text>
                    <Icon name="arrow-right" style={{ fontSize: 20, color: '#F5A646' }} />
                </View>
            </View>
        </TouchableOpacity>
        )
    }

    return (
        <View>
            <Text style={{color:'#000',fontSize:20,fontWeight:'700',marginTop:20}}>Menu</Text>
            <FlatList
                data={data}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Menu

var data = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},]
