import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {MFMarker} from 'react-native-map4d-map';
import {useSelector} from 'react-redux';
import { findNearestCoordinate } from './tinhKhoangCach';

const MarkerStore = props => {
  const {map} = props;
  const data = useSelector(state => state.locationMap.toaDoCuaHang);
  const myLocation = useSelector(state => state.locationMap.myLocation);
  const distance = findNearestCoordinate(origin={latitude: myLocation.latitude, longitude: myLocation.longitude}, 
      coordinates = data.map(item => {item.location.x = parseFloat(item.location.x); item.location.y = parseFloat(item.location.y); return item.location}));
    // console.log('distance', distance);  

    useEffect(() => {
      if(distance){
         console.log('distance', distance[0].coordinate);
         console.log('myLocation', myLocation);
        map.current?.fitBounds({
          bounds: {
            northEast: { latitude: myLocation.latitude, longitude: myLocation.longitude },
            southWest: { latitude: parseFloat(distance[0].coordinate.x), longitude: parseFloat(distance[0].coordinate.y) }
          },
          padding: { top: 1, right: 2, bottom: 3, left: 4 }
        });
      }
    }
    , [distance]);
  return (
    <>
      {data?.map((item, index) => {


        return (
          <MFMarker
            title={item.dia_chi}
            key={index}
            onPress={event => {
              map.current?.animateCamera({
                center: {
                  latitude: parseFloat(item.location.x),
                  longitude: parseFloat(item.location.y),
                },
                zoom: 17,
                bearing: 0,
              });
            }
            }
            icon={{
              uri: require('../../../assets/images/img_cafe.png'),
              width: 20,
              height: 20,
            }}
            coordinate={{
              latitude: parseFloat(item.location.x),
              longitude: parseFloat(item.location.y),
            }}
            zIndex={100}
            visible={true}>
          </MFMarker>
        );
      })}
    </>
  );
};

export default MarkerStore;

const styles = StyleSheet.create({});
