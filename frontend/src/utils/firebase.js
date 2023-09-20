
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-shop-app-dfc16.firebaseapp.com",
  projectId: "next-shop-app-dfc16",
  storageBucket: "next-shop-app-dfc16.appspot.com",
  messagingSenderId: "322973964279",
  appId: "1:322973964279:web:91a04f62990f56033e80f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


