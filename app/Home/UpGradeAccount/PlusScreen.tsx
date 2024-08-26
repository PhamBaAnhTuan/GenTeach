import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ToastAndroid, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import SettingCard from '../../../components/home/SettingCard';
import UpGradeCardPlus from '../../../components/home/UpGradeCardPlus';
// Icon
import { MaterialCommunityIcons, MaterialIcons, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';

const PlusScreen = () => {
   return (
      // <SafeAreaView style={styles.safeView}>
      <LinearGradient
         colors={["plum", "#66ffff"]}
         style={styles.safeView}
         start={{ x: 0, y: 0.5 }}
         end={{ x: 0.5, y: 1 }}
      >

         <ScrollView style={{ height: '90%' }} showsVerticalScrollIndicator={false}>

            <View style={styles.container1} >
               <View style={styles.titleWrap} >
                  <Text style={styles.title}>GenTeach</Text>
                  <View style={styles.plusWrap}>
                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>PLUS</Text>
                  </View>
               </View>

               <Text style={{ textAlign: 'center' }}>Trở thành người dùng ưu tú với nhiều tính năng nổi bật. Hãy nâng cấp trải nghiệm của mình với gói Plus!</Text>

            </View>

            <ScrollView horizontal={true} style={{ height: 200 }}>

               <TouchableOpacity><UpGradeCardPlus title='Tiết kiệm 25%' month='12' price='2.999.000' /></TouchableOpacity>
               <TouchableOpacity><UpGradeCardPlus title='Phổ biến' month='1' price='299.000' /></TouchableOpacity>
               <TouchableOpacity><UpGradeCardPlus title='Tiết kiệm 30%' month='6' price='1.399.000' /></TouchableOpacity>

            </ScrollView>

            <View style={styles.containerPlus}>
               <Text style={styles.benefitText}>Tính năng Plus</Text>

               <View style={styles.benefitPlusWrap}>
                  <SettingCard
                     onPress={null}
                     name='2 Khóa học miễn phí'
                     icon={<Entypo name="documents" size={24} color="black" />}
                  />

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
                     name='Freeship 3 lần'
                     icon={<FontAwesome5 name="shipping-fast" size={24} color="black" />}
                  />

                  <SettingCard
                     onPress={null}
                     name='Tùy chỉnh giao diện'
                     icon={<MaterialIcons name="dashboard-customize" size={24} color="black" />}
                  />

               </View>

            </View>

         </ScrollView>

         <View style={styles.navbarBot}>
            <TouchableOpacity style={styles.upGradePlusBtn} onPress={() => ToastAndroid.show('Nâng cấp tài khoản Plus thành công!', ToastAndroid.SHORT)}>
               <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Nâng cấp tài khoản</Text>
            </TouchableOpacity>
         </View>

      </LinearGradient>
      // </SafeAreaView>
   )
}

export default PlusScreen

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      justifyContent: 'space-between'
   },


   // Plus screen
   container1: {
      height: 170,
      width: '100%',
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

   plusWrap: {
      height: 30,
      width: 80,
      backgroundColor: '#a85cff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      // borderWidth: 1
   },


   containerPlus: {
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
   benefitPlusWrap: {
      height: 'auto',
      width: '97%',
      alignSelf: 'center',
      borderRadius: 10,
      borderWidth: 1
   },

   navbarBot: {
      height: 70,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'plum',
      // borderWidth: 1
   },
   upGradePlusBtn: {
      height: 50,
      width: '85%',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#b07cff'
   },
})