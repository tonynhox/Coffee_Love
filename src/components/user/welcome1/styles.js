import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#CC9F68",
    },
    kip: {
        position: 'absolute',
        right: 6,
        top: 16,
        alignItems:'center',
        flexDirection: 'row',
        
    },
    txt1: {
        color: "black",
        textAlign: "right",
        fontFamily: "Inter",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        letterSpacing: 0.16,
        
    },
    t2: {
        marginTop: 50,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: 0.16,
    },
    img: {
        width: '100%',
         resizeMode:'contain',
        // alignSelf: "center",


    },
    icon: {
        fontSize: 25,
        color: 'black',
    },
    btn: {
        backgroundColor: "#C67C4E",
        display: "flex",
        width: 280,
        height: 60,
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 8,
    },
    txtbtn: {
        color: "#FDFDFD",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 21,
        letterSpacing: 0.16,
    },
    txtlg: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'row',
        marginTop: 37,

    },
    t3: {
        color: '#000',
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 21,
        letterSpacing: 0.16,
    },
    tlg: {
        color: "#733F00",
        fontFamily: "Inter",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 21,
        letterSpacing: 0.16,
    },

})