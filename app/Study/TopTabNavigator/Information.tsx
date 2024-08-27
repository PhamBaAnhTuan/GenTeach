import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useRoute } from '@react-navigation/native';

const Information = () => {
   const { theme } = useTheme();
   // Route get params
   const route = useRoute();
   const selectedCourse = route.params?.selectedCourse;
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <View style={[styles.container, { backgroundColor: theme.white }]}>
               <Text style={[styles.title, { color: theme.text }]}>Người xây dựng khóa học</Text>
               <View style={styles.in4Container}>
                  <Image style={styles.authorImg} source={require('../../../assets/background/Logo.png')} resizeMode='cover' />
                  <View style={styles.authorInfo}>
                     <Text style={[styles.authorName, { color: theme.text }]}>GenTeach</Text>
                     <Text style={[styles.role, { color: theme.text }]}>Giảng viên ngành y Đại học Đông Á</Text>
                  </View>
               </View>
            </View>

            <View style={[styles.container, { backgroundColor: theme.white }]}>
               <Text style={[styles.title, { color: theme.text }]}>Mô tả khóa học</Text>
               <Text style={{textAlign: 'justify'}}>{selectedCourse.description}</Text>
            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default Information

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // justifyContent: 'space-between'
   },

   container: {
      height: 'auto',
      width: '98%',
      alignSelf: 'center',
      // alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 5,
      // borderWidth: 1
   },
   title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
      paddingLeft: 5
   },


   // In4 container
   in4Container: {
      height: 80,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between'
   },
   authorImg: {
      height: 70,
      width: 70,
      borderRadius: 50,
      marginHorizontal: 10,
   },
   authorInfo: {
      height: '100%',
      width: 'auto',
      // borderWidth: 1,
      justifyContent: 'center',
   },
   authorName: {
      fontSize: 14,
      fontWeight: 'bold',
   },
   role: {
      fontSize: 13,
   }
})