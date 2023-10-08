import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = (props) => {
  const navigation = useNavigation();
  const {
    headerText,
    styleIconhdRight,
    styleIconhdLeft,
    containerStyle,
    headerStyle,
    leftComponent,
    rightComponent,
    customComponent,
  } = props;


  const renderLeftIcon = () => {
    if (leftComponent) {
      return (
        leftComponent
      );
    } else {
      return (
        <TouchableOpacity 
          style={{position:'absolute',left: 0}}
        onPress={() => {
          navigation.goBack()}}>
          <Icon name="chevron-left" style={[styleIconhdLeft, { fontSize: 30,color:'black' }]} />
        </TouchableOpacity>
      );
    }
  };

  const renderRightIcon = () => {
    if (rightComponent) {
      return (
        rightComponent
      );
    } else {
      return (
        <TouchableOpacity 
          style={{position:'absolute',right: 16}}
          onPress={() => {}}>
          <Icon name="bell-outline" style={[styleIconhdRight, { fontSize: 25,color:'black'}]} />
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
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#000',
  },
});

export default Header;
