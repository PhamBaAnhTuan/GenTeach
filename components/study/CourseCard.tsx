import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Context
import { useTheme } from '@/context/ThemeContext';
// Icons
import AntDesign from '@expo/vector-icons/AntDesign';


interface Props {
   onPress: any,
   img: any,
   name: string,
   author: string,
   authorImg: any,
   field: string,
   rate: number,
   price: number,
   isFree: boolean
}

const CourseCard = (props: Props) => {
   const { theme } = useTheme();
   return (
      <TouchableOpacity style={[styles.container, { backgroundColor: theme.bgcCard }]} onPress={props.onPress}>
         <Image style={styles.courseImg} source={props.img} />

         <View style={styles.authorContainer}>
            <Image style={styles.authorImg} source={props.authorImg} />
            <Text style={[styles.authorName, { color: theme.white }]}>{props.author}</Text>
         </View>

         <View style={styles.courseNameContainer}>
            <Text style={[styles.courseName, { color: theme.white }]}>{props.name}</Text>
         </View>

         <View style={styles.freeContainer}>
            {props.isFree
               ? (
                  <View style={[styles.freeWrap, { backgroundColor: theme.green }]}>
                     <Text style={[styles.freeText, { color: theme.white }]}>Free</Text>
                  </View>
               )
               :
               (
                  <View>
                     <Text style={styles.priceText}>{props.price} VND</Text>
                  </View>
               )
            }
            <Text style={[styles.fieldText, { color: theme.white }]}>{props.field}</Text>

            <View style={styles.rateContainer}>
               <Text style={[styles.rateText, { color: theme.white }]}>{props.rate} </Text>
               <AntDesign name="star" size={20} color="gold" />
            </View>
         </View>
      </TouchableOpacity>
   )
}

export default CourseCard

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: 300,
      // borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 10,
      marginHorizontal: 5,
      marginBottom: 10,
   },

   courseImg: {
      height: 150,
      width: '100%',
      resizeMode: 'cover',
      borderRadius: 5
   },


   // Author container
   authorContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // paddingLeft: 10,
      marginTop: 15,
      marginBottom: 7
   },

   authorImg: {
      height: 40,
      width: 40,
      resizeMode: 'cover',
      borderRadius: 50,
   },
   authorName: {
      maxWidth: '90%',
      fontSize: 13,
      // fontWeight: 'bold',
      paddingLeft: 10,
      // borderWidth: 1
   },


   // Course name container
   courseNameContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      // paddingVertical: 5
   },
   courseName: {
      fontSize: 14,
      fontWeight: 'bold'
   },


   // Free container
   freeContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10
   },

   freeWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 2,
      alignItems: 'center',
      justifyContent: 'center',
   },
   freeText: {
      fontSize: 13,
      fontWeight: 'bold',
   },

   priceText:{
      fontSize: 13,
      fontWeight: '500',
      color: 'tomato'
   },

   fieldText: {
      maxWidth: '60%',
      fontSize: 12,
      fontWeight: '400',
      textAlign: 'center',
      // borderWidth: 1
   },

   // Rate container
   rateContainer: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // paddingHorizontal: 5
   },
   rateText: {
      fontSize: 13,
      fontWeight: '400',
      // marginRight: 10
   }
})