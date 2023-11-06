import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {MFMapView, MFDirectionsRenderer} from 'react-native-map4d-map';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fetchNearbySearch} from 'react-native-map4d-services';

const MapAddAddress = () => {
  const myLocation = useSelector(state => state.locationMap?.myLocation);

  const locationNear = (location,text='') =>
    fetchNearbySearch({
      location: {
        latitude: location?.latitude,
        longitude: location?.longitude,
      },
      radius: 15,
      text: text,
      types: ['point','other'],

    }).then(response => {
      if (response.code == 'ok') {
        console.log('Geocode Results:', response.result);
      } else {
        console.log(
          `Error code: ${response.code}, message: ${response.message}`,
        );
      }
    });
  return (
    <View style={{flex: 1}}>
      <MFMapView
        mapType={'roadmap'}
        // camera={{
        //   center: {
        //     latitude: myLocation.latitude,
        //     longitude: myLocation.longitude,
        //   },
        //   zoom: 18,
        //   bearing: 0,
        //   tilt: 0,
        // }}
        showsMyLocation={true}
        style={{flex: 1}}
        onCameraIdle={e => {
            console.log('onCameraIdle', e.nativeEvent);
          locationNear(e.nativeEvent.center);
        }}
        // style={styles.container}
      ></MFMapView>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: 0,
          bottom: 20,
          justifyContent: 'center',
        }}>
        <Icon name="pin" size={40} color="red" />
      </View>
    </View>
  );
};

export default MapAddAddress;

const styles = StyleSheet.create({});
