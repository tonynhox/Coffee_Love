import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View
      style={{
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        flex:1,
        zIndex:1000
      }}>
      <ActivityIndicator
        size="large"
        color="#D97700"
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
      />
    </View>
  );
};

export default Loading;
