import { Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Icons
import { AntDesign, FontAwesome, Entypo, Ionicons, Fontisto } from '@expo/vector-icons';
// Components
import Post from './Post';
import Course from './Course';
import Podcast from './Podcast';
// Context
import { useRoute } from '@react-navigation/native';

const TopTab = createMaterialTopTabNavigator();

const ExpertProfile = ({ navigation }) => {
   const route = useRoute();
   const selectedExpert = route.params?.selectedExpert;
   // Handle follow
   const [follow, setFollow] = useState('Theo dõi');
   const handleFollow = () => {
      follow === 'Theo dõi'
         ? (setFollow('Đã theo dõi'), ToastAndroid.show('Đã theo dõi', ToastAndroid.SHORT))
         : (setFollow('Theo dõi'), ToastAndroid.show('Hủy theo dõi', ToastAndroid.SHORT));
   }
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
            style={styles.gradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >

            <View style={styles.header}>
               <TouchableOpacity onPress={() => navigation.goBack()} >
                  <AntDesign name="arrowleft" size={25} color="black" />
               </TouchableOpacity>

               <TouchableOpacity>
                  <Entypo name="menu" size={25} color="black" />
               </TouchableOpacity>
            </View>

            <View style={styles.expertImgContainer}>
               <Image
                  style={styles.img1}
                  source={{ uri: selectedExpert.img }}
                  resizeMode="cover"
               />

               <View style={styles.wrap1}>
                  <Text style={styles.expertName}>{selectedExpert.name}</Text>
                  <Text style={{ opacity: 0.5 }}>{selectedExpert.role}</Text>
               </View>
            </View>

            <View style={styles.followerContainer}>
               <View style={styles.textWrap}>
                  <Text style={styles.number}>1999</Text>
                  <Text style={styles.text}>Người theo dõi</Text>
               </View>

               <View style={styles.textWrap}>
                  <Text style={styles.number}>99</Text>
                  <Text style={styles.text}>Đang theo dõi</Text>
               </View>

               <View style={styles.textWrap}>
                  <Text style={styles.number}>12</Text>
                  <Text style={styles.text}>Video</Text>
               </View>
               <View style={styles.textWrap}>
                  <Text style={styles.number}>12</Text>
                  <Text style={styles.text}>Khóa học</Text>
               </View>
            </View>

            <View style={styles.followBtnContainer}>
               <TouchableOpacity style={styles.followBtn} onPress={handleFollow}>
                  <Text style={styles.text3}>{follow}</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.followBtn} onPress={() => navigation.replace('ChatDetail', { selectedExpert })}>
                  <Text style={styles.text3}>Chat</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.followBtn} onPress={() => navigation.navigate('Booking', {selectedExpert})}>
                  <Text style={styles.text3}>Booking</Text>
               </TouchableOpacity>
            </View>

            <TopTab.Navigator
               screenOptions={{
                  tabBarLabelStyle: {
                     fontSize: 10,
                     fontWeight: 'bold',
                  },
                  tabBarShowLabel: false,
                  // tabBarShowIcon: false,
                  swipeEnabled: true,
                  tabBarStyle: {
                     backgroundColor: "plum",
                     marginTop: 15,
                  },
               }}
            >
               <TopTab.Screen name="Post" component={Post} options={{
                  tabBarIcon: ({ focused, size }) =>
                     <AntDesign name="appstore-o" size={24} color={focused ? 'white' : 'black'} />
               }} />
               <TopTab.Screen name="Course" component={Course} options={{
                  tabBarIcon: ({ focused, size }) =>
                     <AntDesign name="book" size={24} color={focused ? 'white' : 'black'} />
               }} />
               <TopTab.Screen name="Podcast" component={Podcast} options={{
                  tabBarIcon: ({ focused, size }) =>
                     <Ionicons name="headset-outline" size={24} color={focused ? 'white' : 'black'} />
               }} />
            </TopTab.Navigator>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default ExpertProfile;

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
   },
   gradient: {
      height: '100%',
      width: '100%',
   },


   header: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10
   },


   expertImgContainer: {
      height: '10%',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      // paddingLeft: 30
   },

   img1: {
      height: 70,
      width: 70,
      // marginLeft: 30,
      borderRadius: 50
   },

   wrap1: {
      marginLeft: 15
   },
   expertName: {
      fontSize: 20,
      fontWeight: 'bold',
      // marginLeft: 10
   },


   followerContainer: {
      height: 70,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingHorizontal: 5
   },

   textWrap: {
      height: '100%',
      width: '30%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   number: {
      fontSize: 20,
      fontWeight: 'bold',
      // marginLeft: 10
   },
   text: {
      fontSize: 12,
   },


   followBtnContainer: {
      height: 30,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      // marginBottom: 10
   },

   followBtn: {
      height: '100%',
      width: 100,
      // borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#bbe3ff',
   },
   text3: {
      fontSize: 12,
      fontWeight: 'bold',
   }
})