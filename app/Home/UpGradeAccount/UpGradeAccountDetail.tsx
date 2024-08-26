import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Icon
import { Ionicons, Entypo } from '@expo/vector-icons';
import PlusScreen from './PlusScreen';
import PremiumScreen from './PremiumScreen';

const TopTab = createMaterialTopTabNavigator();

const UpGradeAccountDetail = ({navigation}) => {
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0.5, y: 1 }}
         >

            <View style={{ height: "100%" }}>
               <TopTab.Navigator
                  screenOptions={{
                     // tabBarActiveTintColor: "#e91e63",
                     tabBarLabelStyle: { fontWeight: 'bold' },
                     swipeEnabled: true,
                     tabBarStyle: {
                        backgroundColor: "plum",
                     },
                     tabBarActiveTintColor: 'white',
                     tabBarInactiveTintColor: 'gray'
                  }}
               >
                  <TopTab.Screen name="Plus" component={PlusScreen} />
                  <TopTab.Screen name="Premium" component={PremiumScreen} />
               </TopTab.Navigator>
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default UpGradeAccountDetail

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      justifyContent: 'space-between'
   },
})