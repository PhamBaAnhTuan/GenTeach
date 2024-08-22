import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Context
import { useTheme } from '@/context/ThemeContext';


interface Props{
   onPress: any,
   topicTitle: string,
}

const TopicCard = (props: Props) => {
   const { theme } = useTheme();
   return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
         <Text style={styles.topicTitle}>{props.topicTitle}</Text>
      </TouchableOpacity>
   )
}

export default TopicCard

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 0.3,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#bbe3ff',
      marginHorizontal: 5
   },

   topicTitle: {
      fontSize: 13,
      fontWeight: 'bold'
   }
})