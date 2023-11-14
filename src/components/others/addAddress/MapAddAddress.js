import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {MFMapView} from 'react-native-map4d-map';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fetchNearbySearch} from 'react-native-map4d-services';
import { useNavigation, useRoute } from '@react-navigation/native';
import { setListAddress } from '../../../redux/reducers/slices/utilSlice';
import ListAddress from './ListAddress';

const MapAddAddress = () => {
  const route = useRoute();
  const isCart = route.params?.isCart || false;
  const myLocation = useSelector(state => state.locationMap?.myLocation);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const locationNear = (location,text='') =>
    fetchNearbySearch({
      location: {
        latitude: location?.latitude,
        longitude: location?.longitude,
      },
      radius: 30,
      text: text,
      types: ['point','other'],

    }).then(response => {
      if (response.code == 'ok') {
        // console.log('Geocode Results:', response.result);
        dispatch(setListAddress(response.result));
      } else {
        console.log(
          `Error code: ${response.code}, message: ${response.message}`,
        );
      }
    });
  return (
  <>

    <View style={{flex: 0.7}}>
      <MFMapView
        mapType={'roadmap'}
        camera={{
          center: {
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
          },
          zoom: 18,
          bearing: 0,
          tilt: 0,
        }}
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
          bottom: 34,
          justifyContent: 'center',
        }}>
        <Icon name="pin" size={40} color="red" />
      </View>
    </View>

      <View style={{flex:0.3,backgroundColor:'white'}}>
          <ListAddress isCart={isCart}/>
      </View>
  </>

  );
};

export default MapAddAddress;

const styles = StyleSheet.create({});
