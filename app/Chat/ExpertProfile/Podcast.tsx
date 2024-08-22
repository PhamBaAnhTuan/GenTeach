import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Podcast = () => {
  return (
   <LinearGradient
         colors={["plum", "#66ffff"]}
         style={styles.gradient}
         start={{ x: 0, y: 0.5 }}
         end={{ x: 1, y: 1 }}
      >
         <View style={styles.container1}>
            <TouchableOpacity style={styles.wrap1}></TouchableOpacity>
            <TouchableOpacity style={styles.wrap1}></TouchableOpacity>
            <TouchableOpacity style={styles.wrap1}></TouchableOpacity>
         </View>
      </LinearGradient>
  )
}

export default Podcast

const styles = StyleSheet.create({
   gradient:{
      flex: 1
   },
})