import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    v: {
        marginTop: 20,
    },
    it: {
        marginTop: 12,
        width: "100%",
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        backgroundColor: '#fff',
    },
    vtit: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: 'row'
    },
    vt: {
        margin: 10,
    },
    imgit: {
        width: 50,
        height: 80,
        borderRadius: 10,
    },
    t: {
        marginLeft: 10,
        display: "flex",
        width: "80%",
        height: 70,
        flexDirection: "column",
        justifyCcontent: "center",
        flexShrink: 0,
        color: '#000',
        fontFamily: "Inter",
        fontFize: 13,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 21,
        letterHpacing: 0.16,
        flexWrap: "wrap",
    },
})