import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Context
import { useTheme } from '../../context/ThemeContext';
// Icons
import AntDesign from '@expo/vector-icons/AntDesign';


interface Props {
   onPress: any,
   img: any,
   name: string,
   isOnline: boolean,
   rate: number,
}

const ExpertCard = (props: Props) => {
   // Theme
   const { theme } = useTheme();
   return (
      <TouchableOpacity style={[styles.container, { backgroundColor: theme.bgcCard }]} onPress={props.onPress}>
         {/* <View style={{borderWidth: 1}}> */}
         <Image style={styles.itemImg} source={props.img} />
         {/* </View> */}

         <View style={styles.in4Container}>
            <Text style={[styles.expertName, { color: theme.white }]}>{props.name}</Text>

            <View style={styles.rateContainer}>
               <Text style={{fontSize: 13, fontWeight: 'bold', color: 'lightblue'}}>online</Text>
               <View style={styles.rateContainer}>
                  <Text style={[styles.rate, {color: theme.white}]}>{props.rate}</Text>
                  <AntDesign name="star" size={15} color="gold" />
               </View>
            </View>
         </View>
      </TouchableOpacity>
   )
}

export default ExpertCard

const styles = StyleSheet.create({
   container: {
      height: 200,
      width: 150,
      // borderWidth: 1,
      borderRadius: 10,
      // paddingHorizontal: 1,
      // paddingVertical: 5,
      marginHorizontal: 3,
      marginBottom: 10,
      justifyContent: 'space-around',
   },

   itemImg: {
      height: 140,
      width: 140,
      resizeMode: 'cover',
      borderRadius: 10,
      // borderWidth: 1,
      alignSelf: 'center',
      // marginTop: 5
   },


   // In4 container
   in4Container: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      alignSelf: 'center',
      paddingHorizontal: 5
   },

   expertName: {
      fontSize: 13,
      fontWeight: 'bold',
      // paddingVertical: 5,
      // borderWidth: 1
   },


   // Discount container
   discountContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      // justifyContent: 'space-between'
   },

   discountWrap: {
      height: 'auto',
      width: 40,
      // borderWidth: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10
   },

   freeShipWrap: {
      height: 'auto',
      width: 70,
      borderWidth: 1,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
   },


   // Rate container
   rateContainer: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   rate: {
      fontSize: 14,
      // color: 'tomato',
      fontWeight: '400'
   },

})