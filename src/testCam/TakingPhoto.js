import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import Camera from './Camera';
import VisionCamera from './VisionCamera';
import NoCameraDeviceError from './NoCameraDeviceError';

const TakingPhoto = () => {
  const camera = useRef(null);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);

  return (
    <>
      {isTakingPhoto ? (
        <VisionCamera ref={camera} photo={true} />
      ) : (
        <>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => setIsTakingPhoto(true)}>
              <Text>Taking Photo</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default TakingPhoto;

const styles = StyleSheet.create({});
