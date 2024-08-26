import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react';
// Firebase
import { auth, fireStore } from '../Firebase/FirebaseConfig'
// Fire store
import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";


export const DataContext = createContext<any>(null);
export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

   // Chat
   const [mentalHealthExpert, setMentalHealthExpert] = useState([]);
   const [sexualHealthExpert, setSexualHealthExpert] = useState([]);
   const [dermatologistExpert, setDermatologistExpert] = useState([]);
   const [physicalHealthExpert, setPhysicalHealthExpert] = useState([]);
   // Shop
   const [shopType, setShopType] = useState([]);
   const [shopBCS, setShopBCS] = useState([]);
   const [shopGel, setShopGel] = useState([]);
   const [shopBook, setShopBook] = useState([]);
   // Cart
   const [cart, setCart] = useState([]);
   // Study
   const [courseTopic, setCourseTopic] = useState([]);
   const [coursePopular, setCoursePopular] = useState([]);
   // Podcast
   const [podcastPopular, setPodcastPopular] = useState([]);
   const [podcastSafeSexual, setPodcastSafeSexual] = useState([]);
   const [podcastSelfGrowth, setPodcastSelfGrowth] = useState([]);
   const [podcastLove, setPodcastLove] = useState([]);

   useEffect(() => {
      // Chat
      const getMentalHealthExpert = async () => {
         try {
            const ref = collection(fireStore, "chat/expert/mentalHealth/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setMentalHealthExpert(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Mental health expert data:", error);
         }
      };
      getMentalHealthExpert();

      const getSexualHealthExpert = async () => {
         try {
            const ref = collection(fireStore, "chat/expert/sexualHealth/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setSexualHealthExpert(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Sexual health expert data:", error);
         }
      };
      getSexualHealthExpert();

      const getDermatologistExpert = async () => {
         try {
            const ref = collection(fireStore, "chat/expert/dermatologist/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setDermatologistExpert(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Sexual dermatologist expert data:", error);
         }
      };
      getDermatologistExpert();

      const getPhysicalHealthExpert = async () => {
         try {
            const ref = collection(fireStore, "chat/expert/physicalHealth/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setPhysicalHealthExpert(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Expert title data:", error);
         }
      };
      getPhysicalHealthExpert();


      // Shop
      const getShopType = async () => {
         try {
            const ref = collection(fireStore, "shop/shopType/shopType/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setShopType(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Shop Type data:", error);
         }
      };
      getShopType();

      const getShopBCS = async () => {
         try {
            const ref = collection(fireStore, "shop/shopBCS/shopBCS/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setShopBCS(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Shop BCS data:", error);
         }
      };
      getShopBCS();

      const getShopGel = async () => {
         try {
            const ref = collection(fireStore, "shop/shopGel/shopGel/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setShopGel(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Shop gel data:", error);
         }
      };
      getShopGel();

      const getShopBook = async () => {
         try {
            const ref = collection(fireStore, "shop/shopBook/18+/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setShopBook(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Shop book data:", error);
         }
      };
      getShopBook();
      

      // Study
      const getCourseTopic = async () => {
         try {
            const ref = collection(fireStore, "course/topic/topic/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setCourseTopic(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Course topic data:", error);
         }
      };
      getCourseTopic();

      // 
      const getCoursePopular = async () => {
         try {
            const ref = collection(fireStore, "course/coursePopular/coursePopular/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setCoursePopular(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching Course popular data:", error);
         }
      };
      getCoursePopular();


      // Podcast
      const getPodcastPopular = async () => {
         try {
            const ref = collection(fireStore, "podcast/podcastPopular/podcastPopular/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setPodcastPopular(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching podcast popular data:", error);
         }
      };
      getPodcastPopular();

      // Podcast Love
      const getPodcastSafeSexual = async () => {
         try {
            const ref = collection(fireStore, "podcast/podcastSafeSexual/podcastSafeSexual/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setPodcastSafeSexual(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching podcast safe sexual data:", error);
         }
      };
      getPodcastSafeSexual();

      // Podcast Love
      const getPodcastLove = async () => {
         try {
            const ref = collection(fireStore, "podcast/podcastLove/podcastLove/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setPodcastLove(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching podcast love data:", error);
         }
      };
      getPodcastLove();

      // Podcast self grow
      const getPodcastSelfGrowth = async () => {
         try {
            const ref = collection(fireStore, "podcast/podcastSelfGrowth/podcastSelfGrowth/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setPodcastSelfGrowth(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching podcast self growth data:", error);
         }
      };
      getPodcastSelfGrowth();

      
   }, [])

   return (
      <DataContext.Provider value={{physicalHealthExpert, mentalHealthExpert, sexualHealthExpert, dermatologistExpert, shopType, shopBCS, shopGel, shopBook, courseTopic, coursePopular, podcastPopular, podcastSafeSexual, podcastSelfGrowth, podcastLove}}>
         {children}
      </DataContext.Provider>
   )
};

export const useData = () => {
   const value = useContext(DataContext);
   if (!value) {
      throw new Error('useTheme must be used within a DataProvider');
   }
   return value;
}