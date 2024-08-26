import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Icons
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';

interface Props {
   title: string,
   content: string,
   percents: number
}
const GradeCard = (props: Props) => {
   const { theme } = useTheme()
   return (
      <TouchableOpacity style={[styles.container, { backgroundColor: theme.white }]}>
         <View style={styles.icon}>
            <Ionicons name="chatbubbles-outline" size={24} color="black" />
         </View>
         <View style={styles.contentContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.contentText}>{props.content}</Text>
         </View>
         <View style={styles.icon}>
            <Text>{props.percents}%</Text>
         </View>
      </TouchableOpacity>
   )
}

export default GradeCard

const styles = StyleSheet.create({
   container: {
      height: 100,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 5
   },

   icon: {
      height: '100%',
      width: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },

   contentContainer: {
      height: '100%',
      width: '70%',
      // borderWidth: 1,
      justifyContent: 'center',
      // paddingLeft: 10
   },
   title: {
      fontSize: 14,
      fontWeight: 'bold',
      borderBottomWidth: 1
   },
   contentText: {
      fontSize: 13,
      paddingTop: 5
   }
})