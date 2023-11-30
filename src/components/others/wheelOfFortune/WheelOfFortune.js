import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  ActivityIndicator,
  Dimensions,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropsWheelOfFortune from './item/PropsWheelOfFortune';
import {useDispatch, useSelector} from 'react-redux';
import {
  getChuanBiQuayRequest,
  getThemDiemChoUserRequest,
  getVongQuayMayManRequest,
} from '../../../redux/reducers/slices/vongQuayMayManSlice';
import ModelVongQuayMayMan from './ModelVongQuayMayMan';
import { useNavigation } from '@react-navigation/native';

// const participants = [
//   '%10',
//   '%20',
//   '%30',
//   '%40',
//   '%50',
//   '%60',
//   '%70',
//   '%90',
//   'FREE',
// ];

const WheelOfFortune = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = useSelector(state => state.vong_quay_may_man.isLoading);
  const chuanBiQuay = useSelector(state => state.vong_quay_may_man.chuanBiQuay);
  const participants = useSelector(state => state.vong_quay_may_man.dataLabel);
  const data = useSelector(state => state.vong_quay_may_man.data);
  const user = useSelector(state => state.users.user);
  const quayThanhCong = useSelector(
    state => state.vong_quay_may_man.quayThanhCong,
  );

  useEffect(() => {
    dispatch(getVongQuayMayManRequest());
  }, []);

  useEffect(() => {
    if (quayThanhCong && countSoLanQuay !== 0) {
      console.log('TRY AGAIN');
      setWinnerIndex(null);
      childRef.current._tryAgain();
      return;
    }
    if (quayThanhCong) {
      setStarted(true);
      childRef.current._onPress();
    }
  }, [quayThanhCong]);

  const [winnerValue, setWinnerValue] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [countSoLanQuay, setCountSoLanQuay] = useState(0);
  const [started, setStarted] = useState(false);
  const childRef = useRef(null);

  const buttonPress = () => {
    if (Math.floor(user.tich_diem / 100) <= 0) {
      Alert.alert('Bạn không đủ điểm', 'Hãy mua nhiều hơn để tích điểm nhé', [
        {text: 'OK'},
      ]);
      return;
    }
    dispatch(getChuanBiQuayRequest({id_user: user.id_user}));
  };

  const wheelOptions = {
    rewards: participants,
    knobSize: 30,
    borderWidth: 3,
    borderColor: '#F68C1F',
    innerRadius: 30,
    duration: 6000,
    backgroundColor: 'yellow',
    textAngle: 'horizontal',
    knobSource: require('./item/assets/images/knob.png'),
    onRef: ref => (childRef.current = ref),
  };

  const tryAgain = () => {
    setWinnerIndex(null);
    if (Math.floor(user.tich_diem / 100) <= 0) {
      Alert.alert('Bạn không đủ điểm', 'Hãy mua nhiều hơn để tích điểm nhé', [
        {text: 'OK'},
      ]);
      return;
    }
    dispatch(getChuanBiQuayRequest({id_user: user.id_user}));
  };

  return (
    <ImageBackground
      source={require('./item/assets/images/bg_Lucky.png')}
      style={styles.container}>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#F68C1F" />
        </View>
      ) : (
        <>
          <View style={{alignItems: 'center',justifyContent:'center'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  left:-32,
                  alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" style={[styles.txtTitle,{fontSize: 40, color: 'black'}]} />
              </TouchableOpacity>

              <Text style={styles.txtTitle}>Lucky Love Coffee</Text>
            </View>
            <View style={{}}>
              <View activeOpacity={0.6} style={{transform: [{scale: 0.9}]}}>
                <PropsWheelOfFortune
                  options={wheelOptions}
                  getWinner={(value, index) => {
                    setWinnerValue(value);
                    setWinnerIndex(index);
                  }}
                />
              </View>
            </View>
          </View>

          {winnerIndex !== null && (
            <View style={styles.winnerView}>
              {/* <Text style={styles.winnerText}>
                You win {participants[winnerIndex]}
              </Text> */}
              <TouchableOpacity
                onPress={tryAgain}
                style={styles.tryAgainButton}>
                <Text style={styles.tryAgainText}>Quay tiếp</Text>
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <ActivityIndicator size="large" color="#F68C1F" />
              </View>
              {/* // model vong quay may man */}
              <ModelVongQuayMayMan
                isVisible={winnerIndex !== null}
                data={data[winnerIndex]}
                onChangeSoLanQuay={() => setCountSoLanQuay(countSoLanQuay + 1)}
              />
            </View>
          )}

          {!started && (
            <View style={styles.winnerView}>
              <TouchableOpacity
                onPress={() => buttonPress()}
                style={styles.tryAgainButton}>
                <Text style={styles.tryAgainText}>Chạm vào để quay!</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Luot quay */}
          <View style={styles.luotQuayContainer}>
            <Text style={styles.textLuotQuay}>
              Lượt quay: {Math.floor(user.tich_diem / 100)}
            </Text>
          </View>

          <>
            {chuanBiQuay && (
              <>
                <View
                  style={{
                    alignItems: 'center',
                    position: 'absolute',
                    top: Dimensions.get('window').height / 2 - 50,
                    backgroundColor: 'transparent',
                  }}>
                  <ActivityIndicator size="large" color="#F68C1F" />
                </View>
              </>
            )}
          </>
        </>
      )}
    </ImageBackground>
  );
};

export default WheelOfFortune;

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FBF106',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  startButtonView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    padding: 10,
  },
  startButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    // marginTop: 50,
    padding: 5,
  },
  startButtonText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  winnerView: {
    // position: 'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  erText: {
    fontSize: 30,
  },
  tryAgainButton: {
    marginTop: 50,
    padding: 10,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundColor: '#F68C1F',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5,
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  luotQuayContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#F68C1F',
    alignItems: 'center',
  },
  textLuotQuay: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
