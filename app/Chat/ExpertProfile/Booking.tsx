import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
// Params
import { useRoute } from '@react-navigation/native';
// Icons
import { AntDesign, FontAwesome, Entypo, Ionicons, Fontisto } from '@expo/vector-icons';
// Calendar
import { Calendar } from 'react-native-calendars';
import Loading from '@/components/animations/Loading';

const Booking = ({ navigation }) => {
   const route = useRoute();
   const selectedExpert = route.params?.selectedExpert;
   // Calendar
   const [selectedDate, setSelectedDate] = useState('');
   const onDayPress = (day) => {
      setSelectedDate(day.dateString);
   };
   // Hide calendar
   const [isCalendarVisible, setIsCalendarVisible] = useState(false);
   const toggleCalendar = () => {
      setIsCalendarVisible(!isCalendarVisible);
   };
   // Time
   const [time, setTime] = useState('');
   // Loading
   const [loading, setLoading] = useState(false);
   const booking = () => {
      setLoading(true);
      setTimeout(() => {
         navigation.navigate('BookingDone', { selectedExpert, type: 'booking' });
         setLoading(false);
      }, 1000);
   }
   return (
      <SafeAreaView style={styles.safeView}>
         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >

            <ScrollView showsVerticalScrollIndicator={false} style={{ height: '90%', width: '100%' }}>
               <View style={styles.header}>
                  <TouchableOpacity onPress={() => navigation.goBack()} >
                     <AntDesign name="arrowleft" size={25} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                     <Text style={{ fontWeight: 'bold' }}>Booking</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                     <Entypo name="menu" size={25} color="black" />
                  </TouchableOpacity>
               </View>

               <View style={styles.expertImgContainer}>
                  <Image
                     style={styles.img1}
                     source={{ uri: selectedExpert.img }}
                     resizeMode="cover"
                  />

                  <View style={styles.wrap1}>
                     <Text style={styles.expertName}>{selectedExpert.name}</Text>
                     <Text style={{ opacity: 0.5 }}>{selectedExpert.role}</Text>
                  </View>
               </View>

               <View style={styles.inputContainer}>
                  <View style={styles.selectContainer}>
                     <Text style={styles.label}>Ngày khám:</Text>

                     <TouchableOpacity style={styles.picker} onPress={toggleCalendar}>
                        <Text>{selectedDate}</Text>
                     </TouchableOpacity>
                     {isCalendarVisible &&
                        <View style={styles.calendar}>
                           <Calendar
                              current={selectedDate}
                              onDayPress={onDayPress}
                              markedDates={{
                                 [selectedDate]: {
                                    selected: true,
                                    selectedColor: '#00adf5',
                                 },
                              }}
                              theme={{
                                 selectedDayBackgroundColor: '#00adf5',
                                 todayTextColor: '#00adf5',
                                 arrowColor: '#00adf5',
                              }}
                              monthFormat={'MM yyyy'}
                           />
                           <TouchableOpacity style={styles.doneBtn} onPress={toggleCalendar}>
                              <Text>Xong</Text>
                           </TouchableOpacity>
                        </View>
                     }
                  </View>

                  <View style={styles.selectContainer}>
                     <Text style={styles.label}>Giờ khám:</Text>

                     <View style={styles.picker}>
                        <Picker
                           selectedValue={time}
                           // style={styles.picker}
                           // itemStyle={styles.pickerItem}
                           onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
                        >
                           <Picker.Item label='7 a.m' value="7 a.m" />
                           <Picker.Item label='8 a.m' value="8 a.m" />
                           <Picker.Item label='9 a.m' value="9 a.m" />
                           <Picker.Item label='10 a.m' value="10 a.m" />
                           <Picker.Item label='11 a.m' value="11 a.m" />
                           <Picker.Item label='13 a.m' value="13 a.m" />
                           <Picker.Item label='14 a.m' value="14 a.m" />
                           <Picker.Item label='15 a.m' value="15 a.m" />
                           <Picker.Item label='16 a.m' value="16 a.m" />
                        </Picker>
                     </View>
                  </View>

                  <View style={styles.selectContainer}>
                     <Text style={styles.label}>Họ và tên:</Text>
                     <View style={styles.picker}>
                        <TextInput placeholder='Họ và tên' keyboardType='default' />
                     </View>
                  </View>

                  <View style={styles.selectContainer}>
                     <Text style={styles.label}>Số điện thoại liên hệ:</Text>
                     <View style={styles.picker}>
                        <TextInput placeholder='Số điện thoại' keyboardType='number-pad' />
                     </View>
                  </View>

                  <View style={styles.selectContainer}>
                     <Text style={styles.label}>Địa chỉ liên hệ:</Text>
                     <View style={styles.picker}>
                        <TextInput placeholder='Địa chỉ' keyboardType='default' />
                     </View>
                  </View>

                  <View style={styles.selectContainer}>
                     <Text style={styles.label}>Số bảo hiểm y tế:</Text>
                     <View style={styles.picker}>
                        <TextInput placeholder='Số bảo hiểm y tế' keyboardType='number-pad' />
                     </View>
                  </View>

               </View>
            </ScrollView>

            <View style={styles.bookingBtnContainer}>
               {loading === true ?
                  (<Loading />)
                  : (
                     <TouchableOpacity style={styles.bookingBtn} onPress={booking}>
                        <Text style={[styles.bookingText, {color: 'white'}]}>Đặt lịch khám</Text>
                     </TouchableOpacity>
                  )
               }
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default Booking

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
   },
   gradient: {
      height: '100%',
      width: '100%',
   },


   // Header
   header: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10
   },


   // Expert img
   expertImgContainer: {
      height: 100,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      // borderWidth: 1,
      // borderRadius: 10,
      // backgroundColor: '#bbe3ff',
      // marginBottom: 2
   },

   img1: {
      height: 70,
      width: 70,
      // marginLeft: 30,
      borderRadius: 50
   },

   wrap1: {
      marginLeft: 15
   },
   expertName: {
      fontSize: 20,
      fontWeight: 'bold',
      // marginLeft: 10
   },


   // Input container
   inputContainer: {
      height: 'auto',
      width: '98%',
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#bbe3ff',
      borderRadius: 10,
      paddingVertical: 10
   },

   selectContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginTop: 10
   },

   label: {
      fontSize: 14,
      fontWeight: 'bold',
      paddingLeft: 10,
      marginBottom: 2
   },
   picker: {
      height: 40,
      width: '95%',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      alignSelf: 'center',
      // alignItems: 'center',
      justifyContent: 'center',
   },
   pickerItem: {
      fontSize: 13,
      fontWeight: 'bold',
      alignItems: 'center',
      // justifyContent: 'center',
   },

   calendar: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1
   },

   selectedText: {
      marginTop: 20,
      fontSize: 18,
   },

   doneBtn: {
      height: 30,
      width: 70,
      // borderWidth: 1,
      borderRadius: 25,
      marginTop: 5,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00adf5'
   },


   // Booking btn container
   bookingBtnContainer: {
      height: '8%',
      width: '100%',
      marginBottom: '2%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   bookingBtn: {
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
   bookingText: {
      fontSize: 13,
      fontWeight: 'bold',
   }
})