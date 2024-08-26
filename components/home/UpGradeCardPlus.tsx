import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
   title: string,
   month: string,
   price: number,
}

const UpGradeCardPlus = (props: Props) => {
   return (
      <View style={styles.plusCardContainer}>
         <View style={styles.navbarPlus}>
            <Text style={styles.plusCardSaving}>
               {props.title}
            </Text>
         </View>

         <View style={styles.plusCardWrap}>
            <Text style={styles.plusCardMonth}>{props.month} Tháng</Text>
            <Text style={styles.plusCardPrice}>{props.price} VND</Text>
         </View>
      </View>
   )
}

export default UpGradeCardPlus

const styles = StyleSheet.create({
   // UpGradeCardPlus
   plusCardContainer: {
      height: 200,
      width: 160,
      borderRadius: 20,
      backgroundColor: '#332352',
      // backgroundColor: 'grey',
      borderColor: '#b07cff',
      borderWidth: 3,
      marginHorizontal: 5,
   },
   navbarPlus: {
      height: 40,
      width: '70%',
      backgroundColor: '#b07cff',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 16,
      borderBottomEndRadius: 19,
      // borderWidth: 2,
   },
   plusCardSaving: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
   },
   plusCardWrap: {
      // height: '100%',
      alignItems: 'center',
      marginTop: 20,
      // borderWidth: 1
   },
   plusCardMonth: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#b07cff',
      paddingTop: 10,
      // paddingHorizontal: 10,
      // borderWidth: 1
   },
   plusCardPrice: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
      // paddingTop: 10,
      // paddingHorizontal: 10,
      // alignSelf: 'center',
      // borderWidth: 1
   },
})