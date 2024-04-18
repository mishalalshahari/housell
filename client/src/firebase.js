// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-wala-def7f.firebaseapp.com",
  projectId: "property-wala-def7f",
  storageBucket: "property-wala-def7f.appspot.com",
  messagingSenderId: "292073762485",
  appId: "1:292073762485:web:0db4d2bc8d043cd2a198fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);