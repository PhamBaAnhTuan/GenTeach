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
// Components
import RoadMapCard from '@/components/study/RoadMapCard';

const StudyDetail = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  // Route get params
  const route = useRoute();
  const selectedCourse = route.params?.selectedCourse;
  // Handle follow
  const [follow, setFollow] = useState('Theo dõi');
  const handleFollow = () => {
    follow === 'Theo dõi'
      ? (setFollow('Đã theo dõi'), ToastAndroid.show('Đã theo dõi', ToastAndroid.SHORT))
      : (setFollow('Theo dõi'), ToastAndroid.show('Hủy theo dõi', ToastAndroid.SHORT));
  }
  // Handle add to cart
  const addToCollection = () => {
    ToastAndroid.show('Đã thêm vào Bộ sưu tập', ToastAndroid.SHORT);
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
              <Text style={{ fontWeight: 'bold', color: 'black' }}>GenStudy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart', {type: 'collection'})}>
              <MaterialIcons name="collections-bookmark" size={24} color={theme.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.imgContainer}>
            <Image style={styles.itemImg} source={{ uri: selectedCourse.img }} />
          </View>

          <View style={[styles.in4Container, { backgroundColor: theme.white }]}>
            <View style={styles.in4Wrap}>
              <Text style={[styles.itemName, { color: theme.black }]}>{selectedCourse.name}</Text>
            </View>
          </View>

          <View style={[styles.in4Container, { backgroundColor: theme.white }]}>
            <View style={styles.in4Wrap}>
              {selectedCourse.isFree
                ?
                (
                  <>
                    <View style={[styles.freeWrap, { backgroundColor: theme.green }]}>
                      <Text style={[styles.freeText, { color: theme.white }]}>Free</Text>
                    </View>
                    <Text style={[styles.text, { color: theme.black }]}>Học viên {selectedCourse.member}</Text>
                  </>
                )
                :
                (<>
                  <Text style={styles.price}>{selectedCourse.price} VND</Text>
                  <Text style={[styles.text, { color: theme.black }]}>Học viên {selectedCourse.member}</Text>
                </>)
              }
            </View>

            <TouchableOpacity style={styles.brandContainer}>
              <TouchableOpacity >
                <Text style={[styles.brandName, { color: 'plum' }]} >
                  {selectedCourse.brand}
                  {selectedCourse.author}
                </Text >
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flBtn, { borderColor: theme.black }]} onPress={handleFollow} >
                <Text style={{ color: theme.black, fontSize: 11 }} >{follow}</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.in4Wrap}>
              <Text style={[styles.voucherText, { color: theme.black }]} >Lĩnh vực</Text>

              <View style={styles.voucherWrap}>
                <Text style={[styles.text, { color: theme.black }]}>{selectedCourse.field}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.in4Wrap}>
              <Text style={[styles.voucherText, { color: theme.black }]} >Giảm giá</Text>

              <View style={styles.voucherWrap}>
                <View style={styles.discountWrap}>
                  <Text style={{ fontSize: 11, fontWeight: 'bold', color: theme.white }}>{selectedCourse.discount}% off</Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.black} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.in4Wrap}>
              <Text style={[styles.voucherText, { color: theme.black }]} >Đánh giá</Text>

              <View style={styles.voucherWrap}>
                <Text style={[styles.text, { color: theme.black }]}>{selectedCourse.rate}</Text>
                <MaterialIcons name="star" size={21} color="gold" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.in4Wrap} >
              <Text style={[styles.voucherText, { color: theme.black }]} >Bình luận</Text>
              <View style={styles.voucherWrap}>
                <Text style={[styles.text, { color: theme.black }]}>20+ Bình luận</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.black} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.in4Container, { backgroundColor: theme.white }]}>
            <View style={styles.in4Wrap}>
              <Text style={[styles.voucherText, { color: theme.black }]} >Mô tả khóa học</Text>
            </View>

            <Text style={{ textAlign: 'justify' }}>{selectedCourse.description}</Text>
          </View>

          <View style={[styles.in4Container, { backgroundColor: theme.white }]}>
            <View style={styles.in4Wrap}>
              <Text style={[styles.voucherText, { color: theme.black }]} >Lộ trình</Text>
            </View>

            <RoadMapCard
              role={'StudyDetail'}
              title='Module 1:'
              content="Hiểu về Tình Yêu và Cảm Xúc"
              listen={false}
              read={false}
              watch={false}
              workShop={false}
              notice={9}
            />
            <RoadMapCard
              role={'StudyDetail'}
              title='Module 2:'
              content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
              listen={false}
              read={false}
              watch={false}
              workShop={false}
              notice={9}
            />
            <RoadMapCard
              role={'StudyDetail'}
              title='Module 3:'
              content="Xử Lý Tình Huống Phức Tạp và Nhận Biết Dấu Hiệu Cảnh Báo"
              listen={false}
              read={false}
              watch={false}
              workShop={false}
              notice={9}
            />
            <RoadMapCard
              role={'StudyDetail'}
              title='Workshop:'
              content="Xây Dựng và Duy Trì Mối Quan Hệ Lành Mạnh"
              listen={false}
              read={false}
              watch={false}
              workShop={false}
              notice={9}
            />
          </View>

        </ScrollView>

        <View style={styles.buyBtnContainer}>
          <View style={styles.leftContainer}>
            {/* <TouchableOpacity style={[styles.chatIcon, { borderColor: theme.white }]}>
              <Ionicons name="chatbox-outline" size={22} color={theme.white} />
            </TouchableOpacity> */}

            <TouchableOpacity style={[styles.collectIcon, { borderColor: theme.white }]} onPress={addToCollection}>
              <MaterialIcons name="collections-bookmark" size={24} color={theme.white} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buyBtn} onPress={() => navigation.navigate('TopTabNavigator', { selectedCourse: selectedCourse })}>
            <Text style={styles.buyText}>Đăng ký học</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </SafeAreaView>
  )
}

export default StudyDetail

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
    height: 170,
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
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    // borderWidth: 1,
    textAlign: 'justify'
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
  freeWrap: {
    height: 'auto',
    width: 'auto',
    // borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  freeText: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  // Voucher container
  in4Wrap: {
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
  collectIcon: {
    height: '80%',
    width: '100%',
    // borderLeftWidth: 0.5,
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