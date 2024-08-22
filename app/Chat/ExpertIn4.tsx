import { Dimensions, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ToastAndroid, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// Icons
import { AntDesign, Ionicons, Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
// Components
import SettingCard from '../../components/chat/SettingCard';
import Item from '@/components/chat/Item';

import { useRoute } from '@react-navigation/native';


const ExpertIn4 = ({ navigation }) => {
   const route = useRoute();
   const selectedExpert = route.params?.selectedExpert;

   const [theme, setTheme] = useState('Chủ đề sáng');
   const toggleTheme = () => {
      setTheme(theme === 'Chủ đề sáng' ? 'Chủ đề tối' : 'Chủ đề sáng');
      ToastAndroid.show(`Set ${theme} thành công`, ToastAndroid.SHORT);
   };

   const [notice, setNotice] = useState('Tắt');
   const [icon, setIcon] = useState<string>('notifications-outline');
   const toggleNotice = () => {
      setNotice(notice === 'Tắt' ? 'Bật' : 'Tắt');
      setIcon(icon === 'notifications-outline' ? 'notifications-off-outline' : 'notifications-outline');
      ToastAndroid.show(`${notice} thông báo`, ToastAndroid.SHORT);
   };

   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
            style={styles.gradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >

            <View style={styles.header}>
               <TouchableOpacity onPress={() => navigation.goBack()} >
                  <AntDesign name="arrowleft" size={25} color="black" />
               </TouchableOpacity>

               <TouchableOpacity>
                  <Entypo name="menu" size={25} color="black" />
               </TouchableOpacity>
            </View>

            <View style={styles.expertIn4Container}>
               <Image style={styles.avt} source={{ uri: selectedExpert.img }} />
               <Text style={styles.name}>{selectedExpert.name}</Text>
               <Text> {selectedExpert.role} </Text>
            </View>

            <View style={styles.optionContainer}>
               <Item
                  onPress={() => navigation.navigate('ExpertProfile', { selectedExpert })}
                  icon={<Ionicons name="person-outline" size={24} color="black" />}
                  name='Trang cá nhân'
               />
               <Item
                  onPress={null}
                  icon={<Feather name="search" size={24} color="black" />}
                  name='Tìm kiếm'
               />
               <Item
                  onPress={toggleNotice}
                  icon={<Ionicons name={icon} size={24} color="black" />}
                  name='Thông báo'
               />
               <Item
                  onPress={null}
                  icon={<Entypo name="dots-three-horizontal" size={24} color="black" />}
                  name='Tùy chỉnh'
               />
            </View>

            <View style={styles.container3}>
               <SettingCard
                  onPress={toggleTheme}
                  name='Chủ đề'
                  icon={<MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />}
               />
               <SettingCard
                  onPress={null}
                  name='Chế độ riêng tư'
                  icon={<Feather name="lock" size={24} color="black" />}
               />
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default ExpertIn4

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
      // backgroundColor: 'white',
   },

   gradient: {
      height: '100%',
      width: '100%'
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

   expertIn4Container: {
      height: '25%',
      width: 'auto',
      alignItems: "center",
      justifyContent: 'center',
      // borderWidth: 1
   },
   avt: {
      height: 90,
      width: 90,
      // borderWidth: 1,
      marginBottom: 10,
      borderRadius: 50
   },
   name: {
      fontSize: 20,
      fontWeight: 'bold',
      // borderWidth: 1
   },

   optionContainer: {
      height: '10%',
      width: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // borderWidth: 1
   },
   item: {
      height: 'auto',
      width: 80,
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   container3: {
      height: 'auto',
      width: '95%',
      borderWidth: 1,
      alignSelf: 'center',
      borderRadius: 10
   }
})