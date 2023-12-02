import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [countdown, setCountdown] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setHours(23, 59, 59);

    const calculateCountdown = () => {
      const now = new Date();
      const difference = Math.max(endDate.getTime() - now.getTime(), 0);

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    };

    const intervalId = setInterval(calculateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.label}>Giảm giá hôm nay</Text>
      <View style={styles.countdownContainer}>
        <Text style={styles.countdownText}>{countdown.hours}</Text>
        <Text style={styles.colon}> : </Text>
        <Text style={styles.countdownText}>{countdown.minutes}</Text>
        <Text style={styles.colon}> : </Text>
        <Text style={styles.countdownText}>{countdown.seconds}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'red',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginRight: 10,
  },
  countdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  countdownText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignSelf: 'center',
    backgroundColor: 'black',
  },
  colon: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'center',
  },
});

export default CountDown;
