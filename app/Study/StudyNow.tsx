import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
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

const StudyNow = ({ navigation }) => {
   // Theme
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
            <View style={styles.header}>
               <TouchableOpacity onPress={() => navigation.goBack()} >
                  <AntDesign name="arrowleft" size={25} color="black" />
               </TouchableOpacity>
               <TouchableOpacity style={styles.titleContainer}>
                  <Text style={{ fontWeight: 'bold', color: 'gray' }}>{selectedCourse.author}</Text>
                  <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'black' }}>{selectedCourse.name}</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                  <Entypo name="menu" size={25} color="black" />
               </TouchableOpacity>
            </View>

            <View style={styles.courseContainer}>
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
         </LinearGradient>
      </SafeAreaView>
   )
}

export default StudyNow

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // justifyContent: 'space-between'
   },


   // Header
   header: {
      height: 60,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      // borderWidth: 1,
   },


   // Title container
   titleContainer: {
      height: '100%',
      width: 'auto',
      // borderWidth: 1,
      justifyContent: 'center',
   },


   // Course container
   courseContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      paddingHorizontal: 5,
      paddingVertical: 10,
   },
})