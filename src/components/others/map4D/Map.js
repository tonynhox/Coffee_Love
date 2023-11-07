import React, {useEffect, useRef} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';

import {MFMapView, MFDirectionsRenderer} from 'react-native-map4d-map';
import {useSelector} from 'react-redux';
import MarkerStore from './MarkerStore';
import { fetchDirections } from 'react-native-map4d-services';
import {key} from '../../../APIMap/key';
// var route = {
//   result: {
//     routes: [
//       {
//         legs: [
//           {
//             distance: {
//               text: '3.454km',
//               value: 3453.808,
//             },
//             duration: {
//               text: '6 phút 45 giây',
//               value: 405,
//             },
//             endAddress: 'Kết thúc!',
//             startAddress: '',
//             endLocation: {
//               lng: 106.62589,
//               lat: 10.85372,
//             },
//             startLocation: {
//               lng: 106.61948,
//               lat: 10.86121,
//             },
//             steps: [
//               {
//                 distance: {
//                   text: '224.713m',
//                   value: 224.713,
//                 },
//                 duration: {
//                   text: '40 giây',
//                   value: 40,
//                 },
//                 endLocation: {
//                   lng: 106.61745,
//                   lat: 10.86085,
//                 },
//                 startLocation: {
//                   lng: 106.61948,
//                   lat: 10.86121,
//                 },
//                 htmlInstructions: 'Tiếp tục',
//                 maneuver: 'straight',
//                 polyline: 'qihaAwbwiSBd@XzBh@rF',
//                 travelMode: 'motorcycle',
//                 streetName: '',
//               },
//               {
//                 distance: {
//                   text: '701.822m',
//                   value: 701.822,
//                 },
//                 duration: {
//                   text: '56 giây',
//                   value: 56,
//                 },
//                 endLocation: {
//                   lng: 106.62139,
//                   lat: 10.85638,
//                 },
//                 startLocation: {
//                   lng: 106.61745,
//                   lat: 10.86085,
//                 },
//                 htmlInstructions: 'Rẽ trái vào Tô Ký',
//                 maneuver: 'turn-left',
//                 polyline: 'ighaAavviSzAOnFk@n@OLGd@]`@e@dFsHh@o@f@w@rB_F',
//                 travelMode: 'motorcycle',
//                 streetName: 'Tô Ký',
//               },
//               {
//                 distance: {
//                   text: '149.925m',
//                   value: 149.925,
//                 },
//                 duration: {
//                   text: '27 giây',
//                   value: 27,
//                 },
//                 endLocation: {
//                   lng: 106.62263,
//                   lat: 10.85581,
//                 },
//                 startLocation: {
//                   lng: 106.62139,
//                   lat: 10.85638,
//                 },
//                 htmlInstructions: 'Tiếp tục theo Tô Ký, 15',
//                 maneuver: 'straight',
//                 polyline: 'kkgaAunwiSpBwF',
//                 travelMode: 'motorcycle',
//                 streetName: 'Tô Ký, 15',
//               },
//               {
//                 distance: {
//                   text: '581.098m',
//                   value: 581.098,
//                 },
//                 duration: {
//                   text: '1 phút 45 giây',
//                   value: 105,
//                 },
//                 endLocation: {
//                   lng: 106.62643,
//                   lat: 10.85239,
//                 },
//                 startLocation: {
//                   lng: 106.62263,
//                   lat: 10.85581,
//                 },
//                 htmlInstructions: 'Tiếp tục theo Tô Ký',
//                 maneuver: 'straight',
//                 polyline: 'yggaAmvwiSR]lB_F|@oBb@w@j@{@~@eAzAeAv@e@fEcB',
//                 travelMode: 'motorcycle',
//                 streetName: 'Tô Ký',
//               },
//               {
//                 distance: {
//                   text: '181.259m',
//                   value: 181.259,
//                 },
//                 duration: {
//                   text: '16 giây',
//                   value: 16,
//                 },
//                 endLocation: {
//                   lng: 106.62744,
//                   lat: 10.85114,
//                 },
//                 startLocation: {
//                   lng: 106.62643,
//                   lat: 10.85239,
//                 },
//                 htmlInstructions: 'Tiếp tục theo Cầu Vượt Quang Trung',
//                 maneuver: 'straight',
//                 polyline: 'mrfaAenxiSn@]rAm@r@c@j@q@Tg@',
//                 travelMode: 'motorcycle',
//                 streetName: 'Cầu Vượt Quang Trung',
//               },
//               {
//                 distance: {
//                   text: '501.89m',
//                   value: 501.89,
//                 },
//                 duration: {
//                   text: '48 giây',
//                   value: 48,
//                 },
//                 endLocation: {
//                   lng: 106.63178,
//                   lat: 10.84983,
//                 },
//                 startLocation: {
//                   lng: 106.62744,
//                   lat: 10.85114,
//                 },
//                 htmlInstructions: 'Tiếp tục theo Cầu vượt Quang Trung',
//                 maneuver: 'straight',
//                 polyline: 'sjfaAotxiSPu@r@{Gj@oERoATeA\\_AXk@p@_A',
//                 travelMode: 'motorcycle',
//                 streetName: 'Cầu vượt Quang Trung',
//               },
//               {
//                 distance: {
//                   text: '122.18m',
//                   value: 122.18,
//                 },
//                 duration: {
//                   text: '11 giây',
//                   value: 11,
//                 },
//                 endLocation: {
//                   lng: 106.63269,
//                   lat: 10.84918,
//                 },
//                 startLocation: {
//                   lng: 106.63178,
//                   lat: 10.84983,
//                 },
//                 htmlInstructions: 'Tiếp tục theo Quang Trung',
//                 maneuver: 'straight',
//                 polyline: 'mbfaAsoyiSp@aAnAsB',
//                 travelMode: 'motorcycle',
//                 streetName: 'Quang Trung',
//               },
//               {
//                 distance: {
//                   text: '138.953m',
//                   value: 138.953,
//                 },
//                 duration: {
//                   text: '14 giây',
//                   value: 14,
//                 },
//                 endLocation: {
//                   lng: 106.63188,
//                   lat: 10.84995,
//                 },
//                 startLocation: {
//                   lng: 106.63269,
//                   lat: 10.84918,
//                 },
//                 htmlInstructions: 'Quay đầu xe vào Quang Trung',
//                 maneuver: 'straight',
//                 polyline: 'k~eaAiuyiSSSeCtD',
//                 travelMode: 'motorcycle',
//                 streetName: 'Quang Trung',
//               },
//               {
//                 distance: {
//                   text: '667.713m',
//                   value: 667.713,
//                 },
//                 duration: {
//                   text: '1 phút ',
//                   value: 60,
//                 },
//                 endLocation: {
//                   lng: 106.62666,
//                   lat: 10.85237,
//                 },
//                 startLocation: {
//                   lng: 106.63188,
//                   lat: 10.84995,
//                 },
//                 htmlInstructions: 'Tiếp tục theo Cầu Vượt Quang Trung',
//                 maneuver: 'straight',
//                 polyline: 'ecfaAgpyiS{AfDU|@Qx@g@lDcAvJUt@O\\Y\\e@`@wAp@UF_@?',
//                 travelMode: 'motorcycle',
//                 streetName: 'Cầu Vượt Quang Trung',
//               },
//               {
//                 distance: {
//                   text: '4.148m',
//                   value: 4.148,
//                 },
//                 duration: {
//                   text: '1 giây',
//                   value: 1,
//                 },
//                 endLocation: {
//                   lng: 106.62665,
//                   lat: 10.8524,
//                 },
//                 startLocation: {
//                   lng: 106.62666,
//                   lat: 10.85237,
//                 },
//                 htmlInstructions: 'Tiếp tục theo Tô Ký, 15',
//                 maneuver: 'straight',
//                 polyline: 'irfaAsoxiSE@',
//                 travelMode: 'motorcycle',
//                 streetName: 'Tô Ký, 15',
//               },
//               {
//                 distance: {
//                   text: '92.175m',
//                   value: 92.175,
//                 },
//                 duration: {
//                   text: '11 giây',
//                   value: 11,
//                 },
//                 endLocation: {
//                   lng: 106.62631,
//                   lat: 10.85305,
//                 },
//                 startLocation: {
//                   lng: 106.62665,
//                   lat: 10.8524,
//                 },
//                 htmlInstructions: 'Ở bên phải',
//                 maneuver: 'keep-right',
//                 polyline: 'orfaAqoxiSYEMA[Ju@\\G`@',
//                 travelMode: 'motorcycle',
//                 streetName: '',
//               },
//               {
//                 distance: {
//                   text: '87.932m',
//                   value: 87.932,
//                 },
//                 duration: {
//                   text: '16 giây',
//                   value: 16,
//                 },
//                 endLocation: {
//                   lng: 106.62589,
//                   lat: 10.85372,
//                 },
//                 startLocation: {
//                   lng: 106.62631,
//                   lat: 10.85305,
//                 },
//                 htmlInstructions: 'Tiếp tục theo Tô Ký, 15',
//                 maneuver: 'straight',
//                 polyline: 'qvfaAmmxiSgB|@]T',
//                 travelMode: 'motorcycle',
//                 streetName: 'Tô Ký, 15',
//               },
//               {
//                 distance: {
//                   text: '0m',
//                   value: 0,
//                 },
//                 duration: {
//                   text: '',
//                   value: 0,
//                 },
//                 endLocation: {
//                   lng: 106.62589,
//                   lat: 10.85372,
//                 },
//                 startLocation: {
//                   lng: 106.62589,
//                   lat: 10.85372,
//                 },
//                 htmlInstructions: 'Kết thúc!',
//                 maneuver: 'finish',
//                 polyline: 'wzfaAyjxiS',
//                 travelMode: 'motorcycle',
//                 streetName: '',
//               },
//             ],
//           },
//         ],
//         overviewPolyline:
//           'qihaAwbwiSBd@XzBh@rFzAOnFk@n@OLGd@]`@e@dFsHh@o@f@w@rB_FpBwFR]lB_F|@oBb@w@j@{@~@eAzAeAv@e@fEcBn@]rAm@r@c@j@q@Tg@Pu@r@{Gj@oERoATeA\\_AXk@p@_Ap@aAnAsBSSeCtD{AfDU|@Qx@g@lDcAvJUt@O\\Y\\e@`@wAp@UF_@?E@YEMA[Ju@\\G`@gB|@]T',
//         summary: 'Tô Ký',
//         distance: {
//           text: '3.454km',
//           value: 3453.808,
//         },
//         duration: {
//           text: '6 phút 45 giây',
//           value: 405,
//         },
//         snappedWaypoints: [
//           {
//             lng: 106.61948,
//             lat: 10.86121,
//           },
//           {
//             lng: 106.62589,
//             lat: 10.85372,
//           },
//         ],
//       },
//     ],
//     waypointOrder: [],
//   },
//   code: 'ok',
// };

const Map = () => {
  const map = useRef(null);
  const data = useSelector(state => state.location);
  const myLocation = useSelector(state => state.locationMap.myLocation);
  const refRoute = useRef(null);

  // useEffect(() => {
  //   mapRef.current = map.current;
  // }, [map]);
  
//   const duongDi = (locationEnd) => fetchDirections({
//     origin: { latitude: myLocation.latitude, longitude: myLocation.longitude },
//     destination: { latitude: locationEnd.latitude, longitude: locationEnd.longitude },
//     mode: 'motorcycle',
//     weighting: 'balance',
//     language: 'vi',
//   }).then(response => {
//     if (response.code == 'ok') {
//     //   return response;
//         refRoute.current?.setDirections(JSON.stringify(response));
//     }
//     else {
//         console.log('response', response);
//         return Alert.alert('Thông báo', 'Không tìm thấy đường đi');
//     }
//   })

  const route = useSelector(state => state.locationMap.route);

  useEffect(() => {
    if(route.result)
    refRoute.current?.setDirections(JSON.stringify(route));
  }, [route]);

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
      <MarkerStore 
        map={map} 
        // duongDi={duongDi}
      
      />
      <MFDirectionsRenderer
        ref={refRoute}
        directions={JSON.stringify(route)}
        activeStrokeWidth={3}
        activeStrokeColor={'#00aaff'}
        activeOutlineColor={'#00aaff'}
      />
    </MFMapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    flex: 1,
  },
});
