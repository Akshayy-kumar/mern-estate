// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-258ef.firebaseapp.com",
  projectId: "mern-estate-258ef",
  storageBucket: "mern-estate-258ef.firebasestorage.app",
  messagingSenderId: "306995570438",
  appId: "1:306995570438:web:2ce8313f2429f24685e087"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);