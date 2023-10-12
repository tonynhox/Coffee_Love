import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'
import Header from '../../../utils/Header'

const Profile = () => {
    return (<>
        <Header headerText="Tài khoản" 
        leftComponent={true}
        />
        <ScrollView style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.txtTitle}>Tiện ích</Text>
                <View style={styles.cardRow} >
                    <View style={styles.cardExtention}>
                        <Icon name="file-document-outline" style={[styles.icon,{color:'orange',fontSize:26}]} />
                        <Text style={styles.txtExtention}>Lịch sử đơn hàng</Text>
                    </View>
                    <View style={styles.cardExtention} >
                        <Icon name="file-search-outline" style={[styles.icon,{color:'#8000FF',fontSize:26}]} />
                        <Text style={styles.txtExtention}>Điều khoản</Text>
                    </View>
                </View>
                <View style={styles.cardRow}>
                    <View style={styles.cardExtention}>
                        <Icon name="clipboard-file-outline" style={[styles.icon,{color:'green',fontSize:26}]}/>
                        <Text style={styles.txtExtention}>Chính sách</Text>
                    </View>
                    <View style={styles.cardExtention}>
                        <Icon name="file-search-outline" style={[styles.icon,{color:'#8000FF',fontSize:26}]} />
                        <Text style={styles.txtExtention}>Điều khoản VNPAY</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.txtTitle}>Hỗ trợ</Text>
                <View style={[styles.line,{borderTopLeftRadius:8}]}>
                    <View style={[styles.CardSupport,{
                        // borderRadius: 10,

                    }]}>
                        <Icon name="star-outline" style={styles.icon} />
                        <Text style={styles.txtItem}>Đánh giá đơn hàng</Text>
                    </View>
                    <Icon name="chevron-right" style={[styles.icon,styles.icLeft]} />
                </View>
                <View style={styles.line}>
                    <View style={styles.CardSupport}>
                        <Icon name="message-outline" style={[styles.icon,{fontSize:17,marginLeft:3}]} />
                        <Text style={styles.txtItem}>Liên hệ góp ý</Text>
                    </View>
                    <Icon name="chevron-right" style={[styles.icon,styles.icLeft]} />
                </View>
                <View style={[styles.line,{borderBottomLeftRadius: 8,}]}>
                    <View style={[styles.CardSupport,{borderBottomWidth:0}]}>
                        <Icon name="file-document-outline" style={[styles.icon,]} />
                        <Text style={styles.txtItem}>Hướng dẫn xuất hoá đơn</Text>
                    </View>
                    <Icon name="chevron-right" style={[styles.icon,styles.icLeft,]} />
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.txtTitle}>Tài khoản</Text>
                <View style={[styles.line,{borderTopLeftRadius:8}]}>
                    <View style={styles.CardSupport}>
                        <Icon name="account-outline" style={[styles.icon,]} />
                        <Text style={styles.txtItem}>Thông tin cá nhân</Text>
                    </View>
                    <Icon name="chevron-right" style={[styles.icon,styles.icLeft]} />
                </View>
                <View style={styles.line}>
                    <View style={styles.CardSupport}>
                        <Icon name="lock-outline" style={[styles.icon,]} />
                        <Text style={styles.txtItem}>Đổi mật khẩu</Text>
                    </View>
                    <Icon name="chevron-right" style={[styles.icon,styles.icLeft]} />
                </View>
                <View style={styles.line}>
                    <View style={styles.CardSupport}>
                        <Icon name="map-marker-multiple-outline" style={[styles.icon,]} />
                        <Text style={styles.txtItem}>Địa chỉ đã lưu</Text>
                    </View>
                    <Icon name="chevron-right" style={[styles.icon,styles.icLeft]} />
                </View>
                <View style={[styles.line,{borderBottomLeftRadius:8}]}>
                    <View style={[styles.CardSupport,{borderBottomWidth:0}]}>
                        <Icon name="logout" style={[styles.icon,]} />
                        <Text style={styles.txtItem}>Đăng xuất</Text>
                    </View>
                    <Icon name="chevron-right" style={[styles.icon,styles.icLeft]} />
                </View>
           </View>

            
            
        </ScrollView>
        </>
    )
}

export default Profile