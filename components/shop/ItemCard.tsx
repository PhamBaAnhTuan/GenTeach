import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Context
import { useTheme } from '../../context/ThemeContext';


interface Props {
   onPress: any,
   img: any,
   name: string,
   brand: string,
   discount: number,
   freeShip: boolean,
   price: number,
   sold: number
}

const ItemCard = (props: Props) => {
   // Theme
   const { theme } = useTheme();
   return (
      <TouchableOpacity style={[styles.container, { backgroundColor: theme.black }]} onPress={props.onPress}>
         <Image style={styles.itemImg} source={props.img} />

         <View style={styles.in4Container}>
            <Text style={[styles.itemName, { color: theme.white }]}>{props.name}</Text>
            <Text style={[styles.brandName, { color: theme.white }]}>{props.brand}</Text>

            <View style={styles.discountContainer}>
               <View style={styles.discountWrap}>
                  <Text style={{ fontSize: 11, fontWeight: 'bold', color: theme.white }}>{props.discount}% off</Text>
               </View>
               {props.freeShip ?
                  (<View style={[styles.freeShipWrap, { borderColor: 'lightgreen' }]}>
                     <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'lightgreen' }}>Free ship</Text>
                  </View>)

                  : null}
            </View>

            <View style={styles.priceContainer}>
               <Text style={styles.price}>{props.price} VND</Text>
               <Text style={[styles.sold, { color: theme.white }]}>Đã bán {props.sold}</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}

export default ItemCard

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: 170,
      // borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
      marginHorizontal: 3,
      justifyContent: 'space-around',
   },

   itemImg: {
      height: 160,
      width: 160,
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
      alignSelf: 'center'
   },

   itemName: {
      fontSize: 13,
      fontWeight: 'bold',
      textAlign: 'left'
      // paddingVertical: 5,
      // borderWidth: 1
   },
   brandName:{
      // height: 15,
      fontSize: 10,
      // fontWeight: 'bold',
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
      width: 'auto',
      // borderWidth: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      paddingHorizontal: 5
   },

   freeShipWrap: {
      height: 'auto',
      width: 70,
      borderWidth: 1,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
   },


   // Price container
   priceContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginTop: 5,
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   price: {
      fontSize: 13,
      color: 'tomato',
      fontWeight: '500'
   },
   sold: {
      fontSize: 10,
      color: 'black'
   }
})