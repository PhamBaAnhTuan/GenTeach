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
   const [physicalHealthExpert, setPhysicalHealthExpert] = useState([]);
   // Shop
   const [shopType, setShopType] = useState([]);
   const [shopBCS, setShopBCS] = useState([]);
   const [shopGel, setShopGel] = useState([]);
   const [shopBook, setShopBook] = useState([]);
   // Study
   const [courseTopic, setCourseTopic] = useState([]);
   const [coursePopular, setCoursePopular] = useState([]);
   // Podcast
   const [podcastPopular, setPodcastPopular] = useState([]);
   const [podcastSelfGrow, setPodcastSelfGrow] = useState([]);
   const [podcastLove, setPodcastLove] = useState([]);

   useEffect(() => {
      // Chat
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
            const ref = collection(fireStore, "podcast/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setPodcastPopular(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching podcast popular data:", error);
         }
      };
      getPodcastPopular();

      // Podcast self grow
      const getPodcastSelfGrow = async () => {
         try {
            const ref = collection(fireStore, "podcast2/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setPodcastSelfGrow(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching podcast self grow data:", error);
         }
      };
      getPodcastSelfGrow();

      // Podcast self grow
      const getPodcastLove = async () => {
         try {
            const ref = collection(fireStore, "podcast3/");
            const query = await getDocs(ref);
            const data = query.docs.map((doc) => doc.data());
            setPodcastLove(data);
            // console.log(data);
         } catch (error) {
            console.error("Error fetching podcast love data:", error);
         }
      };
      getPodcastLove();
   }, [])

   return (
      <DataContext.Provider value={{physicalHealthExpert, mentalHealthExpert, sexualHealthExpert, shopType, shopBCS, shopGel, shopBook, courseTopic, coursePopular, podcastPopular, podcastSelfGrow, podcastLove}}>
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