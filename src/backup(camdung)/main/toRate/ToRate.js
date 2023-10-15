import { View, Text, Image, TextInput,FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ToRate = () => {
    const RenderItem = ({item}) => {

        return(
            <View style={styles.containerItem}>
            <View style={styles.itemRow}>
                <Image style={styles.img} source={require('../../../assets/images/img_cafe.png')} />
                <View style={styles.itemColum}>
                    <Text style={styles.txtTitle}>Campuccino</Text>
                    <View style={styles.itemRow}>
                        <Text style={[styles.txt,styles.marginTxt]}>SL: 1</Text>
                        <Text style={[styles.txt,styles.marginTxt]}>Size: 2</Text>
                        <Text style={[styles.txt,styles.t]}>113 Quang trung</Text>
                    </View>
                </View>
            </View>

            <View style={[styles.itemRow,{justifyContent:'space-between',width:'100%'}]}> 
                <Text style={styles.txt} >Chất lượng sản phẩm</Text>
                <View style={styles.itemRow}>
                    <Icon name='star' size={30} color={'red'}/> 
                    <Icon name='star' size={30} color={'red'}/> 
                    <Icon name='star' size={30} color={'red'}/> 
                    <Icon name='star' size={30} color={'red'}/> 
                    <Icon name='star' size={30} color={'red'}/> 
                </View>
            </View>

            <View style={styles.itemRow}>
                <TextInput
                    style={styles.txtInput}
                  placeholder='Nhập đánh giá của bạn' />
            </View>
        </View>
        )
    }
    return (
        <View>
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={RenderItem}
                keyExtractor={item => item.id}

            />
        </View>
    )
}

export default ToRate

var data = [{
    id:1,
},{
    id:2,
}

]