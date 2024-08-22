import { createContext, useState, useContext, useEffect } from "react";
// Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { auth, fireStore } from '../Firebase/FirebaseConfig';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter, useNavigation } from "expo-router";
import { ToastAndroid } from "react-native";
// Route get params
import { useRoute } from "@react-navigation/native";

export const AuthContext = createContext<any>(null);
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

   // User
   const [user, setUser] = useState(null);
   const [cart, setCart] = useState([]);
   // const userId = user.uid;
   // Set cart data
   const storeCart = async () => {
      try {
         const ref = doc(fireStore, `user/${user?.userId}/cart/`, cart?.name);
         await setDoc(ref, {
            img: cart.img,
            name: cart.name,
            price: cart.price,
            type: cart.type,
            brand: cart.brand || cart.author,
            discount: cart.discount,
            rate: cart.rate,
            amount: 1,
         });
         // setCart([]);
      } catch (error) {
         console.error(error);
      }
      // console.log('Store cart success');
      console.log(cart?.name);
   }
   return (
      <AuthContext.Provider value={{ user, setUser, cart, setCart, storeCart }} >
         {children}
      </AuthContext.Provider>
   )
};

export const useAuth = () => {
   const value = useContext(AuthContext);
   if (!value) {
      throw new Error('useAuth must be used within a AuthProvider');
   }
   return value;
}