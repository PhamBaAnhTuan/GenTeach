import { Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react';
// Icons
import { Feather, Ionicons } from '@expo/vector-icons';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useData } from '@/context/DataContext';
// Components
import PodcastCard from '@/components/podcast/PodcastCard';
import { LinearGradient } from 'expo-linear-gradient';

const Podcast = ({navigation}) => {
   // Theme
   const { theme } = useTheme();
   // Data
   const { podcastPopular, podcastSelfGrow, podcastLove } = useData();
   // Handle search
   const [search, setSearch] = useState('');
   const handleSearchChange = (text: string) => setSearch(text);
   const resetSearch = () => setSearch('');
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
         {/* <View style={styles.chatTitleContainer}>
            <Text style={[styles.chatTitle, { color: theme.text }]}>GenPodcast</Text>
         </View> */}

         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <ScrollView showsVerticalScrollIndicator={false}>

               <View style={styles.header}>
                  <View style={[styles.searchContainer, { backgroundColor: theme.gray }]}>
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

               <View style={styles.popularPodcastContainer}>
                  <View style={styles.popularPodcastTitleContainer}>
                     <Text style={[styles.popularPodcastTitle, { color: theme.text }]}>Podcast phổ biến</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.podcastContainer}>
                     <ScrollView horizontal={true}>
                        {podcastPopular.map((item: any, index: number) => (
                           <PodcastCard
                              onPress={() => navigation.navigate('PodcastDetail', {selectedPodcast: podcastPopular[index]}) }
                              key={index}
                              img={{ uri: item.img }}
                              name={item.name}
                              author={item.author}
                           />
                        ))}

                     </ScrollView>
                  </View>
               </View>


               <View style={styles.popularPodcastContainer}>
                  <View style={styles.popularPodcastTitleContainer}>
                     <Text style={[styles.popularPodcastTitle, { color: theme.text }]}>Tình dục an toàn</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.podcastContainer}>
                     <ScrollView horizontal={true}>
                        {podcastSelfGrow.map((item: any, index: number) => (
                           <PodcastCard
                              onPress={() => navigation.navigate('PodcastDetail', {selectedPodcast: podcastSelfGrow[index]}) }
                              key={index}
                              img={{ uri: item.img }}
                              name={item.name}
                              author={item.author}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.popularPodcastContainer}>
                  <View style={styles.popularPodcastTitleContainer}>
                     <Text style={[styles.popularPodcastTitle, { color: theme.text }]}>Tình yêu đôi lứa</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.podcastContainer}>
                     <ScrollView horizontal={true}>
                        {podcastLove.map((item: any, index: number) => (
                           <PodcastCard
                              onPress={() => navigation.navigate('PodcastDetail', {selectedPodcast: podcastLove[index]})}
                              key={index}
                              img={{ uri: item.img }}
                              name={item.name}
                              author={item.author}
                           />
                        ))}
                     </ScrollView>
                  </View>
               </View>

               <View style={styles.popularPodcastContainer}>
                  <View style={styles.popularPodcastTitleContainer}>
                     <Text style={[styles.popularPodcastTitle, { color: theme.text }]}>Phát triển bản thân</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.podcastContainer}>
                     <ScrollView horizontal={true}>
                        {podcastLove.map((item: any, index: number) => (
                           <PodcastCard
                              onPress={null}
                              key={index}
                              img={{ uri: item.img }}
                              name={item.name}
                              author={item.author}
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

export default Podcast

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


   // Podcast title container
   chatTitleContainer: {
      height: '10%',
      width: '100%',
      // borderWidth: 1,
      // alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'plum'
   },
   chatTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingLeft: 10
   },


   // popular podcast container
   popularPodcastContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginTop: 10,
   },

   popularPodcastTitleContainer: {
      height: 40,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      // marginTop: 10
   },
   popularPodcastTitle: {
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


   // Podcast container
   podcastContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
   }
})