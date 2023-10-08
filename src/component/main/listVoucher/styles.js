import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({
    flatList:{
        // margin:10,
        // backgroundColor:'#F1F1F1'
    },
    centeredText:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imgView:{
        marginLeft:14,
        
    },  
    txt:{
        fontSize:12,
        color:'#000',
        fontWeight:'300'
    },
    txtTitle:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000',
        marginBottom:6,
        marginTop:5

    },
    card:{
        backgroundColor:'#fff',
        borderRadius:10,
        flexDirection:'row',
        marginHorizontal:16,
        marginVertical:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    img:{
        height:80,
        resizeMode:'contain',
        width:90,
        marginLeft:-6,
    },
    container:{
        flex:1,
        backgroundColor:'#f3f3f3',
        padding:10
    },
})