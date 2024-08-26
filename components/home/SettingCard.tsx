import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";

interface Props{
   onPress: any,
   icon: any,
   name: string
}
const SettingCard = (props: Props) => {
   return (
      <TouchableOpacity onPress={props.onPress}>
         <View style={styles.settingWrap}>
            <View style={styles.wrapLeft}>
               <View style={{ opacity: 0.8, paddingHorizontal: 10, width: 50, alignItems: 'center' }}>{props.icon}</View>
               <Text style={styles.name}>{props.name}</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{ paddingHorizontal: 15 }} />
         </View>

         <View style={{ height: 0.7, width: 310, backgroundColor: 'black', alignSelf: 'center', opacity: 0.2 }}></View>
      </TouchableOpacity>
   );
};

export default SettingCard;

const styles = StyleSheet.create({
   // Setting card
   settingContainer: {
      height: 1000,
      width: '97%',
      borderWidth: 1,
      flexDirection: 'column',
      alignSelf: 'center',
      alignItems: 'center',
      // justifyContent: 'center',
      borderRadius: 10
   },
   settingWrap: {
      height: 55,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 20
      // borderWidth: 1,
   },
   wrapLeft: {
      width: 140,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
      // paddingHorizontal: 10
   },
   name: {
      // fontSize: 15,
      width: 170,
      marginLeft: 20,
      textAlign: 'left',
      // borderWidth: 1
   },
})