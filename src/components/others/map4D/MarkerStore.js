import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {MFMarker} from 'react-native-map4d-map';
import {useDispatch, useSelector} from 'react-redux';
import {findNearestCoordinate} from './tinhKhoangCach';
import {getLocationRouteFetch} from '../../../redux/reducers/slices/locationMapSlice';

const MarkerStore = props => {
  const {map, duongDi} = props;
  const data = useSelector(state => state.locationMap.toaDoCuaHang);
  const myLocation = useSelector(state => state.locationMap.myLocation);
  const distance = findNearestCoordinate(
    (origin = {latitude: myLocation.latitude, longitude: myLocation.longitude}),
    (coordinates = data.map(item => {
      item.location.x = parseFloat(item.location.x);
      item.location.y = parseFloat(item.location.y);
      return item.location;
    })),
  );
  // console.log('distance', distance);

  useEffect(() => {
    if (distance) {
      console.log('distance', distance[0].coordinate);
      console.log('myLocation', myLocation);
      map.current?.fitBounds({
        bounds: {
          northEast: {
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
          },
          southWest: {
            latitude: parseFloat(distance[0].coordinate.x),
            longitude: parseFloat(distance[0].coordinate.y),
          },
        },
        padding: {top: 1, right: 2, bottom: 3, left: 4},
      });
    }
  }, []);

  const dispath = useDispatch();
  return (
    <>
      {data?.map((item, index) => {
        return (
          <MFMarker
            snippet={item.dia_chi}
            key={index}
            onPress={event => {
              const location = {
                latitude: parseFloat(item.location.x),
                longitude: parseFloat(item.location.y),
              };
              // duongDi(location)
              dispath(
                getLocationRouteFetch({
                  locationStart: {
                    latitude: myLocation.latitude,
                    longitude: myLocation.longitude,
                  },
                  locationEnd: location,
                }),
              );

              // map.current?.animateCamera({
              //   center: {
              //     latitude: location.latitude,
              //     longitude: location.longitude,
              //   },
              //   zoom: 17,
              //   bearing: 0,
              // });

              map.current?.fitBounds({
                bounds: {
                  northEast: {
                    latitude: myLocation.latitude,
                    longitude: myLocation.longitude,
                  },
                  southWest: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }
                },
                padding: {top: 1, right: 2, bottom: 3, left: 4},
              });
            }}
            icon={{
              uri: require('../../../assets/images/img_cafe.png'),
              width: 25,
              height: 25,
            }}
            coordinate={{
              latitude: parseFloat(item.location.x),
              longitude: parseFloat(item.location.y),
            }}
            zIndex={100}
            visible={true}></MFMarker>
        );
      })}
    </>
  );
};

export default MarkerStore;

const styles = StyleSheet.create({});
