import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
// Icons
import {
   FontAwesome,
   Entypo,
   MaterialIcons,
   FontAwesome6,
   Feather, AntDesign,
   Ionicons
} from "@expo/vector-icons";
// Route get params
import { useRoute } from "@react-navigation/native";
import RoadMapCard from '@/components/study/RoadMapCard';

const Lesson = ({ navigation }) => {
   // Theme
   const { theme } = useTheme();
   // Route get params
   const route = useRoute();
   const selectedCourse = route.params?.selectedCourse;
   // Slider
   const [value, setValue] = useState(0);
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
                  <Text style={[styles.title, {color: theme.text}]}>0% Tiến độ khóa học</Text>
                  <View style={styles.slider}></View>
               </View>
   
               <View style={styles.courseContainer}>
                  <Text style={[styles.title, {color: theme.text}]}>Giới thiệu và thông tin khóa học</Text>
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Module 1:'
                     content="Hiểu về Tình Yêu và Cảm Xúc"
                     listen={true}
                     read={true}
                     watch={true}
                     workShop={false}
                     notice={null}
                  />
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Module 2:'
                     content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
                     listen={true}
                     read={true}
                     watch={true}
                     workShop={false}
                     notice={null}
                  />
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Module 3:'
                     content="Xử Lý Tình Huống Phức Tạp và Nhận Biết Dấu Hiệu Cảnh Báo"
                     listen={true}
                     read={true}
                     watch={true}
                     workShop={false}
                     notice={null}
                  />
                  <RoadMapCard
                     role={'StudyNow'}
                     title='Workshop:'
                     content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
                     listen={false}
                     read={false}
                     watch={false}
                     workShop={true}
                     notice={'Hãy nhắc tôi'}
                  />
               </View>
            </ScrollView>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default Lesson

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

   // Course container
   courseContainer: {
      height: 'auto',
      width: '98%',
      // borderWidth: 1,
      alignSelf: 'center',
      paddingVertical: 10,
      // marginBottom: 10
   },
})