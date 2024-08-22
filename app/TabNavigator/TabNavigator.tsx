import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// Components
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import Chat from '../Chat/Chat';
import Study from '../Study/Study';
import Podcast from '../Podcast/Podcast';
// Icons
import { Ionicons } from "@expo/vector-icons";


const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         activeColor="white"
         inactiveColor="gray"
         barStyle={{ backgroundColor: 'plum', height: 70 }}
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               let iconName;
               if (route.name === "Home") {
                  [iconName, color, size] = focused
                     ? ['home', 'plum', 25]
                     : ['home-outline', 'grey', 20];
               } else if (route.name === "Shop") {
                  [iconName, color, size] = focused
                     ? ['cart', 'plum', 25]
                     : ['cart-outline', 'grey', 20];
               } else if (route.name === "Chat") {
                  [iconName, color, size] = focused
                     ? ['chatbubble-sharp', 'plum', 25]
                     : ['chatbubble-outline', 'grey', 20];
               } else if (route.name === "Study") {
                  [iconName, color, size] = focused
                     ? ['book', 'plum', 25]
                     : ['book-outline', 'grey', 20];
               } else if (route.name === "Podcast") {
                  [iconName, color, size] = focused
                     ? ['headset', 'plum', 25]
                     : ['headset-outline', 'grey', 20];
               }
               // You can return any React element here, including custom icons
               return <Ionicons name={iconName} size={size} color={color} />;
            },
            
         }
      )}
      >
         <Tab.Screen name="Chat" component={Chat} />
         <Tab.Screen name="Shop" component={Shop} />
         <Tab.Screen name="Home" component={Home} />
         <Tab.Screen name="Study" component={Study} />
         <Tab.Screen name="Podcast" component={Podcast} />
      </Tab.Navigator>
   )
}

export default TabNavigator

const styles = StyleSheet.create({})