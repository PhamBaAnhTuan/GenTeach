import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Icons
import { Ionicons } from '@expo/vector-icons';
// Context

const ChatBubble = ({ role, text }) => {
   return (
      <View style={[styles.chatContainer, role === 'user' ? styles.userChatItem : styles.modalChatItem]}>
         <Text style={styles.chatText}>{text}</Text>
      </View>
   )
}

export default ChatBubble;

const styles = StyleSheet.create({
   chatContainer: {
      height: 'auto',
      maxWidth: '90%',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 3,
      borderRadius: 10,
      // position: 'relative',
   },
   userChatItem: {
      backgroundColor: 'skyblue',
      alignSelf: 'flex-end',
      height: 'auto',
      // maxWidth: '90%',
      marginTop: 10,
      // marginRight: 5,
   },
   modalChatItem: {
      backgroundColor: 'aliceblue',
      // alignSelf: 'flex-start',
      height: 'auto',
      // maxWidth: '90%',
      // marginLeft: 5,
      marginTop: 2,
   },
   chatText: {
      color: 'black',
      fontSize: 13,
      fontWeight: 'bold'
   },
   speakerIcon: {
      position: 'absolute',
      bottom: 2,
      right: 5
   }
})