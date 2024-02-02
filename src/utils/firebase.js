// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXQGP5tZNFzOUEehh8LHkGAinYE6xfVXY",
  authDomain: "netflixgpt-314c2.firebaseapp.com",
  projectId: "netflixgpt-314c2",
  storageBucket: "netflixgpt-314c2.appspot.com",
  messagingSenderId: "9489435877",
  appId: "1:9489435877:web:2cd9743a20255c232fd80c",
  measurementId: "G-P9VSXXNSM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth=getAuth();