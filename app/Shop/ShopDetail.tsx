import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
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

const ShopDetail = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  // Auth
  const {cart, setCart, storeCart, user} = useAuth();
  // Route get params
  const route = useRoute();
  const selectedItem = route.params?.selectedItem;
  // Handle follow
  const [follow, setFollow] = useState('Theo dõi');
  const handleFollow = () => {
    follow === 'Theo dõi'
      ? (setFollow('Đã theo dõi'), ToastAndroid.show('Đã theo dõi', ToastAndroid.SHORT))
      : (setFollow('Theo dõi'), ToastAndroid.show('Hủy theo dõi', ToastAndroid.SHORT));
  }
  // Handle add to cart
  const addToCart = () => {
    setCart(selectedItem);
    // storeCart();
    // console.log(cart?.name);
    // console.log(user.userName);
    ToastAndroid.show('Đã thêm vào Giỏ hàng', ToastAndroid.SHORT);
  }
  return (
    <SafeAreaView style={styles.safeView}>
      <LinearGradient
        colors={["plum", "#66ffff"]}
        style={styles.safeView}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
              <AntDesign name="arrowleft" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>GenShop</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Feather name="shopping-cart" size={22} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.imgContainer}>
            <Image style={styles.itemImg} source={{ uri: selectedItem.img }} />
          </View>

          <View style={[styles.in4Container, { backgroundColor: theme.white }]}>
            <View style={styles.voucherContainer}>
              <Text style={[styles.itemName, { color: theme.black }]}>{selectedItem.name}</Text>
            </View>
          </View>

          <View style={[styles.in4Container, { backgroundColor: theme.white }]}>
            <View style={styles.voucherContainer}>
              <Text style={styles.price}>{selectedItem.price} VND</Text>
              <Text style={[styles.text, { color: theme.black, paddingRight: 5 }]}>Đã bán {selectedItem.sold}</Text>
            </View>

            <TouchableOpacity style={styles.brandContainer}>
              <TouchableOpacity >
                <Text style={[styles.brandName, { color: 'plum' }]} >
                  {selectedItem.brand}
                  {selectedItem.author}
                </Text >
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flBtn, { borderColor: theme.black }]} onPress={handleFollow} >
                <Text style={{ color: theme.black, fontSize: 11 }} >{follow}</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.voucherContainer}>
              <Text style={[styles.voucherText, { color: theme.black }]} >Loại</Text>

              <View style={styles.voucherWrap}>
                <Text style={[styles.text, { color: theme.black }]}>{selectedItem.type}</Text>
              </View>
            </TouchableOpacity>

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

          <View style={[styles.in4Container, { backgroundColor: theme.white }]}>
            <View style={styles.voucherContainer}>
              <Text style={[styles.voucherText, { color: theme.black }]} >Mô tả sản phẩm</Text>
            </View>

            <Text style={{ textAlign: 'justify' }}>{selectedItem.description}</Text>
          </View>

        </ScrollView>

        <View style={styles.buyBtnContainer}>
          <View style={styles.leftContainer}>
            <TouchableOpacity style={[styles.chatIcon, { borderColor: theme.white }]}>
              <Ionicons name="chatbox-outline" size={22} color={theme.white} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.cartIcon, { borderColor: theme.white }]} onPress={addToCart}>
              <FontAwesome name="cart-plus" size={24} color={theme.white} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buyBtn} onPress={() => navigation.navigate('BuyNow', { selectedItem: selectedItem })}>
            <Text style={styles.buyText}>Mua ngay</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </SafeAreaView>
  )
}

export default ShopDetail

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

  imgContainer: {
    height: 350,
    width: '98%',
    // borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },

  itemImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 5
  },


  // In4 container
  in4Container: {
    height: 'auto',
    width: '98%',
    // borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    // backgroundColor: 'gray',
    marginTop: 2,
    paddingHorizontal: 7,
    paddingVertical: 7
  },

  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    // borderWidth: 1,
  },


  // Brand container
  brandContainer: {
    height: 30,
    width: '100%',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  brandName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  flBtn: {
    height: 25,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    // marginLeft: 20,
  },

  // Price container
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'tomato',
    // borderWidth: 1,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    // paddingRight: 5
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

  discountWrap: {
    height: 'auto',
    width: 'auto',
    // borderWidth: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5
  },

  freeShipWrap: {
    height: 'auto',
    width: 'auto',
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },


  // Buy btn container
  buyBtnContainer: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  // Icon
  chatIcon: {
    height: '80%',
    width: '50%',
    borderRightWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    height: '80%',
    width: '50%',
    borderLeftWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },


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