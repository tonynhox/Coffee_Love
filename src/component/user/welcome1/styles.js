import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#CC9F68",
    },
    kip: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: 'row'
    },
    txt1: {
        color: "black",
        textAlign: "right",
        fontFamily: "Inter",
        fontsize: 18,
        fontStyle: "normal",
        lineHeight: 21,
        fontWeight: "700",
        letterSpacing: 0.16,
    },
    t2: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.16,
    },
    img: {
        height: 500,
        flexShrink: 0,
        justifyContent: "center",

    },
    icon:{
        fontSize:25,
        color:'black',
    }
})