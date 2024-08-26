import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Lesson from './Lesson';
import HomeWork from './HomeWork';
import Information from './Information';
// Icons
import {
   FontAwesome,
   Entypo,
   MaterialIcons,
   FontAwesome6,
   Feather, AntDesign,
   Ionicons
} from "@expo/vector-icons";
// Param
import { useRoute } from '@react-navigation/native';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ navigation }) => {
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
               <View>
                  <Text style={{ fontWeight: 'bold', color: 'gray' }}>{selectedCourse.author}</Text>
                  <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>{selectedCourse.name}</Text>
               </View>
               <TouchableOpacity>
                  <Entypo name="menu" size={25} color="black" />
               </TouchableOpacity>
            </View>
            <Tab.Navigator
            initialRouteName='Lesson'
            screenOptions={{
               tabBarStyle: {
                  backgroundColor: 'plum'
               },
               tabBarLabelStyle:{
                  fontSize: 13,
                  fontWeight: 'bold'
               },
               tabBarActiveTintColor: 'white',
               tabBarInactiveTintColor: 'gray'
            }}>
               <Tab.Screen name="Khóa Học" component={Lesson} initialParams={{ selectedCourse: selectedCourse }} />
               <Tab.Screen name="Bài Tập" component={HomeWork} initialParams={{ selectedCourse: selectedCourse }}/>
               <Tab.Screen name="Thông Tin" component={Information} initialParams={{ selectedCourse: selectedCourse }}/>
            </Tab.Navigator>
         </LinearGradient>
      </SafeAreaView>
   );
}

export default TopTabNavigator;

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
})