import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa-dmhaW2OcYDEK1v9p-8bTMVy_U_Vgfo",
  authDomain: "proc71-cb0b4.firebaseapp.com",
  projectId: "proc71-cb0b4",
  storageBucket: "proc71-cb0b4.appspot.com",
  messagingSenderId: "275902302246",
  appId: "1:275902302246:web:3214485b6fa3a1dc31fee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
