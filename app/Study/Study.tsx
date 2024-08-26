import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// Icons
import { Feather, Ionicons } from '@expo/vector-icons';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useData } from '@/context/DataContext';
// Components
import CourseCard from '@/components/study/CourseCard';
import TopicCard from '@/components/study/TopicCard';
import { LinearGradient } from 'expo-linear-gradient';

const Study = ({ navigation }) => {
   const { theme } = useTheme();
   // Data
   const { courseTopic, coursePopular } = useData();
   // Handle search
   const [search, setSearch] = useState('');
   const handleSearchChange = (text: string) => setSearch(text);
   const resetSearch = () => setSearch('');
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
         {/* <View style={styles.studyTitleContainer}>
            <Text style={[styles.studyTitle, { color: theme.text }]}>GenStudy</Text>
         </View> */}

         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >

            <ScrollView showsVerticalScrollIndicator={false}>

               <View style={styles.header}>
                  <View style={[styles.searchContainer, { backgroundColor: theme.pink }]}>
                     <TouchableOpacity style={styles.icon}>
                        <Feather name="camera" size={24} color="black" />
                     </TouchableOpacity>

                     <TextInput
                        style={styles.searchInput}
                        placeholder='Tìm kiếm'
                        value={search}
                        onChangeText={handleSearchChange}
                     />

                     {search !== ''
                        ? (
                           <TouchableOpacity style={styles.xIcon} onPress={resetSearch}>
                              <Feather name="x-circle" size={20} color="black" />
                           </TouchableOpacity>
                        )
                        : null}
                  </View>
               </View>

               <View style={styles.topicContainer}>
                  <View style={styles.popularCourseTitleContainer}>
                     <Text style={[styles.popularCourseTitle, { color: theme.text }]}>Chủ đề</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.topicCardContainer}>
                     <ScrollView horizontal={true}>
                        {courseTopic.map((item: any, index: number) => (
                           <TopicCard
                              key={index}
                              onPress={null}
                              topicTitle={item.name}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.popularCourseContainer}>
                  <View style={styles.popularCourseTitleContainer}>
                     <Text style={[styles.popularCourseTitle, { color: theme.text }]}>Khóa học phổ biến</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap} onPress={() => navigation.navigate('ShopViewAll', { selectedCourse: coursePopular, type: 'Course', title: 'Khóa học phổ biến' })}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.courseContainer}>
                     <ScrollView horizontal={true}>
                        {coursePopular.map((course: any, index: number) => (
                           <CourseCard
                              key={index}
                              onPress={() => navigation.navigate('StudyDetail', { selectedCourse: coursePopular[index] })}
                              img={{ uri: course.img }}
                              authorImg={{ uri: course.authorImg }}
                              author={course.author}
                              name={course.name}
                              price={course.price}
                              isFree={course.isFree}
                              field={course.field}
                              rate={course.rate}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.popularCourseContainer}>
                  <View style={styles.popularCourseTitleContainer}>
                     <Text style={[styles.popularCourseTitle, { color: theme.text }]}>Tình yêu</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap} onPress={() => navigation.navigate('ShopViewAll', { selectedCourse: coursePopular, type: 'Course', title: 'Tình yêu' })}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.courseContainer}>
                     <ScrollView horizontal={true}>
                        {coursePopular.map((course: any, index: number) => (
                           <CourseCard
                              key={index}
                              onPress={() => navigation.navigate('StudyDetail', { selectedCourse: coursePopular[index] })}
                              img={{ uri: course.img }}
                              authorImg={{ uri: course.authorImg }}
                              author={course.author}
                              name={course.name}
                              price={course.price}
                              isFree={course.isFree}
                              field={course.field}
                              rate={course.rate}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.popularCourseContainer}>
                  <View style={styles.popularCourseTitleContainer}>
                     <Text style={[styles.popularCourseTitle, { color: theme.text }]}>Phát triển bản thân</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap} onPress={() => navigation.navigate('ShopViewAll', { selectedCourse: coursePopular, type: 'Course', title: 'Phát triển bản thân' })}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.courseContainer}>
                     <ScrollView horizontal={true}>
                        {coursePopular.map((course: any, index: number) => (
                           <CourseCard
                              key={index}
                              onPress={() => navigation.navigate('StudyDetail', { selectedCourse: coursePopular[index] })}
                              img={{ uri: course.img }}
                              authorImg={{ uri: course.authorImg }}
                              author={course.author}
                              name={course.name}
                              price={course.price}
                              isFree={course.isFree}
                              field={course.field}
                              rate={course.rate}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

            </ScrollView>
         </LinearGradient>

      </SafeAreaView>
   )
}

export default Study

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
      // borderWidth: 1
   },


   // Header
   header: {
      height: 70,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },

   searchContainer: {
      height: 40,
      width: '95%',
      // borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'center',
      // paddingLeft: 5
   },
   icon: {
      height: 30,
      width: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },
   xIcon: {
      height: 30,
      width: '10%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   searchInput: {
      height: '100%',
      width: '80%',
      // borderWidth: 1,
      // marginLeft: 5,
      // paddingLeft: 5,
      alignSelf: 'center'
   },
   searchInput1: {
      height: '100%',
      width: '75%',
   },


   // Topic container
   topicContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      // marginTop: 10
   },
   topicCardContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
   },


   // Popular course container
   popularCourseContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginTop: 10
   },

   popularCourseTitleContainer: {
      height: 40,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
   },
   popularCourseTitle: {
      fontSize: 14,
      fontWeight: 'bold',
   },

   viewAllTextWrap: {
      height: '60%',
      width: 'auto',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   viewAllText: {
      fontSize: 12,
      textDecorationLine: 'underline'
   },


   // Course container
   courseContainer: {
      height: 'auto',
      width: '100%',
      alignItems: 'center',
      // justifyContent: 'space-around',
      // borderWidth: 1,
   },
})