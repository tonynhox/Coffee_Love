import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemIn4Product = () => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <View style={[styles.itemRow,{justifyContent:'flex-start'}]}>
                <Icon name="map-marker-radius-outline" size={40} color="red" />
                <Text style={[styles.txtTitle,{marginLeft:12}]}>Địa chỉ nhận hàng</Text>
            </View>
            <View style={{marginStart:12,marginTop:4}}>
                <Text style={styles.txt}>Huỳnh Mai Hoa (+84) 07838560000 </Text>
                <Text style={styles.txt}>Số 72, Đông Hưng Thận 05, KP7</Text>
                <Text style={styles.txt}>Phường Tân Hưng Thuận, Quận 12, TP.Hồ Chí Minh</Text>
            </View>
        </View>

        <View style={styles.card}>
            <View style={[styles.itemRow,{justifyContent:'flex-start'}]}>
                <Icon name="clipboard-text-clock-outline" size={40} color="#000" />
                <Text style={[styles.txtTitle,{marginLeft:12}]}>Trạng thái đơn hàng</Text>
            </View>
            <Text style={[styles.txt,{color:'#D20707',fontWeight:'400',marginLeft:10,marginTop:3,fontSize:13}]}>Đã hoàn thành </Text>
        </View>

        <View style={styles.card}>
            <View style={{marginBottom:10,marginTop:6}}>
                <Text style={[styles.txtTitle]}>Order # 0783684358</Text>
            </View>

            {/* item */}
            <View style={{borderBottomWidth:0.6,borderColor:'gray',paddingBottom:6}}>
                {data.map((item,index)=>{
                    return (
                        <View
                            style={{marginHorizontal:8,marginBottom:6}}
                            key={index}>
                            <View style={[styles.itemRow,{}]}>
                                <Text style={[styles.txtBill,styles.txtFontWeight400]}>Americano Coffee</Text>
                                <Text style={[styles.txtBill,styles.txtFontWeight400]} >75.000 </Text>
                            </View>
                            <Text style={styles.txt}>Regular | SL: 2 </Text>
                        </View>
                        )
                    }
                )}
            </View>

            <View style={{marginTop:8}}>
                <View style={[styles.itemRow,styles.txtMarginBottom]}>
                    <Text style={[styles.txtBill,styles.txtFontWeight400]}>Tổng tiền</Text>
                    <Text style={[styles.txtBill,styles.txtFontWeight400]}>225.000</Text>
                </View>
                <View style={[styles.itemRow,styles.txtMarginBottom]}>
                    <Text style={[styles.txtBill,styles.txtFontWeight400]}>Giảm giá</Text>
                    <Text style={[styles.txtBill,styles.txtFontWeight400]}>0 </Text>
                </View>
                <View style={[styles.itemRow,styles.txtMarginBottom]}>
                    <Text style={styles.txtBill}>Tổng Cộng</Text>
                    <Text style={styles.txtBill}>225.000 </Text>
                </View>
                <View style={[styles.itemRow,styles.txtMarginBottom]}>
                    <Text style={styles.txtBill}>Điểm Tích</Text>
                    <Text style={styles.txtBill}>60 </Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ItemIn4Product

var data = [
    {id:1},{id:2},{id:3},{id:4}]