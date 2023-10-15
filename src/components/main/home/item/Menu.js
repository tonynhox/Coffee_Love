import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native';
const Menu = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('ProductDetail')}
            style={styles.cardProduct}>
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
                    <TouchableOpacity
                        style={{ borderRadius: 100, backgroundColor: '#df7a00', padding: 5 }}
                        >
                        <Icon name="plus" style={{ fontSize: 20, color: '#fff' }} />
                        </TouchableOpacity>
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
