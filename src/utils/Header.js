import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const Header = props => {
  const countNotification = useSelector(state => state.users?.countNotification)

  const navigation = useNavigation();
  const {
    headerText,
    styleIconhdRight,
    styleIconhdLeft,
    containerStyle,
    headerStyle,
    leftComponent ,
    rightComponent,
    customComponent,
  } = props;

  const renderLeftIcon = () => {
    if (leftComponent) {
      if(leftComponent === true){
        return (
          <TouchableOpacity
            style={{marginRight: 16}}>
            <Icon
              name="magnify"
              style={[styleIconhdRight, {fontSize: 26, color: 'transparent'}]}
            />
          </TouchableOpacity>
        );
      }
      return leftComponent;
    } else {
      return (
        <TouchableOpacity
          style={{marginLeft:8}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name="chevron-left"
            style={[styleIconhdLeft, {fontSize: 30, color: 'black'}]}
          />
        </TouchableOpacity>
      );
    }
  };

  const renderRightIcon = () => {
    if (rightComponent) {
      if(rightComponent === true){
        return (
          <TouchableOpacity
            style={{marginRight: 16}}>
            <Icon
              name="magnify"
              style={[styleIconhdRight, {fontSize: 26, color: 'transparent'}]}
            />
          </TouchableOpacity>
        );
      }
      return rightComponent;
    } else {
      return (
        <TouchableOpacity
          style={{marginRight: 16}}
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          <Icon
            name="bell-outline"
            style={[styleIconhdRight, {fontSize: 25, color: 'black'}]}
          />
                    <View
            style={{
              position: 'absolute',
              top: -7,
              right: -9,
              height: 'auto',
              width: 'auto',
              paddingHorizontal: 4,
              paddingVertical:2,
              borderRadius: 70,
              backgroundColor: '#F66634',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold',fontSize:10}}>{countNotification}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={[styles.headerContainer, containerStyle]}>
      {renderLeftIcon()}

      {customComponent ? (
        customComponent
      ) : (
        <Text style={[styles.headerText, headerStyle]}>{headerText}</Text>
      )}

      {renderRightIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    // backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: StatusBar.currentHeight*0.8,
    paddingBottom:8,
    justifyContent:'space-between',
    height: 70,

  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    // margin: 10,
    color: '#000',
    
  },
});

export default Header;
