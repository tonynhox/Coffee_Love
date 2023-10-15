import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

const Cart = () => {

    const data = ({ item }) => {
        return (
            <View style={styles.v}>
                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Giá: 75.000 VND </Text>
                            <View style={styles.ict}>
                                <Icon name='minus-circle-outline' style={styles.icon} />
                                <Text style={styles.t}>1</Text>
                                <Icon name='plus-circle-outline' style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Giá: 75.000 VND </Text>
                            <View style={styles.ict}>
                                <Icon name='minus-circle-outline' style={styles.icon} />
                                <Text style={styles.t}>1</Text>
                                <Icon name='plus-circle-outline' style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Giá: 75.000 VND </Text>
                            <View style={styles.ict}>
                                <Icon name='minus-circle-outline' style={styles.icon} />
                                <Text style={styles.t}>1</Text>
                                <Icon name='plus-circle-outline' style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Giá: 75.000 VND </Text>
                            <View style={styles.ict}>
                                <Icon name='minus-circle-outline' style={styles.icon} />
                                <Text style={styles.t}>1</Text>
                                <Icon name='plus-circle-outline' style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Giá: 75.000 VND </Text>
                            <View style={styles.ict}>
                                <Icon name='minus-circle-outline' style={styles.icon} />
                                <Text style={styles.t}>1</Text>
                                <Icon name='plus-circle-outline' style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <View style={styles.vt}>
                            <Text style={styles.name}>Cappuccino </Text>
                            <Text style={styles.tp}>Giá: 75.000 VND </Text>
                            <View style={styles.ict}>
                                <Icon name='minus-circle-outline' style={styles.icon} />
                                <Text style={styles.t}>1</Text>
                                <Icon name='plus-circle-outline' style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );

    }

    return (
        <View style={styles.container}>
            <View style={styles.navhd}>
                <Text style={styles.thd}>Giỏ Hàng</Text>
                <Icon name='bell-outline' style={styles.iconhd} />
            </View>

            <FlatList
                data={data}
                renderItem={data}
            />

        </View>
    )
}

export default Cart
