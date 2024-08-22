import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Video, ResizeMode } from 'expo-av';

const AI = () => {
   const video = React.useRef(null);
   return (
      <Video
         ref={video}
         style={styles.video}
         source={require('../../assets/video/AI.mp4')}
         useNativeControls
         resizeMode={ResizeMode.COVER}
         shouldPlay={true}
         isLooping={true}
         useNativeControls={false}
      />
   )
}

export default AI

const styles = StyleSheet.create({
   video: {
      flex: 1,
      height: 70,
      width: 70,
      borderRadius: 100,
   }
})