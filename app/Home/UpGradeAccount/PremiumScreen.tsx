import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ToastAndroid, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import SettingCard from '../../../components/home/SettingCard';
import UpGradeCardPremium from '../../../components/home/UpGradeCardPremium';
// Icon
import { MaterialCommunityIcons, MaterialIcons, AntDesign, FontAwesome5, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';

const PremiumScreen = () => {
   return (
      // <SafeAreaView style={styles.safeView}>
      <LinearGradient
         colors={["plum", "#66ffff"]} // ["#192f6a","plum",] ["#66ffff", "#3b5998", "#192f6a"]
         style={styles.safeView}
         start={{ x: 0, y: 0.5 }}
         end={{ x: 0.5, y: 1 }}
      >

         <ScrollView style={{ height: '90%' }} showsVerticalScrollIndicator={false} >

            <View style={styles.container1} >
               <View style={styles.titleWrap} >
                  <Text style={styles.title}>GenTeach</Text>
                  <View style={styles.premiumWrap}>
                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>PREMIUM</Text>
                  </View>
               </View>

               <Text style={{ textAlign: 'center' }}>Trở thành người dùng ưu tú với nhiều tính năng ưu việt. Hãy nâng cấp trải nghiệm của mình với gói Premium!</Text>
            </View>

            <ScrollView horizontal={true} style={{ height: 200 }}>

               <TouchableOpacity ><UpGradeCardPremium title='Tiết kiệm 25%' month='12' price='3.199.000' /></TouchableOpacity>
               <TouchableOpacity><UpGradeCardPremium title='Phổ biến' month='1' price='349.000' /></TouchableOpacity>
               <TouchableOpacity><UpGradeCardPremium title='Tiết kiệm 30%' month='6' price='1.999.000' /></TouchableOpacity>

            </ScrollView>

            <View style={styles.containerPre}>
               <Text style={styles.benefitText}>Tính năng Premium</Text>

               <View style={styles.benefitPreWrap}>
                  <SettingCard
                     onPress={null}
                     name='Loại bỏ quảng cáo'
                     icon={<MaterialCommunityIcons name="advertisements-off" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Lưu trữ không giới hạn'
                     icon={<AntDesign name="clouddownloado" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Freeship 5 lần'
                     icon={<FontAwesome5 name="shipping-fast" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Tùy chỉnh giao diện'
                     icon={<MaterialIcons name="dashboard-customize" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Đăng tải khóa học'
                     icon={<AntDesign name="book" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Đăng tải podcast'
                     icon={<FontAwesome name="podcast" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Chat không giới hạn'
                     icon={<Ionicons name="chatbubbles-outline" size={24} color="black" />}
                  />
               </View>

            </View>

         </ScrollView>

         <View style={styles.navbarBot}>
            <TouchableOpacity style={styles.upGradePreBtn} onPress={() => ToastAndroid.show('Nâng cấp tài khoản Premium thành công!', ToastAndroid.SHORT)}>
               <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Nâng cấp tài khoản</Text>
            </TouchableOpacity>
         </View>

      </LinearGradient>
      // </SafeAreaView>
   )
}

export default PremiumScreen

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      justifyContent: 'space-between'
   },


   // Premium screen
   container1: {
      height: 170,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },
   titleWrap: {
      height: 'auto',
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1
   },
   title: {
      fontSize: 40,
      fontWeight: 'bold'
   },

   premiumWrap: {
      height: 30,
      width: 100,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      // marginLeft: 10
   },


   // Benefit container
   containerPre: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1
   },

   benefitText: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 20,
      marginHorizontal: 10
   },
   benefitPreWrap: {
      height: 'auto',
      width: '97%',
      alignSelf: 'center',
      borderRadius: 10,
      borderWidth: 1
   },


   // Navbar bot
   navbarBot: {
      height: 70,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'plum',
      // borderWidth: 1
   },
   upGradePreBtn: {
      height: 50,
      width: '85%',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gold'
   },
})