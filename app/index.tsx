import { useEffect } from 'react';
// Router
import { Slot, useRouter, useSegments } from 'expo-router';
// Context
import { ThemeContextProvider, useTheme } from '../context/ThemeContext';
import { AuthContextProvider, useAuth } from '../context/AuthContext';
import { DataContextProvider, useData } from '../context/DataContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screen
import TabNavigator from './TabNavigator/TabNavigator';
import SignIn from './SignIn';
import SignUp from './SignUp';
// Chat
import Chat from './Chat/Chat';
import ChatAI from './Chat/ChatAI/ChatAI';
// import GPTChat from './Chat/ChatAI/GPTChat';
import ChatDetail from './Chat/ChatDetail';
import ChatViewAll from './Chat/ChatViewAll';
import ExpertProfile from './Chat/ExpertProfile/ExpertProfile';
import ExpertIn4 from './Chat/ExpertIn4';
import Booking from './Chat/ExpertProfile/Booking';
import BookingDone from './Chat/ExpertProfile/BookingDone';
// Shop
import Cart from './Shop/Cart';
import ShopDetail from './Shop/ShopDetail';
import ShopViewAll from './Shop/ShopViewAll';
import BuyNow from './Shop/BuyNow';
// Home
import Profile from './Home/Profile';
// Study
import StudyDetail from './Study/StudyDetail';
import PodcastDetail from './Podcast/PodcastDetail';
import StudyNow from './Study/StudyNow';

const Stack = createNativeStackNavigator();

const MainLayout = () => {
  return (
    <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="ChatAI" component={ChatAI} />
      {/* <Stack.Screen name="GPTChat" component={GPTChat} /> */}
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
      <Stack.Screen name="ChatViewAll" component={ChatViewAll} />
      <Stack.Screen name="ExpertIn4" component={ExpertIn4} />
      <Stack.Screen name="ExpertProfile" component={ExpertProfile} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="BookingDone" component={BookingDone} />

      <Stack.Screen name="ShopViewAll" component={ShopViewAll} />
      <Stack.Screen name="ShopDetail" component={ShopDetail} />
      <Stack.Screen name="BuyNow" component={BuyNow} />
      <Stack.Screen name="Cart" component={Cart} />

      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen name="StudyDetail" component={StudyDetail} />
      <Stack.Screen name="StudyNow" component={StudyNow} />

      <Stack.Screen name="PodcastDetail" component={PodcastDetail} />
    </Stack.Navigator>
  )
};

const RootLayout = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <DataContextProvider>
          <MainLayout />
        </DataContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default RootLayout;
