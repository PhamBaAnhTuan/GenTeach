import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
// Params
import { useRoute } from '@react-navigation/native';
// Icons
import { Feather, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
// Context
import { useTheme } from '@/context/ThemeContext';
// Components
import ItemCard from '@/components/shop/ItemCard';
import CourseCard from '@/components/study/CourseCard';

const ShopViewAll = ({ navigation }) => {
   // Theme
   const { theme } = useTheme();
   // Params
   const route = useRoute();
   const type = route.params?.type;
   const title = route.params?.title;
   const selectedItem = route.params?.selectedItem;
   const selectedCourse = route.params?.selectedCourse;
   // Handle search
   const [search, setSearch] = useState('');
   const handleSearchChange = (text: string) => setSearch(text);
   const resetSearch = () => setSearch('');
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <ScrollView>
               <View style={styles.header}>
                  <TouchableOpacity onPress={() => navigation.goBack()} >
                     <AntDesign name="arrowleft" size={25} color="black" />
                  </TouchableOpacity>

                  <TouchableOpacity>
                     <Entypo name="menu" size={25} color="black" />
                  </TouchableOpacity>
               </View>

               <View style={styles.searchContainer}>
                  <View style={[styles.searchWrap, { backgroundColor: theme.pink }]}>
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

               {type === 'Shop' ? (
                  <>
                     <Text style={styles.titleText}>{title}</Text>
                     <View style={styles.itemContainer}>
                        {selectedItem.map((item: any, index: number) => (
                           <ItemCard
                              key={index}
                              onPress={() => navigation.navigate('ShopDetail', { selectedItem: selectedItem[index] })}
                              img={{ uri: item.img }}
                              name={item.name}
                              brand={item.type}
                              discount={item.discount}
                              freeShip={item.freeship}
                              price={item.price}
                              sold={item.sold}
                           />
                        ))}
                        {selectedItem.map((item: any, index: number) => (
                           <ItemCard
                              key={index}
                              onPress={() => navigation.navigate('ShopDetail', { selectedItem: selectedItem[index] })}
                              img={{ uri: item.img }}
                              name={item.name}
                              brand={item.type}
                              discount={item.discount}
                              freeShip={item.freeship}
                              price={item.price}
                              sold={item.sold}
                           />
                        ))}
                     </View>
                  </>
               )
                  : (
                     <>
                        <Text style={styles.titleText}>{title}</Text>
                        <View style={styles.itemContainer}>
                           {selectedCourse.map((course: any, index: number) => (
                              <CourseCard
                                 key={index}
                                 onPress={null}
                                 img={{ uri: course.img }}
                                 authorImg={course.authorImg}
                                 author={course.author}
                                 name={course.name}
                                 price={course.price}
                                 isFree={course.isFree}
                                 field={course.field}
                                 rate={course.rate}
                              />
                           ))}
                           {selectedCourse.map((course: any, index: number) => (
                              <CourseCard
                                 key={index}
                                 onPress={null}
                                 img={{ uri: course.img }}
                                 authorImg={course.authorImg}
                                 author={course.author}
                                 name={course.name}
                                 price={course.price}
                                 isFree={course.isFree}
                                 field={course.field}
                                 rate={course.rate}
                              />
                           ))}
                        </View>
                     </>
                  )
               }

            </ScrollView>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default ShopViewAll

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
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

   // Search container
   searchContainer: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },

   searchWrap: {
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


   titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 10,
      paddingVertical: 5
   },

   itemContainer: {
      height: 'auto',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      // borderWidth: 1
   }
})