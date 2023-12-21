// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbrXLnxtYPLh-MgupeIpxwwudCSUcIjvY",
  authDomain: "ch-next-project.firebaseapp.com",
  projectId: "ch-next-project",
  storageBucket: "ch-next-project.appspot.com",
  messagingSenderId: "590331032857",
  appId: "1:590331032857:web:5103f0035a2905b67dc188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
