import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const TopOrderLoadingPlaceholder = () => {
  return (
    <PlaceholderMedia
      Animation={Fade}
      style={{
        width: '90%',
        height: 150,
        margin: 20,
        backgroundColor: 'rgba(220,220,220, 0.5)',
        marginVertical: 10,
        alignSelf: 'center',
      }}
    />
  );
};

export default TopOrderLoadingPlaceholder;

const styles = StyleSheet.create({});
