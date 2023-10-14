// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f6ac0.firebaseapp.com",
  projectId: "mern-auth-f6ac0",
  storageBucket: "mern-auth-f6ac0.appspot.com",
  messagingSenderId: "741042093559",
  appId: "1:741042093559:web:1a3c9f3cbe59a0297242f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);