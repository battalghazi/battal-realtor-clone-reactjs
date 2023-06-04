// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVIUUqSi5ih_6xISTWjrG0J2Fkf-kIjDQ",
  authDomain: "realtor-reactjs-49877.firebaseapp.com",
  projectId: "realtor-reactjs-49877",
  storageBucket: "realtor-reactjs-49877.appspot.com",
  messagingSenderId: "644160160604",
  appId: "1:644160160604:web:bd8d09d45ea1e692b4b799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
