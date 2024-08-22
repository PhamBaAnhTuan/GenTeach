import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import LottieView from 'lottie-react-native';

const StickerDone = () => {
  return (
   <LottieView style={styles.icon} source={require('../../assets/animation/done.json')} autoPlay loop />
  )
}

export default StickerDone

const styles = StyleSheet.create({
   icon:{
      flex: 1,
      aspectRatio: 1,
   }
})