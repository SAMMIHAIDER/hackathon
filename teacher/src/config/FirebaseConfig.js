// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEM7eSD75bAnytjSAa2QHH8PKK7mga66Y",
    authDomain: "managment-3e7a4.firebaseapp.com",
    projectId: "managment-3e7a4",
    storageBucket: "managment-3e7a4.appspot.com",
    messagingSenderId: "242580522985",
    appId: "1:242580522985:web:65932fed9fc65e33082d78"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);