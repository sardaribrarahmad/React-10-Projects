// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzUqOBTsQbcThfhGcM0JLgbns6-bmIoeE",
  authDomain: "vite-contact-624be.firebaseapp.com",
  projectId: "vite-contact-624be",
  storageBucket: "vite-contact-624be.appspot.com",
  messagingSenderId: "416790718868",
  appId: "1:416790718868:web:0ce9e35113b9a3aad7c781"
};

// Initialize Firebase    
export const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);
