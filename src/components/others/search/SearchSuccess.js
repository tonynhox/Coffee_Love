import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import Header from '../../../utils/Header';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';

const SearchSuccess = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('ProductDetail')}
            style={styles.cardProduct}>
            <View style={styles.cardImg}>
                <Image style={styles.imgProduct} source={require('../../../assets/images/img_cafe.png')} />
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
        <>
        <LinearGradient
        colors={['#CC9F68','#CC9F68']}
        style={styles.findAndArrowBackContainer}>
        <TouchableOpacity style={styles.arrowBack}>
          <Icon6 name={'arrow-left'} size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={'#CC9F68'}
            style={styles.input}
            color={'black'}
            placeholder="Tìm kiếm..."
            // value={search}
            // onChangeText={text => handleSearch(text)}
          />

          {/* Find */}
          <TouchableOpacity>
            <Icon6
              name={'magnifying-glass'}
              size={20}
              color="#CC9F68"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
        <View style={styles.container}>
            
            <FlatList
                data={data}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
        </>
    )
}

export default SearchSuccess

var data = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},]
