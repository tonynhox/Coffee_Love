import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

const Profile = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.navhd}>
                <Text style={styles.thd}>Hồ Sơ</Text>
                <Icon name='bell-outline' style={styles.iconhd} />
            </View> */}

            <View style={styles.container2}>
                <View style={styles.v}>
                    <View style={styles.v1}>
                        <Image source={require('../../../assets/images/avt.png')}
                            style={styles.avt} />
                        <Text style={styles.t}>Sửa Hồ Sơ </Text>
                    </View>
                    <View style={styles.v2}>
                        <Icon name='chevron-right' style={styles.icon} />
                    </View>
                </View>

                <View style={styles.v}>
                    <View style={styles.v1}>
                        <Icon name='counter' style={styles.icon2} />
                        <View style={styles.t1}>
                            <Text style={styles.t2}>Điểm của bạn </Text>
                            <Text style={styles.td}>2000</Text>
                        </View>

                    </View>
                    <View style={styles.v2}>
                        <Icon name='chevron-right' style={styles.icon} />
                    </View>
                </View>

                <View style={styles.v}>
                    <View style={styles.v1}>
                        <Icon name='order-bool-ascending-variant' style={styles.icon2} />
                        <Text style={styles.t}>Đơn Mua </Text>
                    </View>
                    <View style={styles.v2}>
                        <Icon name='chevron-right' style={styles.icon} />
                    </View>
                </View>

            </View>

            <Text style={styles.txt}>Cài Đặt</Text>
            <View style={styles.container2}>
                <View style={styles.v}>
                    <View style={styles.v1}>
                        <Icon name='lock-outline' style={styles.icon2} />
                        <Text style={styles.t}>Đổi Mật Khẩu </Text>
                    </View>
                    <View style={styles.v2}>
                        <Icon name='chevron-right' style={styles.icon} />
                    </View>
                </View>

                <View style={styles.v}>
                    <View style={styles.v1}>
                        <Icon name='map-outline' style={styles.icon2} />
                        <Text style={styles.t}>Địa  Chỉ Của Tôi  </Text>
                    </View>
                    <View style={styles.v2}>
                        <Icon name='chevron-right' style={styles.icon} />
                    </View>
                </View>

                <View style={styles.v}>
                    <View style={styles.v1}>
                        <Icon name='chat-outline' style={styles.icon2} />
                        <Text style={styles.t}>Hỗ Trợ</Text>
                    </View>
                    <View style={styles.v2}>
                        <Icon name='chevron-right' style={styles.icon} />
                    </View>
                </View>

                <View style={styles.v}>
                    <View style={styles.v1}>
                        <Icon name='logout' style={styles.icon2} />
                        <Text style={styles.t}>Đăng xuất</Text>
                    </View>
                    <View style={styles.v2}>
                        <Icon name='chevron-right' style={styles.icon} />
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Profile