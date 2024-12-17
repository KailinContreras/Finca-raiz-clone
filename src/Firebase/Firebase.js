// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getStorage } from "firebase/storage";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth"; //esto es  para autenticación
import { getFirestore } from "firebase/firestore"; //esto es para la base de datos
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

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);