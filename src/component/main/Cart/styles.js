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
    v: {
        marginTop: 20,
    },
    it: {
        marginTop: 12,
        padding: 24,
        width: "100%",
        height: 153,
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
    vt: {
        margin: 10,
    },
    imgit: {
        width: 98.97,
        height: 98.97,
        flexShrink: 0,
        borderRadius: 10,
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
    ict: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: 'row',
        alignSelf: "center",
    },
    icon: {
        marginTop:10,
        marginLeft: 6,
        marginRight:6,
        fontSize: 30,
        flexShrink: 0,
        color: '#000'
    },
    t: {
        display: "flex",
        width: 31,
        height: 21,
        flexDirection: "column",
        justifyContent: "center",
        flexShrink: 0,
        color: '#000',
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 21,
        letterSpacing: 0.16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 15,
        
    }
})