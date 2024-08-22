import { Dimensions, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// Theme context
import { useTheme } from '../../context/ThemeContext';
// Icons
import { Entypo, AntDesign } from "@expo/vector-icons";
// Components
import ItemCart from '../../components/shop/ItemCart';

const Cart = ({ navigation }) => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
      <LinearGradient
        colors={["plum", "#66ffff"]}
        style={styles.safeView}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontWeight: 'bold' }}>Giỏ hàng của bạn</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="menu" size={25} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <ItemCart
            itemImg={require('../../assets/icons/coat.png')}
            itemName='Nike Coat'
            discount={20}
            price={21}
            sold={8365}
            star={4.5}
          />
          <ItemCart
            itemImg={require('../../assets/icons/jeans.png')}
            itemName='Vietgangz Pant'
            discount={10}
            price={26}
            sold={6887}
            star={5}
          />
          <ItemCart
            itemImg={require('../../assets/icons/soft-drink.png')}
            itemName='Soft drink'
            discount={5}
            price={2}
            sold={9943}
            star={4.7}
          />
          <ItemCart
            itemImg={require('../../assets/icons/sneakers.png')}
            itemName='Soft drink'
            discount={30}
            price={39}
            sold={6045}
            star={4.5}
          />
          <ItemCart
            itemImg={require('../../assets/icons/candy.png')}
            itemName='Sweet candy'
            discount={17}
            price={0.7}
            sold={2143}
            star={4.5}
          />
        </View>
        {/* </ScrollView> */}
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
    alignItems: 'center',
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