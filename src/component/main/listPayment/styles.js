import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({
    txt:{
        fontSize:16,
        marginLeft:16,
        color:'#000'
    },
    img:{
        width:44,
        height:30,
        resizeMode:'contain',
        borderRadius:2,
        marginLeft:16
    },
    card:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:6,
        borderWidth:0.5,
        borderRadius:10,
        borderColor:'#000',
        marginBottom:16,
        marginHorizontal:16,
        backgroundColor:'#f1f1f1',
        height:54
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:16,
        paddingVertical:16,
        marginTop:36
    },
})