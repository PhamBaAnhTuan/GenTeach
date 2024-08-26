import { ActivityIndicator, Dimensions, FlatList, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// Context
import { useTheme } from '@/context/ThemeContext';
import { useData } from '@/context/DataContext';
// Route get params
import { useRoute } from "@react-navigation/native";
// Icon
import { AntDesign, Ionicons, Feather, Entypo } from '@expo/vector-icons';
// Components
import ExpertCard from '../../components/chat/ExpertCard';
import ChatBubble from '../../components/chat/ChatBot/ChatBubble';
// Chat bot
import axios from 'axios';

const ChatDetail = ({ navigation }) => {
   // Theme
   const { theme } = useTheme();
   // Route
   const route = useRoute();
   const selectedExpert = route.params?.selectedExpert;
   // Chat
   const [chat, setChat] = useState([]);
   const [input, setInput] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const apiKey = 'AIzaSyBUXx-ImDgnfjL6wtQBxjFWPyt8ERe2uWM';

   const handleInput = async () => {
      let updatedChat = [
         ...chat,
         {
            role: 'user',
            parts: [{ text: input }],
         },
      ];

      setLoading(true);

      try {
         const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
            {
               contents: updatedChat,
            }
         );
         // console.log('Gemini response: ' + JSON.stringify(response.data));

         const modelResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

         if (modelResponse) {
            const updatedChatWithModel = [
               ...updatedChat,
               {
                  role: 'model',
                  parts: [{ text: modelResponse }],
               }
            ];
            setChat(updatedChatWithModel);
            setInput('');
         }
         // console.log('bot: ', JSON.stringify(chat));
      } catch (error) {
         console.log('err calling Gemini: ', error);
         console.log('err response: ', error.response);
         setError('Try again');
      } finally {
         setLoading(false);
      }
   };

   const renderItem = ({ item }) =>
      <ChatBubble
         role={item.role}
         text={item.parts[0].text}
      // onSpeech={() => handleSpeech(item.parts[0].text)}
      />

   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
         <LinearGradient
            colors={["plum", "#66ffff"]}
            style={styles.safeView}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
         >
            <View style={styles.navbarChatDetail} >

               <View style={styles.navbarLeft}>
                  <TouchableOpacity onPress={() => navigation.goBack()} >
                     <AntDesign name="arrowleft" size={25} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('ExpertProfile', { selectedExpert })} >
                     <Image source={{ uri: selectedExpert.img }} style={styles.img} resizeMode="contain"></Image>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate('ExpertProfile', { selectedExpert })}>
                     <Text style={styles.userName}>{selectedExpert.name}</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.navbarRight}>
                  <TouchableOpacity >
                     <Ionicons name="call" size={23} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginLeft: 20 }}>
                     <Entypo name="dots-three-vertical" size={22} color="black" />
                  </TouchableOpacity>
               </View>

            </View>

            <FlatList
               // ref={flatListRef}
               data={chat}
               renderItem={renderItem}
               keyExtractor={(item, index) => index.toString()}
               contentContainerStyle={styles.chatContainer}
            />

            <View style={styles.chatInputContainer} >

               <KeyboardAvoidingView behavior='padding' >
                  <View style={styles.chatInputWrap}>
                     <TouchableOpacity>
                        <Feather name="camera" size={24} color="black" />
                     </TouchableOpacity>

                     <TextInput
                        style={styles.chatInput}
                        placeholder='Nhập tin nhắn'
                        value={input}
                        onChangeText={setInput}
                     />

                     {loading === true ? (<ActivityIndicator />)
                        : (
                           <TouchableOpacity onPress={handleInput}>
                              <Feather name="send" size={24} color="black" />
                           </TouchableOpacity>
                        )
                     }

                  </View>
               </KeyboardAvoidingView>

            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default ChatDetail

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      justifyContent: 'space-between'
   },


   // Navbar
   navbarChatDetail: {
      // flex: 1,
      height: 60,
      width: '100%',
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      // borderWidth: 1
   },
   img: {
      height: 40,
      width: 40,
      marginLeft: 15,
      borderRadius: 30
   },

   userName: {
      marginLeft: 10,
      // borderWidth: 1,
      fontSize: 14,
      fontWeight: "500",
      // color: "white"
   },
   msg: {
      marginLeft: 10,
      opacity: 0.6,
      fontSize: 13,
      // color: "white"
   },
   navbarRight: {
      height: '100%',
      width: '20%',
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-around',
      // marginHorizontal: 10,
      // borderWidth: 1
   },
   navbarLeft: {
      height: '100%',
      width: 'auto',
      flexDirection: "row",
      alignItems: "center",
      // borderWidth: 1
   },


   // Header
   header: {
      height: 70,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      // borderWidth: 1
   },

   searchContainer: {
      height: 40,
      width: '75%',
      // borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-evenly',
      paddingLeft: 5
   },
   icon: {
      height: 25,
      width: 25,
   },
   xIcon: {
      height: 20,
      width: 20,
   },

   searchInput: {
      height: '100%',
      width: '80%',
      // borderWidth: 1,
      paddingLeft: 5
   },
   searchInput1: {
      height: '100%',
      width: '75%',
   },

   // Header right
   headerRight: {
      height: 40,
      width: '20%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
   },

   // Expert container
   expertHealthyContainer: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      // marginTop: 20
   },

   // Title container
   titleContainer: {
      height: 40,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
   },
   fieldTitle: {
      fontSize: 14,
      fontWeight: 'bold',
   },
   viewAllText: {
      fontSize: 12,
      textDecorationLine: 'underline'
   },


   // Expert card container
   expertCardContainer: {
      height: 'auto',
      width: 'auto',
      // borderWidth: 1,
      paddingHorizontal: 5
   },


   // Chat container
   // Chat ai
   chatContainer: {
      height: 'auto',
      width: '100%',
      // flex: 1,
      // borderWidth: 1,
      // justifyContent: 'flex-end',
      paddingHorizontal: 5
   },


   // Chat container
   chatInputContainer: {
      height: 70,
      justifyContent: 'center',
      // borderWidth: 1
   },
   chatInputWrap: {
      height: 50,
      width: '95%',
      flexDirection: "row",
      alignItems: "center",
      alignSelf: 'center',
      justifyContent: "space-evenly",
      borderWidth: 1,
      borderRadius: 15,
   },
   chatInput: {
      height: '100%',
      width: '75%',
      fontSize: 15,
      fontWeight: "400",
      // paddingHorizontal: 5,
      // borderWidth: 1
   }
})