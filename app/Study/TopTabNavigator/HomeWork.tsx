import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
// Components
import GradeCard from '@/components/study/GradeCard'

const HomeWork = () => {
   const { theme } = useTheme();
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <ScrollView showsVerticalScrollIndicator={false}>

               <View style={styles.progress}>
                  <Text style={[styles.title, { color: theme.text }]}>0% Tiến độ bài tập</Text>
                  <View style={styles.slider}></View>
               </View>

               <View style={styles.gradeCardContainer}>
                  <Text style={[styles.title, { color: theme.text }]}>Danh sách bài tập</Text>
                  <GradeCard
                     title='Tình yêu là gì?'
                     content='Thảo luận'
                     percents={3}
                  />
                  <GradeCard
                     title='Cảm xúc là gì?'
                     content='Thảo luận'
                     percents={3}
                  />
                  <GradeCard
                     title='Cách xây dựng và duy trì mối quan hệ lành mạnh'
                     content='Thảo luận'
                     percents={7}
                  />
                  <GradeCard
                     title='Nhận biết và xử lý tình huống'
                     content='Thảo luận'
                     percents={5}
                  />
                  <GradeCard
                     title='Góc nhìn cá nhân về tình yêu đôi lứa'
                     content='Thảo luận'
                     percents={5}
                  />
               </View>

            </ScrollView>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default HomeWork

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
   },


   // Slider
   progress: {
      height: 'auto',
      width: '98%',
      // borderWidth: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      // paddingHorizontal: 5,
      paddingVertical: 20
   },
   title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
      paddingLeft: 5
   },
   slider: {
      height: 5,
      width: '98%',
      backgroundColor: '#ccc',
      borderRadius: 10,
      // marginVertical: 10,
      alignSelf: 'center',
   },


   // Grade card
   gradeCardContainer: {
      height: 'auto',
      width: '98%',
      alignSelf: 'center',
      // borderWidth: 1,
      paddingVertical: 10,
   }
})