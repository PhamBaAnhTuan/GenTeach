import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Course = () => {
   return (
      <LinearGradient
         colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
         style={styles.gradient}
         start={{ x: 0, y: 0.5 }}
         end={{ x: 1, y: 1 }}
      >
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container1}>
               <TouchableOpacity style={styles.wrap1}>
                  <Image style={styles.img1} source={require('../../../assets/background/logoGenTeach2.png')} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.wrap1}>
                  <Image style={styles.img1} source={require('../../../assets/background/logoGenTeach2.png')} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.wrap1}>
                  <Image style={styles.img1} source={require('../../../assets/background/logoGenTeach2.png')} />
               </TouchableOpacity>
            </View>

            <View style={styles.container1}>
               <TouchableOpacity style={styles.wrap1}>
                  <Image style={styles.img1} source={require('../../../assets/background/logoGenTeach2.png')} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.wrap1}>
                  <Image style={styles.img1} source={require('../../../assets/background/logoGenTeach2.png')} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.wrap1}>
                  <Image style={styles.img1} source={require('../../../assets/background/logoGenTeach2.png')} />
               </TouchableOpacity>
            </View>

            <View style={styles.container1}>
               <TouchableOpacity style={styles.wrap1}>
                  <Image style={styles.img1} source={require('../../../assets/background/logoGenTeach2.png')} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.wrap1}>
                  <Image style={styles.img1} source={require('../../../assets/background/logoGenTeach2.png')} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.wrap1}>
                  <Image style={styles.img1} source={require('../../../assets/background/logoGenTeach2.png')} />
               </TouchableOpacity>
            </View>
         </ScrollView>
      </LinearGradient>
   )
}

export default Course

const styles = StyleSheet.create({
   gradient: {
      flex: 1
   },


   container1: {
      height: 120,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
   },

   wrap1: {
      height: '100%',
      width: '33%',
      borderWidth: 0.2
   },
   img1: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain'
   }
})