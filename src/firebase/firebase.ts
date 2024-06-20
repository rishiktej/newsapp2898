// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOs0KAzhgTMo66BjPhYOosxOzza40cGck",
  authDomain: "newsapp9849.firebaseapp.com",
  projectId: "newsapp9849",
  storageBucket: "newsapp9849.appspot.com",
  messagingSenderId: "972766195247",
  appId: "1:972766195247:web:c7c976d380657f2b02e0da",
  measurementId: "G-NCFG622EB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };