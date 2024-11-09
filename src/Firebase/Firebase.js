// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrUvdTrPM7oud8gKsm_MZUtnr8JjShRA8",
  authDomain: "proyecto-final-9be7c.firebaseapp.com",
  projectId: "proyecto-final-9be7c",
  storageBucket: "proyecto-final-9be7c.firebasestorage.app",
  messagingSenderId: "467301814556",
  appId: "1:467301814556:web:c942865e004f8dcdcbaad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);