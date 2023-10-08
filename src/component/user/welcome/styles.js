import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CC9F68",
        alignItems: "center",
        justifyContent: "center",
    },
    bgWC1: {
        resizeMode:'contain',
        height: 429,
        position: 'absolute',
        left:0,
        bottom: 0,
        zIndex: -1,

    },
    bgWC2: {
        resizeMode:'contain',
        height: 429,
        position: 'absolute',
        right:0,
        top: 0
    },
    cfWC: {
        width: "100%",
        height: 300,
        resizeMode:'contain',
    },
    t1: {
        color: "#291505",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "700",
        fontStyle: "normal",
    },
    t2: {
        color: '#000',
        textAlign: 'center',
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 15,
        fontWeight: "400",
        marginTop: 2,
        
    },
    btn: {
        marginTop: 20,
        width: 270,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#C67C4E",
        justifyContent: "center",

    },
    t3: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        letterSpacing: 0.16,
        fontWeight: "700"
    },
    
})