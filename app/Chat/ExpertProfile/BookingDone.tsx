import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import StickerDone from '@/components/animations/StickerDone'
import { LinearGradient } from 'expo-linear-gradient';
// Params
import { useRoute } from '@react-navigation/native';
// Theme
import { useTheme } from '@/context/ThemeContext';

const BookingDone = ({ navigation }) => {
   // Theme
   const { theme } = useTheme();
   // Params
   const route = useRoute();
   const type = route.params?.type;
   const selectedExpert = route.params?.selectedExpert;
   // 
   const [showFirstComponent, setShowFirstComponent] = useState(true);
   const [showSecondComponent, setShowSecondComponent] = useState(false);
   useEffect(() => {
      if (showFirstComponent) {
         const timer = setTimeout(() => {
            setShowSecondComponent(true);
         }, 1000);

         return () => clearTimeout(timer);
      }
   }, [showFirstComponent]);
   // Back
   const goBack = () => {
      type === 'booking'
         ? navigation.navigate('Chat')
         : navigation.navigate('Shop')
   }
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <View style={styles.container}>
               {showFirstComponent &&
                  (
                     <View style={styles.doneIcon}>
                        <StickerDone />
                     </View>
                  )
               }
               {showSecondComponent &&
                  (
                     <View style={styles.textContainer}>
                        {type === 'booking'
                           ? <Text style={styles.text}>Lịch khám của bạn đang được gửi đến {selectedExpert.role} {selectedExpert.name}, vui lòng đợi đến khi nhận được thông báo!</Text>
                           : <Text style={styles.text}>Đặt hàng thành công!</Text>
                        }
                        <Text style={{ marginTop: 10 }}>Cảm ơn bạn đã tin tưởng và sử dụng GenTeach!</Text>
                     </View>
                  )
               }
            </View>

            {showSecondComponent &&
               (
                  <View style={styles.returnBtnContainer}>
                     <TouchableOpacity style={styles.returnBtn} onPress={goBack}>
                     <Text style={[styles.returnText, { color: theme.white }]}>Trở lại trang chủ</Text>
                  </TouchableOpacity>
                  </View>
         )
            }

      </LinearGradient>
      </SafeAreaView >
   )
}

export default BookingDone

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
      justifyContent: 'space-between'
   },
   gradient: {
      height: '100%',
      width: '100%',
   },


   container: {
      height: '90%',
      width: '100%',
      // borderWidth: 1,
   },
   doneIcon: {
      height: 300,
      width: '100%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   textContainer: {
      height: 200,
      width: '100%',
      // borderWidth: 1,
      alignItems: 'center',
      paddingHorizontal: 20,
   },
   text: {
      fontSize: 17,
      fontWeight: '500',
      textAlign: 'center',
   },


   // Booking btn container
   returnBtnContainer: {
      height: '10%',
      width: '100%',
      marginBottom: '2%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   returnBtn: {
      height: 45,
      width: '85%',
      // borderWidth: 1,
      borderRadius: 15,
      backgroundColor: 'plum',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: 'bold'
   },
   returnText: {
      fontSize: 13,
      fontWeight: 'bold',
   }
})