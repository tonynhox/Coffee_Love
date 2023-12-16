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
  // tính toán toạ độ của camra và fitbounds
  const cameraFprFitbounds = async () => {
    if (distance) {
      const camera = await map.current?.cameraForBounds({
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
      map.current?.animateCamera(camera);
    }
  };
  useEffect(() => {
    cameraFprFitbounds();
  }, []);

  const cameraChoose = useSelector(state => state.utils.cameraChoose);
  useEffect(() => {
    if(cameraChoose){
      map.current?.animateCamera(cameraChoose);
    }
  }, [cameraChoose]);

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
              const cameraFprFitbounds = async () => {
                const cameraBound = await map.current?.cameraForBounds({
                  bounds: {
                    northEast: {
                      latitude: myLocation.latitude,
                      longitude: myLocation.longitude,
                    },
                    southWest: {
                      latitude: location.latitude,
                      longitude: location.longitude,
                    },
                  },
                  padding: {top: 1, right: 2, bottom: 3, left: 4},
                });
                map.current?.animateCamera(cameraBound);
              };
              cameraFprFitbounds();
              // map.current?.fitBounds({
              //   bounds: {
              //     northEast: {
              //       latitude: myLocation.latitude,
              //       longitude: myLocation.longitude,
              //     },
              //     southWest: {
              //       latitude: location.latitude,
              //       longitude: location.longitude,
              //     }
              //   },
              //   padding: {top: 1, right: 2, bottom: 3, left: 4},
              // });
            }}
            icon={{
              uri: require('../../../assets/images/store_bg.jpg'),
              width: 30,
              height: 30,
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
