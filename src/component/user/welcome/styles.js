import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#CC9F68",
    },
    bgWC1: {
        resizeMode:'contain',
        height: 429,
        position: 'absolute',
        left:0,
        bottom: 0,
        zIndex: 1,

    },
    bgWC2: {
        resizeMode:'contain',
        height: 429,
        position: 'absolute',
        right:0,
        top: 0
    },
    cfWC: {
        top: 220,
        width: "100%",
        height: 325,
        alignSelf: 'center',
    },
    t1: {
        top: 230,
        color: "#291505",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 30,
        fontWeight: "700",
        fontStyle: "normal",
        display: "flex",
        width: "100%",
        height: 106,
        flexDirection: "column",
        justifyContent: "center",
    },
    t2: {
        top: 210,
        width: "100%",
        height: 34,
        color: "#291505",
        textAlign: 'center',
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 15,
        fontWeight: "400",
        
    },
    btn: {
        display: "flex",
        width: 296,
        height: 70,
        borderRadius: 10,
        backgroundColor: "#D97700",
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: "10%",
        zIndex: 2,
        justifyContent: "center",
        flexDirection: "column",
        alignSelf: "center",

    },
    t3: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        lineHeight: 21,
        letterSpacing: 0.16,
    },
    
})