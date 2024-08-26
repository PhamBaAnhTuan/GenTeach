import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Icons
import { Ionicons, AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
// Theme
import { useTheme } from '../../context/ThemeContext';

interface Props {
   title: string,
   content: string,
   listen: boolean,
   read: boolean,
   watch: boolean,
   workShop: boolean,
   notice: any,
   role: string,
}
const RoadMapCard = (props: Props, role: any) => {
   const { theme } = useTheme();
   return (
      <TouchableOpacity style={[styles.container, props.role === 'StudyDetail' ? styles.studyDetail : [styles.studyNow, {backgroundColor: theme.white}]]}>
         <Text style={styles.title}>{props.title}</Text>

         <Text style={styles.text}>{props.content}</Text>

         <View style={styles.wrapContainer}>
            {props.watch ?
               (<TouchableOpacity style={styles.wrap}>
                  <View style={styles.icon}>
                     <MaterialIcons name="ondemand-video" size={24} color="gray" />
                  </View>
                  <View style={styles.iconTitle}>
                     <Text>Xem</Text>
                  </View>
               </TouchableOpacity>)
               : null}

            {props.read ?
               (<TouchableOpacity style={styles.wrap}>
                  <View style={styles.icon}>
                     <AntDesign name="book" size={24} color="gray" />
                  </View>
                  <View style={styles.iconTitle}>
                     <Text>Đọc</Text>
                  </View>
               </TouchableOpacity>)
               : null}

            {props.listen ?
               (<TouchableOpacity style={styles.wrap}>
                  <View style={styles.icon}>
                     <Ionicons name="headset-outline" size={24} color="gray" />
                  </View>
                  <View style={styles.iconTitle}>
                     <Text>Nghe</Text>
                  </View>
               </TouchableOpacity>)
               : null}

            {props.workShop ?
               (<TouchableOpacity style={styles.wrapNotice}>
                  <View style={styles.icon}>
                     <Entypo name="calendar" size={24} color="gray" />
                  </View>
                  <View style={styles.iconTitle}>
                     <Text>{props.notice}</Text>
                  </View>
               </TouchableOpacity>)
               : null}
         </View>
      </TouchableOpacity>
   )
}

export default RoadMapCard

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      // borderBottomWidth: 0.5,
      marginBottom: 5
   },

   studyDetail: {

   },
   studyNow: {
      // backgroundColor: '#fef0ff',
      // borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 5,
      paddingVertical: 5
   },

   title: {
      fontSize: 14,
      fontWeight: 'bold',
      // textDecorationLine: 'underline',
      // paddingLeft: 5,
      color: '#db3a52',
      // color: '#240587'
   },

   text: {
      textAlign: 'justify',
      paddingBottom: 10
   },


   wrapContainer: {
      height: 'auto',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      // paddingVertical: 5,
   },

   wrap: {
      height: 30,
      width: 100,
      borderWidth: 1,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderColor: '#3b5998'
   },
   // 
   wrapNotice: {
      height: 30,
      width: 130,
      borderWidth: 1,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderColor: '#3b5998'
   },

   icon: {
      height: '100%',
      width: '35%',
      // borderWidth: 1,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
   },
   iconTitle: {
      height: '100%',
      width: '65%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   }
})