import React, { useState, useRef, useCallback } from 'react';
import { View, Platform, PermissionsAndroid, Text, Dimensions, StyleSheet } from 'react-native';
import { Button, Icon, Input, Dialog } from '@rneui/themed';
// import styles from './../styles/Style'
import Barcode from '@kichiyaki/react-native-barcode-generator';

//https://github.com/LintangWisesa/ReactNative-Barcode-Generator-Scanner

const BarcodeGenerator = (props) => {
    const {ma_khach_hang,style_custom={marginBottom:3, borderRadius:8,padding:4},height=40} = props;
    // const [BarValue, setBarValue] = useState('CL00000001');
    const ref = useRef();


    return (
        <Barcode
        // borderRadius={20}
        // format="CODE128"ß
        value={ma_khach_hang ? ma_khach_hang : '----------'}
        text={ma_khach_hang ? ma_khach_hang : '----------'}
        style={style_custom}
        textStyle={{ color:'#000',marginTop:5,fontSize:14,fontWeight:'400' }}
        // style={{alignSelf:'center'}}
        maxWidth={Dimensions.get('window').width / 1.5}
        // maxHeight={Dimensions.get('window').height / 2}
        height={height}
    />
    );
}

export default BarcodeGenerator

const styles = StyleSheet.create({
    // container: {marginBottom:3, borderRadius:8,padding:4,}
    // container: {margin:10}

});