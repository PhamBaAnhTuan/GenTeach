import { createContext, useState, useContext, useEffect } from "react";
// Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { auth, fireStore } from '../Firebase/FirebaseConfig';
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useRouter, useNavigation } from "expo-router";
import { ToastAndroid } from "react-native";
// Route get params
import { useRoute } from "@react-navigation/native";

export const AuthContext = createContext<any>(null);
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

   // User
   const [user, setUser] = useState(null);
   const [cart, setCart] = useState({});
   const [cartEnd, setCartEnd] = useState([]);
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
         console.log('Saved cart: ', cart?.name);
         setCart({});
      } catch (error) {

      }
   };

   useEffect(() => {
      // Cart
      const getCart = async () => {
         try {
            const ref = collection(fireStore, `user/${user.userId}/cart/`);
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setCartEnd(data);
            // console.log('user id: ', user?.userId);
            // console.log('Cart end: ', data);
         } catch (error) {
            // console.error("Error fetching cart data:", error);
         }
      };
      getCart();
   }, [])

   return (
      <AuthContext.Provider value={{ user, setUser, cart, setCart, storeCart, cartEnd }} >
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