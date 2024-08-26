import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
// Icons
import {
   FontAwesome,
   Entypo,
   MaterialIcons,
   FontAwesome6,
   Feather, AntDesign,
   Ionicons
} from "@expo/vector-icons";
// Route get params
import { useRoute } from "@react-navigation/native";
// Components
import Loading from '@/components/animations/Loading';

const BuyNow = ({ navigation }) => {
   // Theme
   const { theme } = useTheme();
   // Route get params
   const route = useRoute();
   const type = route.params?.type;
   const selectedItem = route.params?.selectedItem;
   // Handle amount
   const [amount, setAmount] = useState(1);
   const Increase = () => setAmount(amount + 1)
   const Decrease = () => setAmount(amount !== 1 ? amount - 1 : amount)
   let totalPrice: number = selectedItem.price * amount;
   // Time
   const [method, setMethod] = useState('');
   // Loading
   const [loading, setLoading] = useState(false);
   const booking = () => {
      setLoading(true);
      setTimeout(() => {
         type === 'buy'
            ? navigation.navigate('BookingDone', { selectedItem: selectedItem, type: 'buy' })
            : navigation.navigate('BookingDone', { selectedItem: selectedItem, type: 'gift', name: name })
         setLoading(false);
      }, 500);
   };

   // handle input
   const [name, setName] = useState('');
   const textChange = (text: string) => setName(text);
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
               <TouchableOpacity>
                  {type === 'buy'
                     ? <Text style={{ fontWeight: 'bold', color: 'black' }}>Thanh toán</Text>
                     : <Text style={{ fontWeight: 'bold', color: 'black' }}>Tặng quà</Text>
                  }
               </TouchableOpacity>
               <TouchableOpacity>
                  <Entypo name="menu" size={25} color="black" />
               </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={styles.itemIn4Container}>
                  <Image style={styles.itemImg} source={{ uri: selectedItem.img }} />

                  <View style={styles.in4Container}>
                     <Text style={[styles.itemName, { color: theme.black }]}>{selectedItem.name}</Text>
                     <Text style={[styles.brandName, { color: theme.black }]}>{selectedItem.brand}</Text>

                     <View style={styles.discountContainer}>
                        <View style={styles.discountWrap}>
                           <Text style={{ fontSize: 11, fontWeight: 'bold', color: theme.white }}>{selectedItem.discount}% off</Text>
                        </View>
                        {selectedItem.freeship ?
                           (<View style={[styles.freeShipWrap, { borderColor: 'green' }]}>
                              <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'green' }}>Free ship</Text>
                           </View>)

                           : null}
                     </View>

                     <View style={styles.priceContainer}>
                        <Text style={styles.price}>{selectedItem.price} VND</Text>
                        <Text style={[styles.sold, { color: theme.black }]}>Đã bán {selectedItem.sold}</Text>
                     </View>

                     <View style={styles.amountContainer}>
                        <TouchableOpacity style={styles.icon} onPress={Decrease}>
                           <Text style={{ fontSize: 17, fontWeight: 'bold' }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ paddingHorizontal: 5 }}>{amount}</Text>
                        <TouchableOpacity style={styles.icon} onPress={Increase}>
                           <Text style={{ fontSize: 17, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>

               <View style={styles.container}>
                  <View style={styles.addressContainer}>
                     <Text style={[styles.voucherText, { color: theme.black }]}>Họ và tên người nhận</Text>
                     <TextInput style={styles.textInput} onChangeText={textChange} />
                  </View>
                  <View style={styles.addressContainer}>
                     <Text style={[styles.voucherText, { color: theme.black }]}>Địa chỉ nhận hàng</Text>
                     <TextInput style={styles.textInput} placeholder='Số nhà, Quận Huyện, Tỉnh Thành phố' />
                  </View>
                  <View style={styles.addressContainer}>
                     <Text style={[styles.voucherText, { color: theme.black }]}>Số điện thoại</Text>
                     <TextInput style={styles.textInput} keyboardType='number-pad' />
                  </View>
               </View>

               <View style={[styles.container, { backgroundColor: theme.white }]}>

                  <TouchableOpacity style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: theme.black }]} >Giảm giá</Text>

                     <View style={styles.voucherWrap}>
                        <View style={styles.discountWrap}>
                           <Text style={{ fontSize: 11, fontWeight: 'bold', color: theme.white }}>{selectedItem.discount}% off</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.black} />
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: theme.black }]} >Miễn phí vận chuyển</Text>

                     <View style={styles.voucherWrap}>
                        <View style={[styles.freeShipWrap, { borderColor: theme.green }]}>
                           <Text style={{ fontSize: 11, fontWeight: 'bold', color: theme.green }}>Free ship</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.black} />
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: theme.black }]} >Đánh giá</Text>

                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: theme.black }]}>{selectedItem.rate}</Text>
                        <MaterialIcons name="star" size={21} color="gold" />
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.voucherContainer} >
                     <Text style={[styles.voucherText, { color: theme.black }]} >Bình luận</Text>
                     <View style={styles.voucherWrap}>
                        <Text style={[styles.text, { color: theme.black }]}>20+ Bình luận</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.black} />
                     </View>
                  </TouchableOpacity>
               </View>

               <View style={styles.container}>
                  <View style={styles.voucherContainer}>
                     <Text style={[styles.voucherText, { color: theme.black }]} >Phương thức thanh toán</Text>
                  </View>

                  <View style={styles.picker}>
                     <Picker
                        selectedValue={method}
                        // style={styles.picker}
                        // itemStyle={styles.pickerItem}
                        onValueChange={(itemValue, itemIndex) => setMethod(itemValue)}
                     >
                        <Picker.Item label='Thanh toán khi nhận hàng' value="Thanh toán khi nhận hàng" />
                        <Picker.Item label='Thẻ tín dụng/Ghi nợ' value="Thẻ tín dụng/Ghi nợ" />
                        <Picker.Item label='Google Pay' value="Google Pay" />
                        <Picker.Item label='Zalo Pay' value="Zalo Pay" />
                        <Picker.Item label='Momo' value="Momo" />
                     </Picker>
                  </View>
               </View>
            </ScrollView>

            <View style={styles.buyBtnContainer}>
               {loading === true ?
                  (<Loading />)
                  : (
                     <>
                        <View style={styles.leftContainer}>
                           <Text style={[styles.price, { color: theme.white }]}>{totalPrice || 0} VND</Text>
                        </View>
                        <TouchableOpacity style={styles.buyBtn} onPress={booking}>
                           {type === 'buy'
                              ? <Text style={styles.buyText}>Đặt hàng</Text>
                              : <Text style={styles.buyText}>Tặng quà</Text>
                           }
                        </TouchableOpacity>
                     </>
                  )
               }
            </View>

         </LinearGradient>
      </SafeAreaView>
   )
}

export default BuyNow

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      justifyContent: 'space-between'
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


   // Item in 4 container
   itemIn4Container: {
      height: 'auto',
      width: '98%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      borderRadius: 5,
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginBottom: 2,
      // borderWidth: 1
   },

   // Item container
   itemImg: {
      height: 100,
      width: 100,
      borderRadius: 10,
      resizeMode: 'cover'
      // borderWidth: 1,
   },

   // In4 container
   in4Container: {
      height: '100%',
      width: '65%',
      // borderWidth: 1,
      // alignSelf: 'center',
   },
   itemName: {
      fontSize: 13,
      fontWeight: 'bold',
      // textAlign: 'left',
      // paddingVertical: 5,
      // borderWidth: 1
   },
   brandName: {
      // height: 15,
      fontSize: 10,
      // fontWeight: 'bold',
      // borderWidth: 1
   },

   // Discount container
   discountContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      // justifyContent: 'space-between'
   },
   discountWrap: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      paddingHorizontal: 5
   },
   freeShipWrap: {
      height: 'auto',
      width: 70,
      borderWidth: 1,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
   },

   // Price container
   priceContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      marginTop: 5,
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   price: {
      fontSize: 17,
      color: 'tomato',
      fontWeight: '500'
   },
   sold: {
      fontSize: 10,
      color: 'black'
   },

   // Amount container
   amountContainer: {
      height: 'auto',
      width: 'auto',
      borderWidth: 1,
      borderRadius: 3,
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
   },
   icon: {
      height: 'auto',
      width: 25,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },


   // Payment method container
   picker: {
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderRadius: 5,
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


   // Voucher container
   voucherContainer: {
      height: 'auto',
      width: '100%',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1,
      paddingVertical: 10
   },
   voucherText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white'
   },

   voucherWrap: {
      width: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1
   },


   // Container
   container: {
      height: 'auto',
      width: '98%',
      alignSelf: 'center',
      // alignItems: 'center',
      borderRadius: 5,
      backgroundColor: 'white',
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginBottom: 2,
      // borderWidth: 1
   },

   // Addres container
   addressContainer: {
      height: 'auto',
      width: '100%',
      borderRightColor: '#bbe3ff',
      paddingVertical: 5,
      // borderWidth: 1,
   },
   text: {
      fontSize: 12,
      fontWeight: 'bold',
      // borderWidth: 1,
   },
   textInput: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
   },


   // Buy btn container
   buyBtnContainer: {
      height: 55,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // marginBottom: 10,
      // borderWidth: 1,
   },

   leftContainer: {
      height: '100%',
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      // borderWidth: 1,
      backgroundColor: 'plum'
   },

   // Price
   // price: {
   //    fontSize: 20,
   //    fontWeight: "bold",
   //    color: 'white',
   //    // borderWidth: 1,
   // },

   buyBtn: {
      height: '100%',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      backgroundColor: 'tomato'
   },
   buyText: {
      fontWeight: '500',
      color: 'white'
   }
})