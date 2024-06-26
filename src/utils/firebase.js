// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN78OPtxsrpYgyzyaHFUYkkkeL1_v7wlE",
  authDomain: "netflix-gpt-8bcf9.firebaseapp.com",
  projectId: "netflix-gpt-8bcf9",
  storageBucket: "netflix-gpt-8bcf9.appspot.com",
  messagingSenderId: "690270268354",
  appId: "1:690270268354:web:7297b726bfd7f28122445b",
  measurementId: "G-QWQEYK2NRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();