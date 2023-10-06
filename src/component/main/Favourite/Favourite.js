import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'


const Favourite = () => {

    const data = ({ item }) => {
        return (
            <View style={styles.v}>
                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Espresso, Sữa </Text>
                        </View>
                    </View>

                    <Pressable style={styles.btn} >
                        <Text style={styles.txtbtn} >
                            Mua Ngay  </Text>
                    </Pressable>

                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Espresso, Sữa </Text>
                        </View>
                    </View>

                    <Pressable style={styles.btn} >
                        <Text style={styles.txtbtn} >
                            Mua Ngay  </Text>
                    </Pressable>

                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Espresso, Sữa </Text>
                        </View>
                    </View>

                    <Pressable style={styles.btn} >
                        <Text style={styles.txtbtn} >
                            Mua Ngay  </Text>
                    </Pressable>

                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Espresso, Sữa </Text>
                        </View>
                    </View>

                    <Pressable style={styles.btn} >
                        <Text style={styles.txtbtn} >
                            Mua Ngay  </Text>
                    </Pressable>

                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Espresso, Sữa </Text>
                        </View>
                    </View>

                    <Pressable style={styles.btn} >
                        <Text style={styles.txtbtn} >
                            Mua Ngay  </Text>
                    </Pressable>

                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Espresso, Sữa </Text>
                        </View>
                    </View>

                    <Pressable style={styles.btn} >
                        <Text style={styles.txtbtn} >
                            Mua Ngay  </Text>
                    </Pressable>

                </View>
            </View>
        );

    }

    return (
        <View style={styles.container}>
            <View style={styles.navhd}>
                <Text style={styles.thd}>Yêu Thích</Text>
                <Icon name='bell-outline' style={styles.iconhd} />
            </View>

            <FlatList
                data={data}
                renderItem={data}
            />

        </View>
    )
}

export default Favourite