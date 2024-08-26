import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props{
   onPress: any,
   img: any,
   name: string,
   author: string,
}
const PodcastCard = (props: Props) => {
   return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
         <Image style={styles.podcastImg} source={props.img}/>
         <View style={styles.in4Container}>
            <Text style={styles.podcastName}>{props.name}</Text>
            <Text style={styles.authorName}>{props.author}</Text>
         </View>
      </TouchableOpacity>
   )
}

export default PodcastCard

const styles = StyleSheet.create({
   container:{
      height: 200,
      width: 150,
      // borderWidth: 1,
      borderRadius: 10,
      marginHorizontal: 7
   },

   podcastImg:{
      height: 150,
      width: 150,
      borderRadius: 10
   },


   // In4 container
   in4Container:{
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      // paddingLeft: 5
   },
   podcastName:{
      fontSize: 14,
      fontWeight: 'bold'
   },
   authorName:{
      fontSize: 12,
      fontWeight: '400'
   }
})