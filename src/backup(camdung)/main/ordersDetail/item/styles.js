import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({
    txtInput:{
        minHeight: 100, 
        // borderColor: 'gray', 
        // borderWidth: 1,/
        backgroundColor:'#eaeaea',
        width:'100%',
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:6,
        textAlignVertical:'top'
    },
    txtFontWeight400:{
        fontWeight:'400',
    },
    txtMarginBottom:{
        marginBottom:6,
    },
    txt:{
        fontSize:12,
        fontWeight:'400',
        color:'#000',
    },
    txtBill:{
        fontSize:17,
        fontWeight:'600',
        color:'#000',
        // marginBottom:10,
    },
    txtTitle:{
        fontSize:19,
        fontWeight:'700',
        color:'#000',
    },
    itemRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    card:{
        backgroundColor:'rgba(217, 217, 217, 0.4)',
        padding:10,
        borderRadius:10,
        marginBottom:10,
    },
    container:{
        flex:1,
        padding:10,
        // marginVertical:10,
        marginHorizontal:16,
    }
})