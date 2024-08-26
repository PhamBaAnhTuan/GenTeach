import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useData } from '@/context/DataContext';
// Components
import ExpertCard from '../../components/chat/ExpertCard';
import AI from '@/components/animations/AI';
// Icons
import Feather from '@expo/vector-icons/Feather';

const Chat = ({ navigation }) => {
   // Theme
   const { theme } = useTheme();
   // Data
   const { mentalHealthExpert, sexualHealthExpert, physicalHealthExpert, dermatologistExpert } = useData();
   // Handle search
   const [search, setSearch] = useState('');
   const handleSearchChange = (text: string) => setSearch(text);
   const resetSearch = () => setSearch('');
   // AI icon
   const [isVisible, setIsVisible] = useState(true);
   useEffect(() => {
      const timer = setInterval(() => {
         setIsVisible((prevState) => !prevState);
      }, 5000);
      // setIsVisible(isVisible);
      return () => clearInterval(timer);
   }, []);
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

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
                        placeholder='Tìm kiếm chuyên gia'
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

               <View style={styles.expertHealthyContainer}>
                  <View style={styles.titleContainer}>
                     <Text style={[styles.fieldTitle, { color: theme.text }]}>Chuyên gia sức khỏe tâm lý</Text>
                     <TouchableOpacity onPress={() => navigation.navigate('ChatViewAll', { selectedExpert: mentalHealthExpert, type: 'Chuyên gia sức khỏe tâm lý' })}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.expertCardContainer}>
                     <ScrollView horizontal={true}>
                        {mentalHealthExpert.map((expert: any, index: number) => (
                           <ExpertCard
                              key={index}
                              onPress={() => navigation.navigate('ChatDetail', { selectedExpert: mentalHealthExpert[index] })}
                              img={{ uri: expert.img }}
                              name={expert.name}
                              isOnline={true}
                              rate={5}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.expertHealthyContainer}>
                  <View style={styles.titleContainer}>
                     <Text style={[styles.fieldTitle, { color: theme.text }]}>Chuyên gia sức khỏe tình dục</Text>
                     <TouchableOpacity onPress={() => navigation.navigate('ChatViewAll', { selectedExpert: sexualHealthExpert, type: 'Chuyên gia sức khỏe tình dục' })}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.expertCardContainer}>
                     <ScrollView horizontal={true}>
                        {sexualHealthExpert.map((expert: any, index: number) => (
                           <ExpertCard
                              key={index}
                              onPress={() => navigation.navigate('ChatDetail', { selectedExpert: sexualHealthExpert[index] })}
                              img={{ uri: expert.img }}
                              name={expert.name}
                              isOnline={true}
                              rate={5}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.expertHealthyContainer}>
                  <View style={styles.titleContainer}>
                     <Text style={[styles.fieldTitle, { color: theme.text }]}>Chuyên gia da liễu</Text>
                     <TouchableOpacity onPress={() => navigation.navigate('ChatViewAll', { selectedExpert: dermatologistExpert, type: 'Chuyên gia da liễu' })}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.expertCardContainer}>
                     <ScrollView horizontal={true}>
                        {dermatologistExpert.map((expert: any, index: number) => (
                           <ExpertCard
                              key={index}
                              onPress={() => navigation.navigate('ChatDetail', { selectedExpert: dermatologistExpert[index] })}
                              img={{ uri: expert.img }}
                              name={expert.name}
                              isOnline={true}
                              rate={5}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.expertHealthyContainer}>
                  <View style={styles.titleContainer}>
                     <Text style={[styles.fieldTitle, { color: theme.text }]}>Chuyên gia vật lý trị liệu</Text>
                     <TouchableOpacity onPress={() => navigation.navigate('ChatViewAll', { selectedExpert: physicalHealthExpert, type: 'Chuyên gia da liễu' })}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.expertCardContainer}>
                     <ScrollView horizontal={true}>
                        {physicalHealthExpert.map((expert: any, index: number) => (
                           <ExpertCard
                              key={index}
                              onPress={() => navigation.navigate('ChatDetail', { selectedExpert: physicalHealthExpert[index] })}
                              img={{ uri: expert.img }}
                              name={expert.name}
                              isOnline={true}
                              rate={5}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

            </ScrollView>

            <TouchableOpacity style={styles.aiContainer} onPress={() => navigation.navigate('ChatAI')}>
               <AI />
               {isVisible && <Text style={styles.aiText}>Xin chào, GenTech có thể giúp gì cho bạn?</Text>}
               {/* <Text style={styles.aiText}>Xin chào, GenTech có thể giúp gì cho bạn?</Text> */}
            </TouchableOpacity>

         </LinearGradient>

      </SafeAreaView>
   )
}

export default Chat

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


   // Expert container
   expertHealthyContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginBottom: 20
   },

   // Title container
   titleContainer: {
      height: 30,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
   },
   fieldTitle: {
      fontSize: 14,
      fontWeight: 'bold',
   },
   viewAllText: {
      fontSize: 12,
      textDecorationLine: 'underline'
   },


   // Expert card container
   expertCardContainer: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      // paddingHorizontal: 5
   },


   // AI container
   aiContainer: {
      height: 'auto',
      width: 'auto',
      position: 'absolute',
      // padding: 10,
      right: 10,
      bottom: 10,
      borderRadius: 50,
      // borderWidth: 1
   },
   aiText: {
      height: 'auto',
      width: 150,
      paddingHorizontal: 10,
      paddingVertical: 5,
      position: 'absolute',
      bottom: 60,
      right: 60,
      // borderWidth: 0.5,
      borderRadius: 10,
      borderBottomRightRadius: 0,
      backgroundColor: 'gray',
      fontSize: 13,
      fontWeight: 'bold',
      textAlign: 'left',
      color: 'white'
   },
})