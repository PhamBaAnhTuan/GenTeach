import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { ImageSlider } from "react-native-image-slider-banner";
// Icons
import { Feather, Ionicons } from '@expo/vector-icons';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import { useData } from '@/context/DataContext';
// Components
import ItemCard from '../../components/shop/ItemCard';
import { useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import TypeCard from '@/components/shop/TypeCard';

const Shop = ({ navigation }) => {
   // Theme
   const { theme } = useTheme();
   // Data
   const { shopType, shopBCS, shopGel, shopBook } = useData();
   // Handle search
   const [search, setSearch] = useState('');
   const handleSearchChange = (text: string) => setSearch(text);
   const resetSearch = () => setSearch('');
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

                  <View style={styles.headerRight}>
                     <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Feather name="shopping-cart" size={22} color="black" />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Ionicons name="chatbox-outline" size={22} color="black" />
                     </TouchableOpacity>
                  </View>

               </View>

               <View style={styles.bannerContainer}>
                  <ImageSlider
                     data={[
                        {
                           img: require("../../assets/banner/banner4.jpg"),
                        },
                        {
                           img: require("../../assets/banner/banner6.jpg"),
                        },
                        {
                           img: require("../../assets/banner/banner8.jpg"),
                        },
                        {
                           img: require("../../assets/banner/banner7.png"),
                        },
                        {
                           img: require("../../assets/banner/banner3.jpg"),
                        },
                     ]}
                     localImg
                     autoPlay={true}
                     timer={5000}
                     preview={false}
                     showIndicator={false}
                     showHeader={false}
                     caroselImageStyle={{
                        resizeMode: "contain",
                        height: 150,
                        width: Dimensions.get('screen').width,
                        alignSelf: 'center'
                     }}
                  />
               </View>

               <View style={styles.categoryContainer}>
                  <View style={styles.titleContainer}>
                     <Text style={[styles.titleWrap, { color: theme.text }]}>Danh mục phổ biến</Text>
                     <TouchableOpacity style={styles.viewAllTextWrap}>
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>

                  <ScrollView horizontal={true}>
                     <View style={styles.categoryWrap}>
                        {shopType.map((type: any, index: number) => (
                           <TypeCard
                              key={index}
                              icon={{ uri: type.img }}
                              typeName={type.name}
                              onPress={null}
                           />
                        ))}
                        {shopType.map((type: any, index: number) => (
                           <TypeCard
                              key={index}
                              icon={{ uri: type.img }}
                              typeName={type.name}
                              onPress={null}
                           />
                        ))}
                     </View>
                  </ScrollView>
               </View>

               <View style={styles.itemCardContainer}>
                  <View style={styles.titleContainer}>
                     <Text style={[styles.titleWrap, { color: theme.text }]}>Bao cao su</Text>
                     <TouchableOpacity
                        style={styles.viewAllTextWrap}
                        onPress={() => navigation.navigate('ShopViewAll', { selectedItem: shopBCS, type: 'Shop', title: 'Bao cao su' })}
                     >
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>
                  <ScrollView horizontal={true}>
                     <View style={styles.itemCardWrap}>
                        {shopBCS.map((item: any, index: number) => (
                           <ItemCard
                              key={index}
                              onPress={() => navigation.navigate('ShopDetail', { selectedItem: shopBCS[index] })}
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
                  </ScrollView>
               </View>

               <View style={styles.itemCardContainer}>
                  <View style={styles.titleContainer}>
                     <Text style={[styles.titleWrap, { color: theme.text }]}>Gel bôi trơn</Text>
                     <TouchableOpacity
                        style={styles.viewAllTextWrap}
                        onPress={() => navigation.navigate('ShopViewAll', { selectedItem: shopGel, type: 'Shop', title: 'Gel bôi trơn' })}
                     >
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>
                  <ScrollView horizontal={true}>
                     <View style={styles.itemCardWrap}>
                        {shopGel.map((item: any, index: number) => (
                           <ItemCard
                              key={index}
                              onPress={() => navigation.navigate('ShopDetail', { selectedItem: shopGel[index] })}
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
                  </ScrollView>
               </View>

               <View style={styles.itemCardContainer}>
                  <View style={styles.titleContainer}>
                     <Text style={[styles.titleWrap, { color: theme.text }]}>Sách</Text>
                     <TouchableOpacity
                        style={styles.viewAllTextWrap}
                        onPress={() => navigation.navigate('ShopViewAll', { selectedItem: shopBook, type: 'Shop', title: 'Sách' })}
                     >
                        <Text style={[styles.viewAllText, { color: theme.text }]}>Xem thêm</Text>
                     </TouchableOpacity>
                  </View>
                  <ScrollView horizontal={true}>
                     <View style={styles.itemCardWrap}>
                        {shopBook.map((item: any, index: number) => (
                           <ItemCard
                              key={index}
                              onPress={() => navigation.navigate('ShopDetail', { selectedItem: shopBook[index] })}
                              img={{ uri: item.img }}
                              name={item.name}
                              brand={item.author}
                              discount={item.discount}
                              freeShip={item.freeship}
                              price={item.price}
                              sold={item.sold}
                           />
                        ))}
                     </View>
                  </ScrollView>
               </View>

            </ScrollView>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default Shop

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
   },


   // Header
   header: {
      height: 70,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      // borderWidth: 1
   },


   searchContainer: {
      height: 40,
      width: '75%',
      // borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-evenly',
      paddingHorizontal: 2
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
      paddingLeft: 3
   },


   // Header right
   headerRight: {
      height: 40,
      width: '20%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
   },


   // Banner container
   bannerContainer: {
      height: 150,
      width: '100%',
      // borderWidth: 1,
      alignItems: 'center',
      // marginVertical: 10
   },

   // Category
   categoryContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginTop: 20
   },

   categoryWrap: {
      height: 200,
      width: '100%',
      // borderWidth: 1,
      // flexDirection: 'row',
      flexWrap: 'wrap',
      // alignItems: 'center',
      justifyContent: 'space-evenly',
   },


   // Item card container
   itemCardContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      // marginTop: 10,
      justifyContent: 'space-between'
   },

   titleContainer: {
      height: 30,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
   },
   titleWrap: {
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

   itemCardWrap: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
   }
})