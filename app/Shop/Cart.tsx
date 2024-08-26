import { Dimensions, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// Theme context
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
// Icons
import { Entypo, AntDesign } from "@expo/vector-icons";
// Components
import ItemCart from '../../components/shop/ItemCart';
// Params
import { useRoute } from '@react-navigation/native';

const Cart = ({ navigation }) => {
  const { theme } = useTheme();
  // data
  const { cartEnd } = useAuth();
  // Params
  const route = useRoute();
  const type = route.params?.type;
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
            <TouchableOpacity onPress={() => navigation.goBack()} >
              <AntDesign name="arrowleft" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              {type === 'cart'
                ? <Text style={{ fontWeight: 'bold' }}>Giỏ hàng của bạn</Text>
                : <Text style={{ fontWeight: 'bold' }}>Bộ sưu tập của bạn</Text>
              }
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="menu" size={25} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            {cartEnd.map((item: any, index: number) => (
              <ItemCart
                key={index}
                itemImg={{ uri: item.img }}
                itemName={item.name}
                discount={item.discount}
                price={item.price}
                sold={item.sold}
                star={item.rate}
              />
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({
  safeView: {
    // backgroundColor: 'white',
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    // alignItems: 'center',
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


  // Item container
  itemContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
  }
})