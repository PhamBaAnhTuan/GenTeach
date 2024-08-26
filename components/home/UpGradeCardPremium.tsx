import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
   title: string,
   month: string,
   price: number,
}

const UpGradeCardPremium = (props: Props) => {
   return (
      <View style={styles.premiumCardContainer}>
         <View style={styles.navbarPremium}>
            <Text style={styles.premiumCardSaving}>
               {props.title}
            </Text>
         </View>

         <View style={styles.premiumCardWrap}>
            <Text style={styles.premiumCardMonth}>{props.month} Tháng</Text>
            <Text style={styles.premiumCardPrice}>{props.price} VND</Text>
         </View>
      </View>
   )
}

export default UpGradeCardPremium

const styles = StyleSheet.create({
   // UpGradeCardPremium
   premiumCardContainer: {
      height: 200,
      width: 160,
      borderRadius: 20,
      backgroundColor: 'goldenrod',
      // backgroundColor: 'grey',
      borderColor: 'gold',
      borderWidth: 3,
      marginHorizontal: 5,
   },
   navbarPremium: {
      height: 40,
      width: '70%',
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 16,
      borderBottomEndRadius: 19,
      // borderWidth: 0.5,
   },
   premiumCardSaving: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
   },
   premiumCardWrap: {
      // height: '100%',
      alignItems: 'center',
      marginTop: 20,
      // borderWidth: 1
   },
   premiumCardMonth: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'gold',
      paddingTop: 10,
      // paddingHorizontal: 10,
      // borderWidth: 1
   },
   premiumCardPrice: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
   },
})