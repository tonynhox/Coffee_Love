import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({color = ['#FFA500', '#FF8C00', '#FF7F50'], scale = 0.1}) => {
  const scaledWidth = 350 * scale;
  const scaledHeight = 200 * scale;

  const styles = StyleSheet.create({
    container: {
      height: scaledHeight,
      width: scaledWidth,
      backgroundColor: 'orange',
      justifyContent: 'space-around',
      borderRadius: 24 * scale,
    },
  });

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0.7, y: 1}}
      colors={color}
      style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginHorizontal: 30 * scale,
          marginTop: 8 * scale,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 20 * scale,
            width: 20 * scale,
            marginEnd: 15 * scale,
          }}
        />
        <View
          style={{
            backgroundColor: 'white',
            height: 20 * scale,
            width: 90 * scale,
          }}
        />
      </View>

      <View style={{marginHorizontal: 30 * scale}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 50 * scale,
            width: 55 * scale,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30 * scale,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <View
            style={{
              backgroundColor: 'white',
              height: 20 * scale,
              width: 20 * scale,
              marginEnd: 15 * scale,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              height: 20 * scale,
              width: 70 * scale,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              height: 20 * scale,
              width: 20 * scale,
              marginLeft: 15 * scale,
            }}
          />
        </View>
        <View>
          <Text
            style={{color: 'white', fontSize: 42 * scale, fontWeight: '900'}}>
            CL
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Card;
