import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Header from '../../../utils/Header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopOrder from './item/TopOrder';
import Menu from './item/Menu';
import { ScrollView } from 'react-native-virtualized-view';
const Home = () => {
  const [scrollY] = useState(new Animated.Value(0));


  const HeaderName = ()=>{
    return(         
       <View style={{flexDirection:'row',position:'absolute',left:20}}>
          <Text style={{fontSize:30,color:'red'}}>♨</Text>
          <View style={{flexDirection:'row',alignItems:'center',paddingLeft:3}}>
            <Text style={{fontSize:18,color:'black'}}>Hi,</Text>
            <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>Naveen</Text>
          </View>
        </View>)
  }

  const HeaderSearch = ()=>{
    return(         
      <View style={{position:'absolute',right: '14%'}}>
        <Icon name="magnify" style={ { fontSize: 26,color:'black' }} />
    </View>)
  }

  const opacity = scrollY.interpolate({
    inputRange: [0, 100], // Khi cuộn từ 0px đến 100px
    outputRange: [1, 0], // Giá trị opacity từ 1 (không mờ) đến 0 (mờ hoàn toàn)
    extrapolate: 'clamp', // Giữ giá trị trong khoảng inputRange
  });
  
  return (
    <View style={{flex:1}}>
              <Animated.View
        style={[
          styles.backgroundContainer,
          {
            opacity, // Áp dụng opacity
          },
        ]}
      ></Animated.View>
        <Header 
        customComponent={
          HeaderName()
        }
        containerStyle={{height:60,paddingHorizontal:16,backgroundColor:'transparent'}}
        styleIconhdRight={{top:0}}
        headerStyle={{}}
        leftComponent={
          HeaderSearch()
        }
      />
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false } // Sử dụng driver không dựa vào native (không sử dụng bằng true)
        )}
        style={styles.container}
      > 
      
        <TopOrder/>
        <Menu/>

      </ScrollView>
    </View>

  )
}

export default Home
