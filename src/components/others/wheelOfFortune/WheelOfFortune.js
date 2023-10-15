import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import PropsWheelOfFortune from './item/PropsWheelOfFortune';

const participants = [
  '%10',
  '%20',
  '%30',
  '%40',
  '%50',
  '%60',
  '%70',
  '%90',
  'FREE',
];

const WheelOfFortune = () => {
  const [winnerValue, setWinnerValue] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [started, setStarted] = useState(false);
  const childRef = useRef(null);

  const buttonPress = () => {
    setStarted(true);
    childRef.current._onPress();
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
    childRef.current._tryAgain();
  };

  return (
    <ImageBackground
        source={require('./item/assets/images/bg_Lucky.png')}
         style={styles.container}>

        <View style={{alignItems:'center'}}>
            <Text style={styles.txtTitle}>Lucky Love Coffee</Text>
            <View 
                style={{}}>
                    <View style={{transform:[{scale:0.9}]}}>
                        <PropsWheelOfFortune
                            options={wheelOptions}
                            getWinner={(value, index) => {
                            setWinnerValue(value);
                            setWinnerIndex(index);
                        }}
                    />
                    </View>

                <Image source={require('./item/assets/images/Kimquay.png')} style={{
                    width:80,height:80,position:'absolute',top:'48%',left:'40%'
            }}/>
            </View>

        </View>

      {!started && (
        <View style={styles.startButtonView}>
          <TouchableOpacity
            onPress={() => buttonPress()}
            style={styles.startButton}>
            <Text style={styles.startButtonText}>Spin to win!</Text>
          </TouchableOpacity>
        </View>
      )}
      {winnerIndex !== null && (
        <View style={styles.winnerView}>
          {/* <Text style={styles.winnerText}>
            You win {participants[winnerIndex]}
          </Text> */}
          <TouchableOpacity onPress={tryAgain} style={styles.tryAgainButton}>
            <Text style={styles.tryAgainText}>TRY AGAIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
};

export default WheelOfFortune;

const styles = StyleSheet.create({
    txtTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FBF106',
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        
        textAlign: 'center',
        marginTop: 50,
    },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  startButtonView: {
    position: 'absolute',
  },
  startButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    // marginTop: 50,
    padding: 5,
  },
  startButtonText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  winnerView: {
    // position: 'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 30,
  },
  tryAgainButton: {
    padding: 5,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundColor: '#F68C1F',
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
