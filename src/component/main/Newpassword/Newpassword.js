import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'
import Header from '../../../utils/Header'
import { useDispatch, useSelector } from 'react-redux'
import { changePassOtp } from '../../../redux/reducers/slices/userSlice'


const Newpassword = () => {

    const [pass, setPass] = useState('');
    const [mat_khau, setMat_khau] = useState('');

    const isLoading = useSelector((state) => state.users.isLoading);

    const dispatch = useDispatch();

    const handleNewPass = () => {
       
        if(Object.is(mat_khau, pass)){
           dispatch(getRegister({ mat_khau})); 
        }
        
    }
    return (
        <View style={styles.container}>
            {/* <View style={styles.navhd}>
                <Icon name='chevron-left' style={styles.iconhd} />
                <Text style={styles.thd}>Mật Khẩu Mới </Text>
                <View></View>
            </View> */}
            <Header
                headerText={'Mật Khẩu Mới'}
                headerStyle={{ fontSize: 28, fontWeight: 'bold' }}
                rightComponent={
                    <Text></Text>
                }
            />

            <View>
                <Text style={styles.t1}>Mật Khẩu Mới </Text>
                <View style={styles.vp}>
                    <TextInput 
                        onChangeText={(text) => setMat_khau(text)}
                        value={mat_khau.toString()}
                        style={styles.tip1} />
                    <Icon name='lock-outline' style={styles.icon} />
                </View>

                <Text style={styles.t2}>Nhập Lại Mật Khẩu </Text>
                <View style={styles.vp}>
                    <TextInput 
                        onChangeText={(text) => setPass(text)}
                        value={pass.toString()}
                        style={styles.tip1} />
                    <Icon name='lock-outline' style={styles.icon} />
                </View>
            </View>

            <Pressable 
                onPress={() => { handleNewPass() }}
                style={styles.btn1} >
                <Text style={styles.txtbtn1} >
                    Đổi Mật Khẩu  </Text>
            </Pressable>
        </View>
    )
}

export default Newpassword