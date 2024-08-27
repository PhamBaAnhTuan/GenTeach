import { Dimensions, FlatList, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
// Icons
import { AntDesign, Feather, Ionicons, Entypo, FontAwesome6, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
// Firebase
import { auth } from '@/Firebase/FirebaseConfig';

const Home = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  const { user, setUser } = useAuth();
  // Sign out
  const signOutMethod = async () => {
    try {
      await auth.signOut();
      console.log("User signed out");
      // Navigation
      navigation.navigate("SignIn");
      // Show notification
      ToastAndroid.show('Đăng xuất thành công!', ToastAndroid.SHORT);
      setUser('');
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  // Handle follow
  const [follow, setFollow] = useState('Theo dõi');
  const setFL = () => {
    follow === 'Theo dõi'
      ? (setFollow('Đang theo dõi'), ToastAndroid.show('Đang theo dõi', ToastAndroid.SHORT))
      : (setFollow('Theo dõi'), ToastAndroid.show('Bỏ theo dõi', ToastAndroid.SHORT));
  };
  // Handle heart
  const [heart, setHeart] = useState('hearto');
  const [color, setColor] = useState(theme.text);
  const handleHeart = () => {
    setHeart(heart === 'hearto' ? 'heart' : 'hearto');
    setColor(color === theme.text ? 'red' : theme.text);
  };
  const arr = [1, 2, 3, 4, 5];
  const statusBar = Platform.OS === 'android' ? StatusBar.currentHeight : 44
  const renderItem = ({ item }) => (
    <View style={[{ flex: 1, height: Dimensions.get('screen').height - statusBar - 70 }]} >

      {/* <Video
        ref={videoRef}
        source={require('../../assets/video/video1.mp4')}
        // source={{
        // 	uri: item?.src
        // }}
        style={{ width: '100%', height: '100%' }}
        shouldPlay={true}
        resizeMode='cover'
        isLooping={false}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        isMuted={true}
      /> */}
      <Image source={require('../../assets/background/bg1.png')} style={{ width: '70%', height: '100%', resizeMode: 'contain', alignSelf: 'center' }} />

      <TouchableOpacity style={styles.personIcon} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.navbarInterAct}>
        <TouchableOpacity style={styles.likeWrap} onPress={handleHeart}>
          <AntDesign name={heart} size={25} color={color} />
          <Text style={styles.text1} >{item.like}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeWrap}>
          <FontAwesome6 name="comment-alt" size={25} color={theme.text} />
          <Text style={styles.text1} >{item.comment}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeWrap}>
          <Feather name="send" size={25} color={theme.text} />
          <Text style={styles.text1} >{item.share}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeWrap}>
          <Entypo name="dots-three-vertical" size={20} color={theme.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.captionContainer}>

        <View style={styles.in4Wrap}>
          <View style={styles.avtWrap}>
            <TouchableOpacity>
              <Image style={styles.avt} source={require('../../assets/background/Logo.png')} resizeMode="cover" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: theme.text, paddingLeft: 10 }}>GenTeach</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.flWrap, { borderColor: theme.text }]} onPress={setFL}>
            <Text style={{ fontSize: 11, color: theme.text }}>{follow}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.captionWrap}>
          <Text style={{ fontSize: 12, fontWeight: '400', color: theme.text }}>GenTeach cùng các chuyên gia chuyên ngành sẽ thiết kế video giáo dục giới tính.</Text>
        </View>

      </View>

      <View style={styles.musicWrap}>
        <TouchableOpacity style={[styles.musicBox, { borderColor: theme.text }]}>
          <FontAwesome name="music" size={15} color={theme.text} />
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10, color: theme.text }}>GenTeach music</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/background/Logo.png')} resizeMode="center" style={styles.musicImg} />
        </TouchableOpacity>
      </View>
    </View>

  );
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
      <LinearGradient
        colors={["plum", "#66ffff"]}
        style={styles.safeView}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <StatusBar backgroundColor={theme.statusbarTheme} />
        <FlatList
          data={arr}
          renderItem={renderItem}
          pagingEnabled
          showsVerticalScrollIndicator={false}
        />
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
  },


  // 
  personIcon: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 10,
    top: 10,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarHome: {
    height: 50,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.2,
    // marginBottom: 20
  },

  videoContainer: {
    height: 'auto',
    width: 'auto',

  },

  navbarInterAct: {
    height: 220,
    width: 60,
    // borderWidth: 1,
    position: 'absolute',
    bottom: 35,
    right: 0,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  likeWrap: {
    height: 30,
    width: 30,
    // borderWidth: 1,
    // borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    // paddingTop: 5
  },

  captionContainer: {
    height: 80,
    width: 300,
    // borderWidth: 1,
    position: 'absolute',
    left: 0,
    bottom: 35,
    paddingLeft: 10
  },

  in4Wrap: {
    height: '50%',
    width: 260,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  avtWrap: {
    height: '100%',
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // borderWidth: 1,
    // marginLeft: 5
  },
  avt: {
    height: 40,
    width: 40,
    borderRadius: 30,
    // borderWidth: 1,
  },

  flWrap: {
    height: 25,
    width: 75,
    borderWidth: 0.7,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white'
  },

  captionWrap: {
    height: '50%',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },

  musicWrap: {
    height: 30,
    width: '100%',
    // borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    // marginBottom: 5
  },
  musicBox: {
    height: '100%',
    width: 'auto',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  musicImg: {
    height: '100%',
    width: 30,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'darkgrey',
  },
})