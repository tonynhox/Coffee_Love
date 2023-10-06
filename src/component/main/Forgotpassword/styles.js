import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#FFFFF',
    },
    navhd: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    thd: {
        color: '#000',
        fontFamily: "Inter",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 31,
        letterSpacing: 0.16,
    },
    iconhd: {
        fontSize: 30,
        color: 'black',
    },
    tem: {
        width: 118,
        height: 27,
        flexShrink: 0,
        color: '#000',
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 20,
        marginTop: 47,
        alignSelf: "center",
    },
    tip: {
        padding: 10,
        display: "flex",
        width: "100%",
        height: 48,
        flexDirection: "column",
        justifyContent: "center",
        color: "#848A9C",
        fontFamily: "Inter",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 14,
        letterSpacing: 0.16,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',

    },
    t: {
        color: 'rgba(0, 0, 0, 0.50)',
        fontFamily: "Inter",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 15,
        marginTop: 20,
        alignSelf: "center",
    },
    btn1: {
        backgroundColor: "#D97700",
        display: "flex",
        width: "100%",
        height: 48,
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 10,
    },
    txtbtn1: {
        color: "#FFFF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 21,
        letterSpacing: 0.16,
    },
    tor: {
        marginTop: 21,
        marginBottom:10,
        color: '#000',
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 21,
        letterSpacing: 0.16,
    },
    vic: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: 'row',
        width: "70%",
        alignSelf:"center",
    },
    icongg: {
        fontSize: 35,
        flexShrink: 0,
        color:"red"
    },
    iconap: {
        fontSize: 35,
        flexShrink: 0,
        color:'#000'
    },
    iconfb: {
        fontSize: 35,
        flexShrink: 0,
        color:"#1877F2"
    },
})