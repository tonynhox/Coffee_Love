import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {MFMapView} from 'react-native-map4d-map';
import {useSelector} from 'react-redux';
import MarkerStore from './MarkerStore';

const Map = () => {
  const map = useRef(null);
  const data = useSelector(state => state.location);
  const myLocation = useSelector(state => state.locationMap.myLocation);

  console.log('myLocation', myLocation);
  return (
    <MFMapView
      ref={map}
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
      // style={styles.container}
    >
      <MarkerStore map={map} />
    </MFMapView>
  );
};

export default React.memo(Map);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
