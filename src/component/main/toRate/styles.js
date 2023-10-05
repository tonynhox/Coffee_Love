import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({

    flatList:{
        // margin:10,
        // backgroundColor:'#F1F1F1'
    },
    marginTxt:{
        marginEnd:14
    },

    txtTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000'
    },

    img:{
        width:45,
        height:45,
        borderRadius:5,
        resizeMode:'contain',
    },
    itemRow:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:3
    },
    itemColum:{
        flexDirection:'column',
        // padding:10
        paddingHorizontal:12
    },
    txtInput:{
        height: 100, 
        // borderColor: 'gray', 
        // borderWidth: 1,/
        backgroundColor:'#F1F1F1',
        width:'100%',
        borderRadius:6,
        paddingLeft:5,
        textAlignVertical:'top'
    },
    txt:{
        fontSize:14,
        fontWeight:'400',
        color:'#000'
    },

    containerItem:{
        backgroundColor:'#fff',
        marginVertical:8,
        marginHorizontal:14,
        borderRadius:10,
        padding:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    
})