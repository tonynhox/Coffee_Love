import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = props => {
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
    paddingTop: StatusBar.currentHeight*0.6,
    paddingBottom:8,
    justifyContent:'space-between'
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    margin: 10,
    color: '#000',
  },
});

export default Header;
