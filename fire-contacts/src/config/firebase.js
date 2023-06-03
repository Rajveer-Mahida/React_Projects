// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxoy5A0dHUdSdImiMHDTQGDDvggEEovOI",
  authDomain: "fire-contact-df8b8.firebaseapp.com",
  projectId: "fire-contact-df8b8",
  storageBucket: "fire-contact-df8b8.appspot.com",
  messagingSenderId: "555314084351",
  appId: "1:555314084351:web:bd941df08aa7f144ed8fca",
  measurementId: "G-V1LNF4P80N"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);