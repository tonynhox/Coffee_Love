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
        fontSize: 35,
        color: 'black',
    },
    it: {
        marginTop: 12,
        padding: 24,
        width: "100%",
        height: 197,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    vtit: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: 'row'
    },
    imgit: {
        width: 98.97,
        height: 98.97,
        flexShrink: 0,
        borderRadius: 10,
    },
    vt: {
        margin: 10,
    },
    name: {
        color: '#000',
        fontFamily: "Inter",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 21,
        letterSpacing: 0.16,
        textTransform: "capitalize",
    },
    tp: {
        marginTop: 20,
        color: '#000',
        fontFamily: "Inter",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 21,
        letterSpacing: 0.16,
        textTransform: "capitalize",
    },
    btn: {
        marginTop: 10,
        backgroundColor: "#D97700",
        display: "flex",
        width: 250,
        padding: 12,
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 10,
        alignSelf: "center",
    },
    txtbtn: {
        color: "#FDFDFD",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 20,
        letterSpacing: 0.16,
    },
    v:{
        marginTop: 20,
    },


})