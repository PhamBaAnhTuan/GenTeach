import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "@firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhWBga8TJf6Uarx4rTXBA_eaKngQsrvjA",
  authDomain: "genteach-e387f.firebaseapp.com",
  databaseURL: 'https://genteach-e387f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: "genteach-e387f",
  storageBucket: "genteach-e387f.appspot.com",
  messagingSenderId: "71609285255",
  appId: "1:71609285255:web:2dc0c3fb73c1b54439d622",
  measurementId: "G-SEMW8NRJKE"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIREBASE_DATA = getDatabase();
export const fireStore = getFirestore(FIREBASE_APP);